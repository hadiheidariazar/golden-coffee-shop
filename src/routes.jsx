import AboutUs from "./Pages/AboutUs/AboutUs";
import BlogInfo from "./Pages/BlogInfo/BlogInfo";
import Blogs from "./Pages/Blogs/Blogs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Shop from "./Pages/Shop/Shop";
import Counter from "./Pages/UserPanel/Counter/Counter";
import UserPanel from "./Pages/UserPanel/Index";

const routes = [
    {path: "/", element: <Home />},
    {path: "/shop", element: <Shop />},
    {path: "/blogs", element: <Blogs />},
    {path: "/about-us", element: <AboutUs />},
    {path: "/contact-us", element: <ContactUs />},
    {path: "/login", element: <Login />},
    {path: "/register", element: <Register />},
    {path: "/register", element: <Register />},
    {path: "/blog/:shortName", element: <BlogInfo />},
    {path: "/category/:shortName", element: <Shop />},
    {path: "/my-account/*", element: <UserPanel />, children: [
        {path: "", element: <Counter />}
    ]},
]

export default routes