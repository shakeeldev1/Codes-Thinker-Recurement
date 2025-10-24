import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';

import AdminNavbar from './components/dashboard/common/AdminNavbar';
import AdminSidebar from './components/dashboard/common/AdminSidebar';
// import Overview from './pages/dashboard/Overview';
import Overview from "./pages/dashboard/Overview";
import JobsApplications from './pages/dashboard/JobsApplications';
import InterviewPage from './pages/dashboard/InterviewPage';
import JobPostPage from './pages/dashboard/JobPostPage';

import { Toaster } from 'react-hot-toast'; // ✅ Import Toaster
import About from './pages/About';

// =======================
// Main Site Layout
// =======================
const MainComponent = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

// =======================
// Admin Layout
// =======================
const AdminRoute = () => {
  return (
    <div>
      <AdminNavbar />
      <AdminSidebar />
      <Outlet />
    </div>
  );
};

// =======================
// Router Configuration
// =======================
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainComponent />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/jobs', element: <Jobs /> },
      { path: '/jobs/:id', element: <JobDetail /> },
    ],
  },
  {
    element: <AdminRoute />,
    children: [
      { path: '/overview', element: <Overview /> },
      { path: '/applications', element: <JobsApplications /> },
      { path: '/interviews', element: <InterviewPage /> },
      { path: '/job-post', element: <JobPostPage /> },
    ],
  },
]);

// =======================
// App Component
// =======================
function App() {
  return (
    <>
      <RouterProvider router={router} />

      {/* ✅ Toast Notification Provider */}
     <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: 'linear-gradient(135deg, #080156, #F59C20)', // blue → gold
      color: '#ffffff',
      borderRadius: '10px',
      padding: '12px 16px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
    },
    success: {
      iconTheme: {
        primary: '#fff',
        secondary: '#080156',
      },
    },
  }}
/>


    </>
  );
}

export default App;
