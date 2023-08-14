import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Error from './pages/Error.jsx'
import AddMember from './pages/AddMember.jsx';
import './index.css'
import EditMember from './pages/EditMember.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/addmember",
    element: <AddMember />,
    errorElement: <Error />,
  },
  {
    path: "/editmember/:userId",
    element: <EditMember />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
