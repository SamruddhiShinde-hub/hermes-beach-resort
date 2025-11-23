import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '@/context/BookingContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

interface BookingWidgetProps {
  className?: string;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({ className = '' }) => {
  const navigate = useNavigate();
  const { setCheckIn, setCheckOut, setAdults, setChildren } = useBooking();
  
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleCheckAvailability = () => {
    setCheckIn(checkInDate);
    setCheckOut(checkOutDate);
    setAdults(adultsCount);
    setChildren(childrenCount);
    navigate('/book');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`bg-card p-6 rounded-lg luxury-shadow ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Check In</label>
          <Input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="w-full"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Check Out</label>
          <Input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="w-full"
            min={checkInDate || new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Adults</label>
          <Input
            type="number"
            value={adultsCount}
            onChange={(e) => setAdultsCount(parseInt(e.target.value) || 1)}
            min="1"
            max="10"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Children</label>
          <Input
            type="number"
            value={childrenCount}
            onChange={(e) => setChildrenCount(parseInt(e.target.value) || 0)}
            min="0"
            max="10"
            className="w-full"
          />
        </div>

        <div className="flex items-end">
          <Button
            onClick={handleCheckAvailability}
            className="w-full bg-gradient-gold hover:opacity-90 transition-opacity"
            disabled={!checkInDate || !checkOutDate}
          >
            Check Availability
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
