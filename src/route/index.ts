 
import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingLayout from "../layout/LandingLayout";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Posts from "../pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,  
    children: [
      {
        Component: LandingLayout, 
        children: [
          { index: true, Component: Landing },
          { path: "about", Component: About },
          { path: "posts/:id", Component: Posts }
        ],
      },
    ],
  },
]);
export default router;