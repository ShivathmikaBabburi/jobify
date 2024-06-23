import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

import {
  HomeLayout,
  Landing,
  Error,
  AddJob,
  Login,
  EditJob,
  Profile,
  Admin,
  Register,
  AllJobs,
  Stats,
  DashboardLayout,
  DeleteJob,
} from "./pages";

import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import { loader as DashboardLoader } from "./pages/DashboardLayout";
import { action as AddJobAction } from "./pages/AddJob";
import { loader as AllJobsLoader } from "./pages/AllJobs";
import { loader as EditJobLoader } from "./pages/EditJob";
import { action as deleteJobAction } from "./pages/DeleteJob";
import { action as EditJobAction } from "./pages/EditJob";
import { loader as AdminLoader } from "./pages/Admin";
import { action as ProfileAction } from "./pages/Profile";
import { loader as StatsLoader } from "./pages/Stats";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: RegisterAction,
      },
      {
        path: "login",
        element: <Login />,
        action: LoginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: DashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: AddJobAction,
          },
          {
            path: "stats",
            element: <Stats />,
            loader: StatsLoader,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: AllJobsLoader,
          },
          {
            path: "profile",
            element: <Profile />,
            action: ProfileAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: AdminLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: EditJobLoader,
            action: EditJobAction,
          },
          { path: "delete-job/:id", action: deleteJobAction },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
