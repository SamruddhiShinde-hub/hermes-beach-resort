import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useBooking, BookingRoom } from '@/context/BookingContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { FiUsers, FiMaximize2, FiTrash2 } from 'react-icons/fi';

const availableRooms = [
  {
    id: 'deluxe',
    title: 'Deluxe Room',
    size: '352 sq.ft.',
    capacity: { adults: 2, children: 1 },
    pricePerNight: 8500,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80'
  },
  {
    id: 'premium',
    title: 'Premium Room',
    size: '484 sq.ft.',
    capacity: { adults: 2, children: 1 },
    pricePerNight: 12000,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&q=80'
  },
  {
    id: 'one-bedroom-suite',
    title: '1 Bedroom Suite',
    size: '498 sq.ft.',
    capacity: { adults: 2, children: 2 },
    pricePerNight: 15000,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80'
  },
  {
    id: 'two-bedroom-suite',
    title: '2 Bedroom Suite',
    size: '726 sq.ft.',
    capacity: { adults: 4, children: 2 },
    pricePerNight: 22000,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80'
  }
];

const Book: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { currentBooking, setCheckIn, setCheckOut, setAdults, setChildren, addRoom, removeRoom, submitBooking, calculateTotal } = useBooking();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateNights = () => {
    if (currentBooking.checkIn && currentBooking.checkOut) {
      const checkIn = new Date(currentBooking.checkIn);
      const checkOut = new Date(currentBooking.checkOut);
      const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24));
      return nights > 0 ? nights : 0;
    }
    return 0;
  };

  const handleAddRoom = (room: typeof availableRooms[0]) => {
    if (!currentBooking.checkIn || !currentBooking.checkOut) {
      toast({
        title: 'Select Dates',
        description: 'Please select check-in and check-out dates first.',
        variant: 'destructive'
      });
      return;
    }

    const nights = calculateNights();
    const totalPrice = room.pricePerNight * nights;

    const bookingRoom: BookingRoom = {
      roomType: room.id,
      roomTitle: room.title,
      quantity: 1,
      pricePerNight: room.pricePerNight,
      totalPrice
    };

    addRoom(bookingRoom);
    toast({
      title: 'Room Added',
      description: `${room.title} has been added to your booking.`,
    });
  };

  const handleSubmitBooking = async () => {
    if (!user) {
      toast({
        title: 'Login Required',
        description: 'Please login to complete your booking.',
        variant: 'destructive'
      });
      navigate('/login');
      return;
    }

    if (!currentBooking.rooms || currentBooking.rooms.length === 0) {
      toast({
        title: 'No Rooms Selected',
        description: 'Please add at least one room to your booking.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const bookingId = await submitBooking(user);
      toast({
        title: 'Booking Confirmed!',
        description: `Your booking has been confirmed. Booking ID: ${bookingId.slice(0, 8)}`,
      });
      navigate('/my-bookings');
    } catch (error: any) {
      toast({
        title: 'Booking Failed',
        description: error.message || 'Failed to complete booking.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-serif font-bold mb-2">Book Your Stay</h1>
          <p className="text-muted-foreground">Select your dates and choose your perfect room</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Room Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-6 rounded-lg card-shadow"
            >
              <h2 className="text-2xl font-serif font-bold mb-4">Booking Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Check In</label>
                  <Input
                    type="date"
                    value={currentBooking.checkIn || ''}
                    onChange={(e) => setCheckIn(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Check Out</label>
                  <Input
                    type="date"
                    value={currentBooking.checkOut || ''}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={currentBooking.checkIn || new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Adults</label>
                  <Input
                    type="number"
                    value={currentBooking.adults || 2}
                    onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
                    min="1"
                    max="10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Children</label>
                  <Input
                    type="number"
                    value={currentBooking.children || 0}
                    onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
                    min="0"
                    max="10"
                  />
                </div>
              </div>
              {calculateNights() > 0 && (
                <p className="mt-4 text-sm text-muted-foreground">
                  Total Nights: <span className="font-semibold text-foreground">{calculateNights()}</span>
                </p>
              )}
            </motion.div>

            {/* Available Rooms */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">Available Rooms</h2>
              {availableRooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                  className="bg-card rounded-lg overflow-hidden card-shadow hover:luxury-shadow transition-all duration-500"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                    <div className="md:col-span-1">
                      <img
                        src={room.image}
                        alt={room.title}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:col-span-2 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center space-x-1">
                            <FiMaximize2 className="w-4 h-4" />
                            <span>{room.size}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FiUsers className="w-4 h-4" />
                            <span>{room.capacity.adults} Adults + {room.capacity.children} Children</span>
                          </div>
                        </div>
                        <p className="text-lg font-semibold text-primary">
                          ₹{room.pricePerNight.toLocaleString()}/night
                        </p>
                        {calculateNights() > 0 && (
                          <p className="text-sm text-muted-foreground">
                            Total: ₹{(room.pricePerNight * calculateNights()).toLocaleString()} for {calculateNights()} nights
                          </p>
                        )}
                      </div>
                      <div className="mt-4">
                        <Button
                          onClick={() => handleAddRoom(room)}
                          className="bg-gradient-gold hover:opacity-90 transition-opacity"
                        >
                          Add Room
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-6 rounded-lg card-shadow sticky top-24"
            >
              <h2 className="text-2xl font-serif font-bold mb-4">Booking Summary</h2>

              {currentBooking.rooms && currentBooking.rooms.length > 0 ? (
                <>
                  <div className="space-y-3 mb-6">
                    {currentBooking.rooms.map((room, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{room.roomTitle}</h4>
                          <p className="text-xs text-muted-foreground">
                            ₹{room.pricePerNight.toLocaleString()} x {calculateNights()} nights
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold">₹{room.totalPrice.toLocaleString()}</span>
                          <button
                            onClick={() => removeRoom(index)}
                            className="text-destructive hover:text-destructive/80"
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total Amount</span>
                      <span className="text-primary">₹{calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleSubmitBooking}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-gold hover:opacity-90 transition-opacity"
                    size="lg"
                  >
                    {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                  </Button>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">No rooms selected yet</p>
                  <p className="text-sm text-muted-foreground">Add rooms from the available options</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
