import Category from "pages/Category";
import Login from "pages/Login";
import User from "pages/User";

//Public route
const publicRoutes = [{ path: "/login", component: Login, layout: null }];

//Private route
const privateRoutes = [
  { path: "/", component: User },
  {
    path: "/category",
    component: Category,
  },
];

export { publicRoutes, privateRoutes };
