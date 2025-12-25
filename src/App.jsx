import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
// HomePage: Landing page of the application
import HomePage from '@/app/(main)/page.jsx';
// EventsPage: Lists all events
import EventsPage from '@/app/(main)/events/page.jsx';
// TeamPage: Displays the team members
import TeamPage from '@/app/(team)/team/page.jsx';

/**
 * ScrollToTop Component
 * 
 * Automatically scrolls the window to the top (0, 0) whenever the route path changes.
 * This ensures that users start at the top of the page when navigating.
 * 
 * @returns {null} This component does not render anything.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Layout Component
 * 
 * Wrapper component that provides the common application structure.
 * It includes the Navbar at the top, the main content area, and the Footer at the bottom.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render within the layout
 */
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}

/**
 * App Component
 * 
 * Main application component responsible for setting up routing.
 * Uses BrowserRouter to handle client-side navigation.
 * 
 * Routes:
 * - / : Home Page
 * - /events : Events Listing Page
 * - /team : Team Page
 */
export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll handling */}
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
