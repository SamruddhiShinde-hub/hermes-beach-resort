import React from 'react';
import { motion } from 'framer-motion';

const onSiteActivities = [
  { name: 'Swimming Pool', icon: '🏊', description: 'Relax in our luxurious pool' },
  { name: 'Waterpark', icon: '🌊', description: 'Fun for all ages' },
  { name: 'Net Cricket', icon: '🏏', description: 'With bowling machine' },
  { name: 'Basketball', icon: '🏀', description: 'Full-size court' },
  { name: 'Volleyball', icon: '🏐', description: 'Beach & court volleyball' },
  { name: 'Rifle Shooting', icon: '🎯', description: 'Professional range' },
  { name: 'Archery', icon: '🏹', description: 'Guided sessions' },
  { name: 'Crossbow', icon: '🎯', description: 'Precision sport' },
  { name: 'Hoverboards', icon: '🛹', description: 'Latest models' },
  { name: 'Skateboards', icon: '🛹', description: 'Dedicated area' },
  { name: 'Pool Tables', icon: '🎱', description: 'Indoor gaming' },
  { name: 'Table Tennis', icon: '🏓', description: 'Multiple tables' },
  { name: 'Darts', icon: '🎯', description: 'Indoor fun' },
  { name: 'VR Games', icon: '🎮', description: 'Latest VR experiences' },
  { name: 'Lounge Bar', icon: '🍷', description: 'With DJ nights' }
];

const offSiteActivities = [
  { name: 'Jet Skiing', icon: '🚤', description: 'Thrilling water sport' },
  { name: 'Parasailing', icon: '🪂', description: 'Soar above the sea' },
  { name: 'Kayaking', icon: '🛶', description: 'Explore the coastline' },
  { name: 'Surfing', icon: '🏄', description: 'Ride the waves' },
  { name: 'Scuba Diving', icon: '🤿', description: 'Underwater adventure' },
  { name: 'Banana Boat', icon: '🍌', description: 'Group fun activity' },
  { name: 'ATV Adventures', icon: '🏍️', description: 'Off-road excitement' }
];

const Activities: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1920&q=80"
            alt="Activities"
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
            Activities & Recreation
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Adventure, relaxation, and endless entertainment
          </p>
        </motion.div>
      </section>

      {/* On-Site Activities */}
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
              On-Site Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Endless entertainment without leaving the resort
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {onSiteActivities.map((activity, index) => (
              <motion.div
                key={activity.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card p-6 rounded-lg card-shadow text-center cursor-pointer transition-all duration-300"
              >
                <div className="text-4xl mb-3">{activity.icon}</div>
                <h3 className="font-semibold mb-2">{activity.name}</h3>
                <p className="text-xs text-muted-foreground">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Off-Site Activities */}
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
              Off-Site Water Sports
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thrilling adventures at nearby Kadike Beach
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {offSiteActivities.map((activity, index) => (
              <motion.div
                key={activity.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card p-6 rounded-lg card-shadow text-center cursor-pointer transition-all duration-300"
              >
                <div className="text-5xl mb-3">{activity.icon}</div>
                <h3 className="font-semibold mb-2">{activity.name}</h3>
                <p className="text-xs text-muted-foreground">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Activities Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="md:col-span-2 relative h-[400px] rounded-lg overflow-hidden luxury-shadow">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
                alt="Water Sports"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2">Water Adventures</h3>
                  <p>Experience the thrill of water sports</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden luxury-shadow">
              <img
                src="https://images.unsplash.com/photo-1526324438983-d062a6717f1d?w=600&q=80"
                alt="Indoor Games"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2">Indoor Fun</h3>
                  <p>Games and entertainment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
