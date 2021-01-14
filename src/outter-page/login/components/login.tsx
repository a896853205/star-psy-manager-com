import React from 'react';

import { Input, Form, Button } from 'antd';
import '../style.css';
import { KeyOutlined } from '@ant-design/icons';

export default () => {
  return (
    <Form>
      <Form.Item>
        <Input
          prefix={<KeyOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder='密码'
          type='password'
        />
      </Form.Item>
      <Form.Item>
        <div className='login-button-box'>
          <Button
            type='primary'
            htmlType='submit'
            style={{
              width: '100%',
            }}>
            登录
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
