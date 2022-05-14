import React from "react";
const Home = React.lazy(() => import("../pages/Home"));
const Contact = React.lazy(() => import("../pages/Contact"));
const About = React.lazy(() => import("../pages/About"));

// import Home from "../pages/Home"
// import Contact from "../pages/Contact";
// import About from "../pages/About";

const routes = [
    {
        path : "/",
        isExact : true,
        components: Home,
    },
    {
        path: "/contact",
        components : Contact,
    },
    {
        path: "/about",
        components : About,
    },
    {
        path : ""
    }
]


export default routes;