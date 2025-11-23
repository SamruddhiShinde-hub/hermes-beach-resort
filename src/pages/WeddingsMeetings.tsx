import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const venues = [
  {
    name: 'Kadike Beach Wedding',
    capacity: 'Up to 1,000 guests',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    description: 'Karnataka\'s finest beach wedding venue. Exchange vows with your toes in the sand and the ocean as your backdrop.',
    type: 'Outdoor'
  },
  {
    name: 'Serene Lawns',
    capacity: '100-1,000 guests',
    size: '11,000 sq.ft.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
    description: 'Spacious outdoor venue perfect for grand celebrations under the stars.',
    type: 'Outdoor'
  },
  {
    name: 'Regal Hall',
    capacity: '50-400 guests',
    image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c31c?w=800&q=80',
    description: 'Elegant indoor banquet hall with modern amenities and sophisticated décor.',
    type: 'Indoor'
  },
  {
    name: 'Elysium Lounge',
    capacity: '50-150 guests',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    description: 'Intimate venue perfect for cocktail receptions and smaller gatherings.',
    type: 'Indoor'
  },
  {
    name: 'Houseboat Weddings',
    capacity: 'Intimate ceremonies',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    description: 'Unique backwater wedding experience for a romantic, unforgettable ceremony.',
    type: 'Unique'
  }
];

const services = [
  {
    title: 'Venue Selection',
    icon: '📍',
    description: 'Expert guidance in choosing the perfect venue for your event'
  },
  {
    title: 'Catering Excellence',
    icon: '🍽️',
    description: 'Customized menus featuring multi-cuisine options'
  },
  {
    title: 'Décor & Design',
    icon: '🎨',
    description: 'Stunning décor that brings your vision to life'
  },
  {
    title: 'Sound & Lighting',
    icon: '🎵',
    description: 'Professional audio-visual equipment and lighting'
  },
  {
    title: 'Entertainment',
    icon: '🎤',
    description: 'DJs, live bands, dance troupes, and emcees'
  },
  {
    title: 'Photography',
    icon: '📸',
    description: 'Professional photography and videography services'
  }
];

const WeddingsMeetings: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
            alt="Wedding Venue"
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
            Weddings & Events
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Create unforgettable memories at Udupi's premier event destination
          </p>
        </motion.div>
      </section>

      {/* Venues Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">
              Our Venues
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From beach ceremonies to elegant banquet halls
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden card-shadow hover:luxury-shadow transition-all duration-500"
              >
                <div className="relative h-64">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-gold text-white rounded-full text-sm">
                    {venue.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">{venue.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{venue.capacity}</p>
                  {venue.size && (
                    <p className="text-sm text-muted-foreground mb-3">{venue.size}</p>
                  )}
                  <p className="text-sm text-foreground/80">{venue.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Complete Event Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle every detail so you can enjoy your special day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg card-shadow text-center"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-gold text-white p-12 rounded-lg luxury-shadow text-center"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              Wedding Packages
            </h2>
            <p className="text-lg mb-6">
              Starting from ₹4,900 per person
            </p>
            <p className="text-white/90 mb-8">
              Packages for 200 guests start from approximately ₹9,80,000 + GST, including 2 nights stay, meals, decoration, entertainment, and professional photography/videography. Rates vary by season and menu selection.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                Request a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Corporate Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif font-bold mb-6">
                Corporate Events & Conferences
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Host successful conferences, product launches, sales meets, and incentive travel programs at our versatile venues accommodating 25-500 guests.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>State-of-the-art audio-visual equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>High-speed internet connectivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Professional event coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Catering services and break-out areas</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="bg-gradient-gold hover:opacity-90 transition-opacity">
                  Plan Your Event
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-lg overflow-hidden luxury-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                alt="Corporate Event"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingsMeetings;
