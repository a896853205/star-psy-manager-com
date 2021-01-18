import { RouteConfig } from 'react-router-config';

import Home from 'src/outter-page/home';
import Login from 'src/outter-page/login';
import Description from 'src/page/description';
import Feedback from 'src/page/feedback';
import UnFined from 'src/page/unfined';

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
    ],
  },
  // TODO: 非法404
  {
    path: '*',
    component: UnFined,
  },
];

export default config;
