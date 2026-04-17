import { useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Error from "./pages/Error404";
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
]);

function App() {
  return <RouterProvider router={Router} />;
}
export default App;
