import Index from "./pages/Index";
import About from "./pages/About";
import ErrorPage from "./pages/Error404";
import HousingPage from "./pages/housing";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  NavLink,
} from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/housing/:id",
    element: <HousingPage />,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}
export default App;
