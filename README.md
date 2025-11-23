# Hermes Resort & Spa - Luxury Beachside Resort Website

A modern, elegant, and fully-responsive React website for Hermes Resort & Spa, located in Udupi, Karnataka, India.

## 🌟 Features

### Core Features
- **Full-Stack Booking System**: Complete room booking functionality with Firebase backend
- **Authentication**: Google, Facebook, and Email/Password login options
- **Multiple Pages**: 9 beautifully designed pages covering all resort aspects
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Framer Motion animations throughout
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

### Pages
1. **Home** - Hero section, booking widget, featured rooms, testimonials
2. **Rooms** - 4 room types with detailed information and amenities
3. **Restaurants** - 3 dining venues (Ambrosia, Oasis, Elysium)
4. **Weddings & Meetings** - Event venues, services, pricing information
5. **Activities** - On-site and off-site activities showcase
6. **Gallery** - Filterable image gallery with lightbox
7. **Contact** - Contact form with EmailJS integration and map
8. **Login** - Authentication with multiple providers
9. **Book** - Room selection and booking management
10. **My Bookings** - User's booking history (protected route)

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Backend**: Firebase (Authentication + Firestore)
- **Email**: EmailJS
- **Icons**: React Icons (lucide-react)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
\`\`\`bash
git clone <YOUR_GIT_URL>
cd hermes-resort
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
\`\`\`

3. **Configure Firebase**

Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)

Enable Authentication:
- Go to Authentication > Sign-in method
- Enable Email/Password, Google, and Facebook providers

Enable Firestore:
- Go to Firestore Database
- Create database in production mode

Update \`src/config/firebase.ts\` with your credentials:
\`\`\`typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
\`\`\`

4. **Configure EmailJS**

Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)

Create an email service and template

Update \`src/pages/Contact.tsx\` with your credentials:
\`\`\`typescript
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {...},
  'YOUR_PUBLIC_KEY'
);
\`\`\`

5. **Run the development server**
\`\`\`bash
npm run dev
\`\`\`

The app will be available at [http://localhost:8080](http://localhost:8080)

6. **Build for production**
\`\`\`bash
npm run build
\`\`\`

## 🎨 Design System

### Color Palette
- **Primary Gold**: Used for CTAs and accents
- **Navy**: Deep navy for footer and dark sections
- **Neutral**: Soft whites, creams, and sand tones
- **Semantic**: Muted, accent, and destructive colors

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
All components use the design system defined in:
- \`src/index.css\` - CSS variables and base styles
- \`tailwind.config.ts\` - Tailwind theme configuration

## 📂 Project Structure

\`\`\`
hermes-resort/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── BookingWidget.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── RoomCard.tsx
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   └── BookingContext.tsx
│   ├── config/
│   │   └── firebase.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Rooms.tsx
│   │   ├── Restaurants.tsx
│   │   ├── WeddingsMeetings.tsx
│   │   ├── Activities.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   ├── Login.tsx
│   │   ├── Book.tsx
│   │   └── MyBookings.tsx
│   ├── hooks/
│   ├── lib/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
\`\`\`

## 🔐 Authentication Flow

1. Users can sign up/login via Email/Password, Google, or Facebook
2. Authentication state is managed globally via AuthContext
3. Protected routes (MyBookings) redirect to login if not authenticated
4. User session persists across page refreshes

## 📊 Booking Flow

1. **Select Dates**: Users choose check-in and check-out dates via BookingWidget
2. **Choose Rooms**: Browse available rooms and add to booking
3. **Review**: See booking summary with total cost
4. **Confirm**: Submit booking (requires authentication)
5. **View**: Access booking history in My Bookings page

## 🚀 Deployment

The website can be deployed to:
- **Vercel** (Recommended)
- **Netlify**
- **Firebase Hosting**
- **AWS Amplify**

### Environment Variables for Production
Make sure to set up these in your hosting platform:
- Firebase configuration
- EmailJS credentials

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1400px

## 🎯 SEO Optimization

- Semantic HTML throughout
- Meta tags for all pages
- Open Graph tags for social sharing
- Clean, descriptive URLs
- Alt text for all images
- Sitemap ready (robots.txt included)

## 📞 Contact Information

**Hermes Resort & Spa**
- Location: Kadike Beach Road, Udupi, Karnataka, India
- Phone: +91 88303 14806 / +91 84848 25155
- Email: sales@hermeshotels.com
- Website: [Reference](https://www.hermeshotels.in/)

## 📝 License

This project is proprietary and confidential.

## 🤝 Support

For technical support or questions, contact the development team.

---

**Built with ❤️ for Hermes Resort & Spa**
