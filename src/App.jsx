import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css'
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import ChoosePath from './pages/ChoosePath';
import StudentsAdmissionForm from './pages/StudentsAdmissionForm';
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
      {path: "/choose-path",element: <ChoosePath />},
      {path: "/jobs",element: <Jobs />},
      
      {path: "/students-admission-form",element: <StudentsAdmissionForm/>},
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
