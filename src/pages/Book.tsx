import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMessageCircle } from "react-icons/fi";

const Book: React.FC = () => {
  return (
    <div className='min-h-[80vh] flex items-center justify-center bg-background px-4 pt-20'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='max-w-2xl w-full text-center space-y-8'
      >
        <div className='space-y-4'>
          <h1 className='text-4xl md:text-5xl font-serif text-primary'>
            Bookings coming soon!
          </h1>
          <p className='text-muted-foreground text-lg'>
            We are currently updating our online booking system to serve you
            better.
            <br />
            In the meantime, please contact us directly to make a reservation.
          </p>
        </div>

        <div className='bg-card p-8 rounded-lg border border-border/50 shadow-lg space-y-6'>
          <h3 className='text-xl font-serif mb-6'>Contact Us</h3>

          <div className='grid gap-6 md:grid-cols-2'>
            <div className='space-y-4'>
              <div className='flex items-center justify-center gap-2 text-primary mb-2'>
                <FiPhone className='w-5 h-5' />
                <span className='font-medium uppercase tracking-wider text-sm'>
                  Call
                </span>
              </div>
              <div className='space-y-2'>
                <a
                  href='tel:+918830314806'
                  className='block text-lg hover:text-primary transition-colors'
                >
                  +91 88303 14806
                </a>
                <a
                  href='tel:+918484825155'
                  className='block text-lg hover:text-primary transition-colors'
                >
                  +91 84848 25155
                </a>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='flex items-center justify-center gap-2 text-green-600 mb-2'>
                <FiMessageCircle className='w-5 h-5' />
                <span className='font-medium uppercase tracking-wider text-sm'>
                  WhatsApp
                </span>
              </div>
              <a
                href='https://wa.me/918484825155'
                target='_blank'
                rel='noopener noreferrer'
                className='block text-lg hover:text-green-600 transition-colors'
              >
                +91 84848 25155
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Book;
