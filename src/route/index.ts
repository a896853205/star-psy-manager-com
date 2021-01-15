import { RouteConfig } from 'react-router-config';

import Home from 'src/outter-page/home';
import Login from 'src/outter-page/login';
import UserList from 'src/page/user-list';
import CreateUser from 'src/page/create-user';

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
      // {
      //   path: '/',
      //   component: Home,
      //   exact: true,
      // },
      {
        path: '/home/userList',
        component: UserList,
        exact: true,
      },
      {
        path: '/home/createUser',
        component: CreateUser,
        exact: true,
      },
    ],
  },
];

export default config;
