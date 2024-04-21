import Home from '_pages/home/Home/Home'
import { SignIn, SignUp } from '_pages/auth'
import UserProfile from '_pages/userProfile/UserProfile'
import PostPage from '_pages/home/PostPage/PostPage'
import FollowingsPage from '_pages/home/FollowingsPage/FollowingsPage'
import Search from '_pages/home/Search/Search'
import { NoDashboardLayout, WithDashboardLayout } from 'AppMy'
import Popular from '_pages/home/Popular/Popular'


  
export const routes = [
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
          path: "/user/popular",
          element: <Popular />,
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
  
];