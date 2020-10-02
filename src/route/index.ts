import { RouteConfig } from 'react-router-config';

import App from '../App';
import ComponentsWelcome from '../page/Components/Welcome';
import HooksWelcome from '../page/Hooks/Welcome';

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
        path: '/componentsWelcome',
        component: ComponentsWelcome,
        exact: true,
      },
      {
        path: '/hooksWelcome',
        component: HooksWelcome,
        exact: true,
      },
    ],
  },
];

export default config;
