import React from 'react';
import { motion } from 'framer-motion';

const restaurants = [
  {
    name: 'AMBROSIA',
    type: 'Indoor AC Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description: 'Experience fine dining in an elegant air-conditioned setting. Ambrosia offers an exquisite menu featuring authentic Indian cuisine, tandoor specialties, Chinese favorites, and traditional South Indian delicacies.',
    features: ['Multi-Cuisine', 'Indoor Seating', 'Air Conditioned', 'Fine Dining']
  },
  {
    name: 'OASIS',
    type: 'Outdoor Open-Air Restaurant',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
    description: 'Dine under the stars at our open-air restaurant. Oasis provides a refreshing al fresco dining experience with gentle sea breezes and a diverse menu to satisfy every palate.',
    features: ['Open-Air Dining', 'Garden View', 'Casual Atmosphere', 'Multi-Cuisine']
  },
  {
    name: 'ELYSIUM',
    type: 'Lounge Bar',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
    description: 'Unwind at our sophisticated lounge bar. Elysium offers an extensive selection of premium spirits, cocktails, and beverages in a stylish and relaxed ambiance.',
    features: ['Premium Spirits', 'Cocktails', 'Live Music', 'Lounge Seating']
  }
];

const Restaurants: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
            alt="Dining Experience"
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
            Restaurants & Bars
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Savor exquisite flavors at Udupi's finest dining destinations
          </p>
        </motion.div>
      </section>

      {/* Restaurants Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {restaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-block px-4 py-2 bg-gradient-gold text-white rounded-full text-sm font-medium mb-4">
                    {restaurant.type}
                  </div>
                  <h2 className="text-4xl font-serif font-bold mb-4">
                    {restaurant.name}
                  </h2>
                  <p className="text-lg text-foreground/80 mb-6">
                    {restaurant.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {restaurant.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-muted rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden luxury-shadow">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine Highlights */}
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
              Culinary Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse menu featuring the finest cuisines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { cuisine: 'Indian', icon: '🇮🇳' },
              { cuisine: 'Tandoor', icon: '🔥' },
              { cuisine: 'Chinese', icon: '🥢' },
              { cuisine: 'South Indian', icon: '🍛' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-lg text-center card-shadow hover:luxury-shadow transition-all duration-500"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.cuisine}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurants;
