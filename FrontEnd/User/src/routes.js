/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Login from "views/Login.js";
import Signup from "views/Signup";
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Create from "views/Create.js";
import CreateTask from "views/CreateTask.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import home from "views/home";

const dashboardRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-chart-pie-35",
    component: Login,
    showInSideBar: false,
    layout: "/unauth"
  },
  {
    path: "/dashboard/",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    showInSideBar: true,
    layout: "/user"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    showInSideBar: true,
    layout: "/user"
  },
  {
    path: "/table/:id",
    name: "Tasks",
    icon: "nc-icon nc-notes",
    component: TableList,
    showInSideBar: true,
    layout: "/user"
  },
  {
    path: "/create/:id",
    name: "Edit Task",
    icon: "nc-icon nc-notes",
    component: Create,
    showInSideBar: true,
    layout: "/user"
  },
  {
    path: "/createTask/:id",
    name: "Edit Task",
    icon: "nc-icon nc-notes",
    component: CreateTask,
    showInSideBar: true,
    layout: "/user"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    showInSideBar: true,
    layout: "/user"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    showInSideBar: true,
    layout: "/user"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    showInSideBar: true,
    component: Notifications,
    layout: "/user"
  },
  {
    path: "/home",
    name: "home",
    component: home,
    layout: "/user"
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
    layout: "/unauth"
  }
];

export default dashboardRoutes;
