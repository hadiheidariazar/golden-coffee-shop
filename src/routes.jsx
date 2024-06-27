import AboutUs from "./Pages/AboutUs/AboutUs";
import Blogs from "./Pages/Blogs/Blogs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";

const routes = [
    {path: "/", element: <Home />},
    {path: "/shop", element: <Shop />},
    {path: "/blogs", element: <Blogs />},
    {path: "/about-us", element: <AboutUs />},
    {path: "/contact-us", element: <ContactUs />},
]

export default routes