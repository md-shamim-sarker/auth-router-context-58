import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Orders from './components/Orders';
import Register from './components/Register';
import Main from './layout/Main';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
          path: "/home",
          element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
          path: "/orders",
          element: <PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
