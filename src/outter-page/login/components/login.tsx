import React from 'react';
import { useHistory } from 'react-router-dom';

import { useRequest, useUnmount } from 'ahooks';
import { Input, Form, Button } from 'antd';
import { KeyOutlined } from '@ant-design/icons';
import axios from 'axios';
import md5 from 'md5';

import '../style.css';
import * as APIS from 'src/constants/api-constants';

export default () => {
  const history = useHistory();

  let { loading, run, cancel } = useRequest(
    data => {
      let { password } = data;
      return {
        url: APIS.AUTHORTION,
        method: 'GET',
        params: {
          password: md5(password),
        },
      };
    },
    {
      manual: true,
      onSuccess: result => {
        const { token } = result.data;

        if (token) {
          // 添加全局请求头token
          localStorage.setItem('Authorization', token);
          axios.defaults.headers.common['Authorization'] = token;
          history.push('/home/feedback');
        }
      },
      onError: () => {
        console.log('onError');
      },
    }
  );
  useUnmount(() => {
    cancel();
  });

  return (
    <Form onFinish={values => run(values)}>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input
          prefix={<KeyOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="密码"
          type="password"
          name="password"
        />
      </Form.Item>
      <Form.Item>
        <div className="login-button-box">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{
              width: '100%',
            }}
          >
            登录
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
