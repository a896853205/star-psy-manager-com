import { RouteConfig } from 'react-router-config';

import Home from 'src/outter-page/home';
import UserList from 'src/page/user-list';
import CreateUser from 'src/page/create-user';

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
      {
        path: '/createUser',
        component: CreateUser,
        exact: true,
      },
    ],
  },
];

export default config;
