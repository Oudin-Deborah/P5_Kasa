import { useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import ErrorPage from "./pages/Error404";
import Articles from "./pages/Articles";
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
    path: "/Articles:id",
    element: (
      <div>
        <Articles:id />
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
