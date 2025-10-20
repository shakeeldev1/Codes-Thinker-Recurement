import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css'
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';

import AdminNavbar from './components/dashboard/common/AdminNavbar';
import AdminSidebar from './components/dashboard/common/AdminSidebar';
import Overview from './pages/dashboard/Overview';
import JobsApplications from './pages/dashboard/JobsApplications';

const MainComponent = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}


const AdminRoute=()=>{
  return (
    <div>

    <AdminNavbar/>
    <AdminSidebar/>
    <Outlet/>
   
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/', element: <MainComponent />, children: [
      { path: '/', element: <Home /> },
      
    ]
  },
  {
    element:<AdminRoute/>,
    children:[
      {
        path:"/overview",element:<Overview/>
      },{
        path:"/applications",element:<JobsApplications/>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
