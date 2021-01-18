import { RouteConfig } from 'react-router-config';

import Home from 'src/outter-page/home';
import Login from 'src/outter-page/login';
import Description from 'src/page/description';
import Feedback from 'src/page/feedback';
import Unmatch from 'src/page/unmatch';

const config: RouteConfig[] = [
  {
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    routes: [
      {
        path: '/home/feedback',
        component: Feedback,
        exact: true,
      },
      {
        path: '/home/description',
        component: Description,
        exact: true,
      },
      {
        path: '/home/*',
        component: Unmatch,
      },
    ],
  },
  {
    path: '*',
    component: Unmatch,
  },
];

export default config;
