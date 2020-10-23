import { RouteConfig } from 'react-router-config';

import Home from '../outter-page/home';
import UserList from '../page/user-list';

const config: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    routes: [
      // {
      //   path: '/',
      //   component: Home,
      //   exact: true,
      // },
      {
        path: '/userList',
        component: UserList,
        exact: true,
      },
    ],
  },
];

export default config;
