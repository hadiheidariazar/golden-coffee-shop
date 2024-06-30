import AboutUs from "./Pages/AboutUs/AboutUs";
import BlogInfo from "./Pages/BlogInfo/BlogInfo";
import Blogs from "./Pages/Blogs/Blogs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import OrderConfirm from "./Pages/OrderConfirm/OrderConfirm";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import Register from "./Pages/Register/Register";
import Shop from "./Pages/Shop/Shop";
import AccountDetails from "./Pages/UserPanel/AccountDetails/AccountDetails";
import Counter from "./Pages/UserPanel/Counter/Counter";
import UserPanel from "./Pages/UserPanel/Index";
import Orders from "./Pages/UserPanel/Orders/Orders";
import Tickets from "./Pages/UserPanel/Tickets/Tickets";
import AdminPanel from './Pages/AdminPanel/Index'
import MainPage from "./Pages/AdminPanel/MainPage/MainPage";
import AdminPanelCategories from "./Pages/AdminPanel/Categories/Categories";
import AdminPanelMessages from "./Pages/AdminPanel/Messages/Messages";
import AdminPanelComments from "./Pages/AdminPanel/Comments/Comments";
import AdminPanelTickets from "./Pages/AdminPanel/Tickets/Tickets";
import AdminPanelUsers from "./Pages/AdminPanel/Users/Users";
import AdminPanelProducts from "./Pages/AdminPanel/Products/Products";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/shop", element: <Shop /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/order", element: <OrderConfirm /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/register", element: <Register /> },
    { path: "/blog/:shortName", element: <BlogInfo /> },
    { path: "/category/:shortName", element: <Shop /> },
    { path: "/product/:shortName", element: <ProductInfo /> },
    {
        path: "/my-account/*", element: <UserPanel />, children: [
            { path: "", element: <Counter /> },
            { path: "orders", element: <Orders /> },
            { path: "tickets", element: <Tickets /> },
            { path: "details", element: <AccountDetails /> },
        ]
    },
    {
        path: "/admin-panel/*", element: <AdminPanel />, children: [
            { path: '', element: <MainPage /> },
            { path: 'products', element: <AdminPanelProducts /> },
            { path: 'users', element: <AdminPanelUsers /> },
            { path: 'comments', element: <AdminPanelComments /> },
            { path: 'messages', element: <AdminPanelMessages /> },
            { path: 'tickets', element: <AdminPanelTickets /> },
            { path: 'categories', element: <AdminPanelCategories /> },
        ]
    }
]

export default routes