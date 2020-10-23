import React from 'react';

import { Spin } from 'antd';
import './style.css';

export default () => (
  <div className='page-loading-box'>
    <Spin size="large" />
  </div>
);
