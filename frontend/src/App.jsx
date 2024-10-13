import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

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
  
])


const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />

      
    </>
  )
}

export default App