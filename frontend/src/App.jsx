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
import JobsAD from './Components/Admin/JobsAD';
import JobsCreate from './Components/Admin/JobsCreate';
import AdminJobApplicants from './Components/Admin/AdminJobApplicants';
import ProtectedRoute from './Components/Admin/ProtectedRoute';

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
    element: <ProtectedRoute> <Companies /> </ProtectedRoute>
  },
  {
    path: "/admin/companies/create",
    element: <ProtectedRoute> <CompanyCreate /> </ProtectedRoute> 
  },
  {
    path: "/admin/companies/:id",
    element: <CompanySetup />
  },
  {
    path: "admin/jobs",
    element: <JobsAD />
  },
  {
    path: "/admin/jobs/create",
    element: <ProtectedRoute> <JobsCreate /> </ProtectedRoute>
  },
  {
    path: "admin/jobs/:id/applicants",
    element: <AdminJobApplicants />
  }
])


const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App