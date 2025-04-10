import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Contact } from "./pages/Contact.tsx";
import { Technologies } from './pages/Technologies.tsx';

const router = createBrowserRouter([
  {
    path: "/me/",
    element: <App />,
    children: [
      {
        path: "/me/",
        element: <Technologies />,
      },
      {
        path: "/me/contact",
        element: <Contact />,
      },
      {
        path: "/me/tech",
        element: <Technologies />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
