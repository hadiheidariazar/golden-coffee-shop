import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";

const routes = [
    {path: "/", element: <Home />},
    {path: "/shop", element: <Shop />},
    {path: "/blogs", element: <Blogs />},
]

export default routes