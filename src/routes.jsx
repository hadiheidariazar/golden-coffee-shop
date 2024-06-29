import AboutUs from "./Pages/AboutUs/AboutUs";
import BlogInfo from "./Pages/BlogInfo/BlogInfo";
import Blogs from "./Pages/Blogs/Blogs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Order from "./Pages/Order/Order";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import Register from "./Pages/Register/Register";
import Shop from "./Pages/Shop/Shop";
import AccountDetails from "./Pages/UserPanel/AccountDetails/AccountDetails";
import Counter from "./Pages/UserPanel/Counter/Counter";
import UserPanel from "./Pages/UserPanel/Index";
import Orders from "./Pages/UserPanel/Orders/Orders";
import Tickets from "./Pages/UserPanel/Tickets/Tickets";

const routes = [
    {path: "/", element: <Home />},
    {path: "/shop", element: <Shop />},
    {path: "/blogs", element: <Blogs />},
    {path: "/about-us", element: <AboutUs />},
    {path: "/contact-us", element: <ContactUs />},
    {path: "/order", element: <Order />},
    {path: "/login", element: <Login />},
    {path: "/register", element: <Register />},
    {path: "/register", element: <Register />},
    {path: "/blog/:shortName", element: <BlogInfo />},
    {path: "/category/:shortName", element: <Shop />},
    {path: "/product/:shortName", element: <ProductInfo />},
    {path: "/my-account/*", element: <UserPanel />, children: [
        {path: "", element: <Counter />},
        {path: "orders", element: <Orders />},
        {path: "tickets", element: <Tickets />},
        {path: "details", element: <AccountDetails />},
    ]},
]

export default routes