import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Jobs from './Components/Jobs';
import Browse from './Components/Browse';
import Profile from './Components/Profile';
import JobDescriptions from './Components/JobDescriptions';
import Companies from './Components/Admin/Companies';
import CompanyCreate from './Components/Admin/CompanyCreate';
import CompanySetup from './Components/Admin/CompanySetup';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/browse',
    element: <Browse />
  },
  {
    path: '/description/:id',
    element: <JobDescriptions />
  },
  {
    path: 'view-profile',
    element: <Profile />
  },

  // Admin 
  {
    path: "/admin/companies",
    element: <Companies />
  },
  {
    path: "/admin/companies/create",
    element: <CompanyCreate />
  },
  {
    path: "/admin/companies/:id",
    element: <CompanySetup />
  },
])


const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App