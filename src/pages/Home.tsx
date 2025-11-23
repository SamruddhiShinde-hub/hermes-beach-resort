import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookingWidget } from '@/components/BookingWidget';
import { RoomCard, Room } from '@/components/RoomCard';
import { Button } from '@/components/ui/button';
import { FiAward, FiStar, FiHeart, FiCheckCircle } from 'react-icons/fi';

const featuredRooms: Room[] = [
  {
    id: 'deluxe',
    title: 'Deluxe Room',
    size: '352 sq.ft.',
    guests: '2 Adults + 1 Child',
    pricePerNight: 8500,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    description: 'Elegant room with king bed, floor-to-ceiling windows, and views of lush greenery. Features premium amenities and sophisticated décor.'
  },
  {
    id: 'premium',
    title: 'Premium Room',
    size: '484 sq.ft.',
    guests: '2 Adults + 1 Child',
    pricePerNight: 12000,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    description: 'Spacious room with separate living area, executive desk, and enhanced amenities. Perfect for extended stays.'
  },
  {
    id: 'one-bedroom-suite',
    title: '1 Bedroom Suite',
    size: '498 sq.ft.',
    guests: '2 Adults + 2 Children',
    pricePerNight: 15000,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    description: 'Luxurious suite with private balcony, kitchenette, and separate bedroom. Ideal for families seeking extra space and comfort.'
  }
];

const testimonials = [
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'An absolutely wonderful experience! The beach location is perfect, staff is incredibly friendly, and the rooms are spotless. Will definitely return!'
  },
  {
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Hosted our wedding here and it was magical. The team handled everything perfectly. The beachside ceremony was a dream come true.'
  },
  {
    name: 'Anjali Mehta',
    rating: 5,
    text: 'Perfect resort for a family vacation. Kids loved the waterpark, we enjoyed the restaurants, and the sunset views from the beach were breathtaking.'
  }
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hermes-waterpark.png"
            alt="Hermes Resort Beach View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-20 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
              Your Hotel in Udupi.
            </h2>
            <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
              Moments in Paradise Between Mountains and Palm Trees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="container mx-auto px-4 -mt-12 relative z-20">
        <BookingWidget />
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Welcome to Paradise
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Nestled just 500 meters from the pristine Kadike Beach in Udupi, Karnataka, Hermes Resort & Spa offers an unparalleled luxury experience where elegance meets the serenity of coastal living.
              </p>
              <p className="text-lg text-foreground/80 mb-8">
                Whether you're planning a romantic getaway, a memorable wedding, a corporate retreat, or a family vacation, our world-class facilities and warm hospitality ensure your stay is nothing short of extraordinary.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Prime Location</h4>
                    <p className="text-sm text-muted-foreground">500m from Kadike Beach</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Luxury Rooms</h4>
                    <p className="text-sm text-muted-foreground">4 room categories</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Fine Dining</h4>
                    <p className="text-sm text-muted-foreground">3 restaurants & bar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Event Venues</h4>
                    <p className="text-sm text-muted-foreground">Beach to banquet halls</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden luxury-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80"
                alt="Resort View"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Rooms & Suites
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience unparalleled comfort in our thoughtfully designed accommodations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/rooms">
              <Button size="lg" className="bg-gradient-gold hover:opacity-90 transition-opacity">
                View All Rooms
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Weddings & Events Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden luxury-shadow order-2 lg:order-1"
            >
              <img
                src="/images/beach-wedding.jpg"
                alt="Beach Wedding"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Unforgettable Events
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                From intimate beach ceremonies to grand banquet celebrations, Hermes Resort offers versatile venues for your special occasions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <FiHeart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Beach Weddings</h4>
                    <p className="text-sm text-muted-foreground">Say 'I do' with your toes in the sand at Kadike Beach</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FiAward className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Banquet Halls</h4>
                    <p className="text-sm text-muted-foreground">Regal Hall accommodates up to 400 guests</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FiStar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Houseboat Ceremonies</h4>
                    <p className="text-sm text-muted-foreground">Unique backwater wedding experience</p>
                  </div>
                </li>
              </ul>
              <Link to="/weddings-meetings">
                <Button size="lg" className="bg-gradient-gold hover:opacity-90 transition-opacity">
                  Plan Your Dream Event
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Guest Experiences
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear what our guests have to say about their stay
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-lg card-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold">– {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready for Your Escape?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Book your luxury beachside getaway today and experience the finest hospitality in Udupi
            </p>
            <Link to="/book">
              <Button size="lg" className="bg-gradient-gold hover:opacity-90 transition-opacity text-lg px-10 py-6">
                Book Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
