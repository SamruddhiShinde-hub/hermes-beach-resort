import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Rooms', 'Weddings', 'Dining', 'Activities', 'Beach'];

const galleryImages = [
  { id: 1, category: 'Rooms', url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80', title: 'Deluxe Room' },
  { id: 2, category: 'Beach', url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', title: 'Kadike Beach' },
  { id: 3, category: 'Weddings', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80', title: 'Beach Wedding' },
  { id: 4, category: 'Dining', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', title: 'Ambrosia Restaurant' },
  { id: 5, category: 'Rooms', url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80', title: 'Premium Room' },
  { id: 6, category: 'Activities', url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80', title: 'Pool Activities' },
  { id: 7, category: 'Weddings', url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80', title: 'Serene Lawns' },
  { id: 8, category: 'Beach', url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&q=80', title: 'Sunset View' },
  { id: 9, category: 'Dining', url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80', title: 'Oasis Restaurant' },
  { id: 10, category: 'Rooms', url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80', title: 'Suite Interior' },
  { id: 11, category: 'Activities', url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', title: 'Water Sports' },
  { id: 12, category: 'Beach', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', title: 'Beach Panorama' }
];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
            alt="Gallery"
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
            Gallery
          </h1>
          <p className="text-xl text-white/90">
            Explore the beauty of Hermes Resort & Spa
          </p>
        </motion.div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-gold text-white luxury-shadow'
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer card-shadow hover:luxury-shadow transition-all duration-500"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm text-white/80">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-primary transition-colors"
              >
                ×
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] rounded-lg"
              />
              <div className="text-center mt-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
