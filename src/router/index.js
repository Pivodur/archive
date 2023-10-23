import About from '../pages/About';
import Posts from '../pages/Posts';
import PostsIdPage from '../pages/PostIdPage';
import Page404 from '../pages/Page404';
import Login from '../pages/Login';

export const privateRoutes = [
  {path: '/about', element: About},
  {path: '/posts', element: Posts},
  {path: '/posts/:id', element: PostsIdPage},
  {path: '/page404', element: Page404},
]

export const publicRoutes = [
  {path: '/login', element: Login},
]

