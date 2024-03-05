import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
