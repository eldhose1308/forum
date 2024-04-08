import React from "react";
import {
  createHashRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


import Header from "_components/Dashboard/Header/Header";
import Sidebar from "_components/Dashboard/Sidebar/Sidebar";

import { SignIn, SignUp } from './_pages/auth'

import { TopLoaderProvider } from "_contexts/TopLoaderProvider";
// import { PortalsProvider } from "_contexts/PortalsProvider";

import Home from "_pages/home/Home/Home";
import Search from "_pages/home/Search/Search";

import useDecodeToken from "_hooks/useDecodeToken";
import PostPage from "_pages/home/PostPage/PostPage";
import FollowingsPage from "_pages/home/FollowingsPage/FollowingsPage";
import Template from "_components/Dashboard/Template/Template";
import ToastProvider from "_contexts/ToastProvider";
import AuthProvider from "_contexts/AuthProvider";
import UserProfile from "_pages/userProfile/UserProfile";


const NoDashboardLayout = () => {
  return (
    <Outlet />
  )
}


const WithDashboardLayout = () => {
  const token = useDecodeToken();

  return (
    <React.Fragment>
      <Template>
        <Outlet />
      </Template>
    </React.Fragment>
  )
}


const router = createHashRouter([
  {
    path: "/",
    element: <NoDashboardLayout />,
    children: [
      {
        path: "/",
        element: <SignUp />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
    errorElement: <div>Error</div>
  },
  {
    path: "/user",
    element: <WithDashboardLayout />,
    children: [
      {
        path: "/user/home",
        element: <Home />,
      },
      {
        path: "/user/profile",
        element: <UserProfile />,
      },
      {
        path: "/user/posts/:id",
        element: <PostPage />,
      },
      {
        path: "/user/followings",
        element: <FollowingsPage />,
      },
      {
        path: "/user/search",
        element: <Search />,
      },
      {
        path: "/user/settings",
        element: <div>settings</div>,
      },
    ],
    errorElement: <div>Error</div>
  },

]);



function App() {
  return (
    <React.Fragment>

      <ToastProvider>
        <TopLoaderProvider>

          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
          
        </TopLoaderProvider>
      </ToastProvider>

    </React.Fragment>
  );
}

export default App;
