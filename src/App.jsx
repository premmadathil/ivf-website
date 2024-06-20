import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./assets/css/styles.css";
import { Explore, Home, OurServices, AboutIVF } from "./pages";

import smoothscroll from "smoothscroll-polyfill";

// Initialize the polyfill
smoothscroll.polyfill();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "our-services", element: <OurServices /> },
    { path: "explore", element: <Explore /> },
    { path: "about-us", element: <AboutIVF /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
