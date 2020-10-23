import React, { Suspense } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

import { Layout } from 'antd';

import './App.css';
import 'antd/dist/antd.css';
import AntdRouterMenu, {
  MenuItem,
  MenuItemGroup,
} from './components/Antd-router-menu/Antd-router-menu';
import PageLoading from './components/page-loading';

const { Content, Footer, Sider } = Layout;

export default (props: RouteConfigComponentProps) => {
  const { route } = props;

  return (
    <Layout>
      <Sider
        theme='light'
        style={{
          width: 300,
          height: '100vh',
        }}>
        <AntdRouterMenu
          menuData={[
            new MenuItemGroup('user-list', [
              {
                url: '/userList',
                name: '用户列表',
              },
            ]),
            new MenuItemGroup('create-user', [
              {
                url: '/createUser',
                name: '创建用户',
              },
            ]),
            new MenuItem('/other', '其他'),
          ]}
        />
      </Sider>
      <div className='content-box'>
        <Suspense fallback={<PageLoading />}>
          <Content className='content'>{renderRoutes(route?.routes)}</Content>
        </Suspense>
        <Footer>code@Eric design@Luna</Footer>
      </div>
    </Layout>
  );
};
