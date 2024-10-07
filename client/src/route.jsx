import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/homepage";
import ShowsList, { EventList } from "./pages/shows";
import CheckOut from "./pages/purchase";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path:"/checkout/:id",
        element:<CheckOut/>
      },
      {
        path:'/',
        element:<ShowsList/>,
        children:[
          {
            
            path:'/:event',
            element:<EventList/>
          }
          ,{
            path:"/",
            element:<Navigate to={'/music'}/>
          }
        ]
      }
      
    ],
  },


  {
    path: "*",
    element: <h1>Not find URL</h1>,
  },
]);
