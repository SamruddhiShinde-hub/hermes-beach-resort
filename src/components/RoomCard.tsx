import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FiUsers, FiMaximize2 } from 'react-icons/fi';

export interface Room {
  id: string;
  title: string;
  size: string;
  guests: string;
  pricePerNight: number;
  image: string;
  description: string;
}

interface RoomCardProps {
  room: Room;
  index?: number;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-card rounded-lg overflow-hidden card-shadow hover:luxury-shadow transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-gradient-gold text-white px-4 py-2 rounded-full text-sm font-medium">
          ₹{room.pricePerNight.toLocaleString()}/night
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold mb-2">{room.title}</h3>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-2">
            <FiMaximize2 className="w-4 h-4" />
            <span>{room.size}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiUsers className="w-4 h-4" />
            <span>{room.guests}</span>
          </div>
        </div>

        <p className="text-sm text-foreground/80 mb-6 line-clamp-3">
          {room.description}
        </p>

        <div className="flex space-x-3">
          <Link to={`/rooms/${room.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          <Link to="/book" className="flex-1">
            <Button className="w-full bg-gradient-gold hover:opacity-90 transition-opacity">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
