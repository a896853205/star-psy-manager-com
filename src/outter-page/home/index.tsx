import React, { Suspense, useEffect } from 'react';
import { matchPath } from 'react-router';
import { useLocation, useHistory } from 'react-router-dom';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

import { Layout } from 'antd';
import 'antd/dist/antd.css';

import './style.css';
import AntdRouterMenu, {
  MenuItem,
  //  MenuItemGroup,
} from '../../components/Antd-router-menu/Antd-router-menu';
import PageLoading from '../../components/page-loading';

const { Content, Footer, Sider } = Layout;
/**
 * 配置导航栏链接和文字
 */
const MENU_DATA = [
  new MenuItem('/home/feedback', '反馈图表'),
  new MenuItem('/home/description', '描述修改'),
];

export default ({ route }: RouteConfigComponentProps) => {
  // TODO: 自定义hooks useAuthGuide
  // 逻辑是用useLocation, useEffect, 判断useLocalStorage,
  // 如果空useHistory走到login页
  // 非空没事
  const useAuthGuide = () => {
    const history = useHistory();
    const location = useLocation();
    const { pathname } = location;
    useEffect(() => {
      const isLogin = localStorage.getItem('Authorization');
      if (
        matchPath(pathname, {
          path: '/home/*',
          exact: true,
          strict: true,
        })
      ) {
        if (!isLogin) {
          // 未登录->登录
          history.push('/');
        }
      }
    });
  };

  useAuthGuide();

  return (
    <Layout>
      <Sider theme="light" className="home-sider">
        <AntdRouterMenu menuData={MENU_DATA} />
      </Sider>
      <div className="home-content-box">
        <Suspense fallback={<PageLoading />}>
          <Content className="home-content">
            {renderRoutes(route?.routes)}
          </Content>
        </Suspense>
        <Footer>code@Eric design@Luna</Footer>
      </div>
    </Layout>
  );
};
