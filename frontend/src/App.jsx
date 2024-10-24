import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Jobs from './Components/Jobs';
import Browse from './Components/Browse';
import Profile from './Components/Profile';
import JobDescriptions from './Components/JobDescriptions';

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
    path:'/jobs',
    element: <Jobs/>
  },
  {
    path:'/browse',
    element: <Browse />
  },
  {
    path:'/description/:id',
    element:<JobDescriptions />
  },
  {
    path:'view-profile',
    element: <Profile />
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