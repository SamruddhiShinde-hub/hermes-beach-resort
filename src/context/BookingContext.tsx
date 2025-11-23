import React, { createContext, useContext, useState, useCallback } from 'react';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';
import type { User } from 'firebase/auth';

export interface BookingRoom {
  roomType: string;
  roomTitle: string;
  quantity: number;
  pricePerNight: number;
  totalPrice: number;
}

export interface Booking {
  id?: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: BookingRoom[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

interface BookingContextType {
  currentBooking: Partial<Booking>;
  setCheckIn: (date: string) => void;
  setCheckOut: (date: string) => void;
  setAdults: (count: number) => void;
  setChildren: (count: number) => void;
  addRoom: (room: BookingRoom) => void;
  removeRoom: (index: number) => void;
  clearBooking: () => void;
  submitBooking: (user: User) => Promise<string>;
  getUserBookings: (user: User) => Promise<Booking[]>;
  calculateTotal: () => number;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentBooking, setCurrentBooking] = useState<Partial<Booking>>({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    rooms: [],
    status: 'pending'
  });

  const setCheckIn = useCallback((date: string) => {
    setCurrentBooking(prev => ({ ...prev, checkIn: date }));
  }, []);

  const setCheckOut = useCallback((date: string) => {
    setCurrentBooking(prev => ({ ...prev, checkOut: date }));
  }, []);

  const setAdults = useCallback((count: number) => {
    setCurrentBooking(prev => ({ ...prev, adults: count }));
  }, []);

  const setChildren = useCallback((count: number) => {
    setCurrentBooking(prev => ({ ...prev, children: count }));
  }, []);

  const addRoom = useCallback((room: BookingRoom) => {
    setCurrentBooking(prev => ({
      ...prev,
      rooms: [...(prev.rooms || []), room]
    }));
  }, []);

  const removeRoom = useCallback((index: number) => {
    setCurrentBooking(prev => ({
      ...prev,
      rooms: (prev.rooms || []).filter((_, i) => i !== index)
    }));
  }, []);

  const calculateTotal = useCallback(() => {
    return (currentBooking.rooms || []).reduce((sum, room) => sum + room.totalPrice, 0);
  }, [currentBooking.rooms]);

  const clearBooking = useCallback(() => {
    setCurrentBooking({
      checkIn: '',
      checkOut: '',
      adults: 2,
      children: 0,
      rooms: [],
      status: 'pending'
    });
  }, []);

  const submitBooking = async (user: User): Promise<string> => {
    if (!user) {
      throw new Error('User must be logged in to make a booking');
    }

    const booking: Omit<Booking, 'id'> = {
      userId: user.uid,
      checkIn: currentBooking.checkIn || '',
      checkOut: currentBooking.checkOut || '',
      adults: currentBooking.adults || 2,
      children: currentBooking.children || 0,
      rooms: currentBooking.rooms || [],
      totalAmount: calculateTotal(),
      status: 'confirmed',
      createdAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'bookings'), booking);
    clearBooking();
    return docRef.id;
  };

  const getUserBookings = async (user: User): Promise<Booking[]> => {
    if (!user) {
      return [];
    }

    const q = query(collection(db, 'bookings'), where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Booking));
  };

  const value = {
    currentBooking,
    setCheckIn,
    setCheckOut,
    setAdults,
    setChildren,
    addRoom,
    removeRoom,
    clearBooking,
    submitBooking,
    getUserBookings,
    calculateTotal
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
