import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css'
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Jobs from './pages/Jobs';

const MainComponent = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/', element: <MainComponent />, children: [
      { path: '/', element: <Home /> },
      {path: "/jobs",element: <Jobs />}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
