import { useState } from "react";
import { useParams } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ErrorPage from "./pages/Error404";
import Housing from "./pages/housing";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  NavLink,
} from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Index />
      </div>
    ),
  },
  {
    path: "/About",
    element: (
      <div>
        <About />
      </div>
    ),
  },
  {
    path: "/housing/:id",
    element: (
      <div>
        <Housing />
      </div>
    ),
  },

  {
    path: "*",
    element: (
      <div>
        <ErrorPage />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}
export default App;
