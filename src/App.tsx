import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

import AntdRouterMenu, {
  MenuItem,
  MenuItemGroup,
} from './components/Antd-router-menu/Antd-router-menu';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

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
            new MenuItemGroup('Components', [
              {
                url: '/componentsWelcome',
                name: '目录',
              },
            ]),
            new MenuItemGroup('Hooks', [
              {
                url: '/hooksWelcome',
                name: '目录',
              },
            ]),
            new MenuItem('/other', '其他'),
          ]}
        />
      </Sider>
      <div className='content-box'>
        <Content className='content'>{renderRoutes(route?.routes)}</Content>
        <Footer>code@Eric design@Luna</Footer>
      </div>
    </Layout>
  );
};
