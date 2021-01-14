import React from 'react';

import {
  BarChartOutlined,
  ReconciliationOutlined,
  EditOutlined,
} from '@ant-design/icons';

import './style.css';
import Login from './components/login';

export default () => {
  return (
    <div className='index-box'>
      <div className='index-inner-box'>
        <div className='left-box'>
          <h1 className='logo'>
            <ReconciliationOutlined />
            <span className='logo-span'>星盘心理管理</span>
          </h1>
          <div className='nav'>登录</div>
          <div className='form'>
            <Login />
          </div>
          <ul className='performance'>
            <li className='performance-li'>
              <BarChartOutlined className='icon' />
              <span className='performance-li-span'>
                更清晰的数据图形化展示
              </span>
            </li>
            <li className='performance-li'>
              <EditOutlined className='icon' />
              <span className='performance-li-span'>更便捷的描述结果修改</span>
            </li>
          </ul>
        </div>
        <div className='right-box'></div>
      </div>
    </div>
  );
};
