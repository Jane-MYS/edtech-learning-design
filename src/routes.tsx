import { RouteObject } from 'react-router-dom'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Contact from './pages/Contact'
import CourseDetail from './pages/CourseDetail'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/course/:id',
    element: <CourseDetail />,
  },
  {
    path: '*',
    element: <NotFound />
  }
]