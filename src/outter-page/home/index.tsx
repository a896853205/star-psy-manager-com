import React, { Suspense } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

import { Layout } from 'antd';
import 'antd/dist/antd.css';

import './style.css';
import AntdRouterMenu, {
  MenuItem,
  //  MenuItemGroup,
} from '../../components/Antd-router-menu/Antd-router-menu';
import { useAuthGuide } from './hooks';
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
  useAuthGuide();

  return (
    <Layout>
      <Sider theme='light' className='home-sider'>
        <AntdRouterMenu menuData={MENU_DATA} />
      </Sider>
      <div className='home-content-box'>
        <Suspense fallback={<PageLoading />}>
          <Content className='home-content'>
            {renderRoutes(route?.routes)}
          </Content>
        </Suspense>
        <Footer>code@Eric design@Luna</Footer>
      </div>
    </Layout>
  );
};
