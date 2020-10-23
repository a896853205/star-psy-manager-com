import { RouteConfig } from 'react-router-config';

import App from '../App';
import UserList from '../page/user-list';

const config: RouteConfig[] = [
  {
    path: '/',
    component: App,
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
