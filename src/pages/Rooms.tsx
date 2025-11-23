import React from 'react';
import { motion } from 'framer-motion';
import { RoomCard, Room } from '@/components/RoomCard';

const rooms: Room[] = [
  {
    id: 'deluxe',
    title: 'Deluxe Room',
    size: '352 sq.ft.',
    guests: '2 Adults + 1 Child',
    pricePerNight: 8500,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    description: 'Elegant room featuring a single king bed with 10" individual pocket spring mattress, floor-to-ceiling windows offering greenery views, and rich sophisticated décor. Equipped with 43" LED TV, electric kettle, in-room dining, and full range of bath amenities.'
  },
  {
    id: 'premium',
    title: 'Premium Room',
    size: '484 sq.ft.',
    guests: '2 Adults + 1 Child',
    pricePerNight: 12000,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    description: 'Spacious room with separate living, working, and sleeping areas. Features 2-seater sofa, executive desk with ergonomic chair, mini bar, and enhanced amenities. Perfect for extended stays with 24-hour in-room dining and high-speed Wi-Fi.'
  },
  {
    id: 'one-bedroom-suite',
    title: '1 Bedroom Suite',
    size: '498 sq.ft.',
    guests: '2 Adults + 2 Children',
    pricePerNight: 15000,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    description: 'Luxurious apartment-style suite with separate bedroom, living & dining areas, and private balcony. Includes kitchenette with microwave, fridge, dining table for 4, and floor-to-ceiling sliding doors. Ideal for families.'
  },
  {
    id: 'two-bedroom-suite',
    title: '2 Bedroom Suite',
    size: '726 sq.ft.',
    guests: '4 Adults + 2 Children',
    pricePerNight: 22000,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    description: 'Expansive suite with two bedrooms, shared living & dining space, and private balcony. Features kitchenette, premium amenities in both bedrooms, and spacious layout perfect for families or groups seeking comfort and privacy.'
  }
];

const Rooms: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=80"
            alt="Luxury Rooms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Rooms & Suites
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover your perfect sanctuary of comfort and luxury
          </p>
        </motion.div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">
              Premium Amenities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every room is thoughtfully equipped with luxury amenities for your comfort
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: '🛏️', title: 'Premium Bedding', desc: 'Pocket spring mattress' },
              { icon: '📺', title: 'Entertainment', desc: '43" LED TV' },
              { icon: '☕', title: 'In-Room Dining', desc: '24-hour service' },
              { icon: '🌐', title: 'High-Speed WiFi', desc: 'Complimentary' },
              { icon: '❄️', title: 'Climate Control', desc: 'Individual AC' },
              { icon: '🛁', title: 'Luxury Bath', desc: 'Egyptian cotton towels' },
              { icon: '🔒', title: 'Safe & Secure', desc: 'In-room safe' },
              { icon: '🧹', title: 'Housekeeping', desc: 'Daily service' }
            ].map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{amenity.icon}</div>
                <h3 className="font-semibold mb-1">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
