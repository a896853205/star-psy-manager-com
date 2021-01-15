import React from "react";
import axios from "axios";
import md5 from "md5";

import { Input, Form, Button, message } from "antd";
import { useRequest, useUnmount } from "ahooks";
import "../style.css";
import { KeyOutlined } from "@ant-design/icons";
import * as APIS from "src/constants/api-constants";

export default () => {
  let { loading, run, cancel } = useRequest(
    data => {
      let { password } = data;
      return {
        url: APIS.AUTHORTION,
        method: "GET",
        params: {
          password: md5(password),
        },
      };
    },
    {
      manual: true,
      onSuccess: _result => {
        const token = _result.data.token;
        if (token) {
          // 添加全局请求头token
          axios.defaults.headers.common["Authorization"] = token;
          message.info("登陆成功");
        } else {
          message.error("登陆失败");
        }
      },
      onError: _error => {
        message.error("登陆失败");
      },
    }
  );

  useUnmount(() => {
    cancel();
  });

  return (
    <Form onFinish={values => run(values)}>
      <Form.Item name="password">
        <Input
          prefix={<KeyOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="密码"
          type="password"
          name="password"
          className="password"
        />
      </Form.Item>
      <Form.Item>
        <div className="login-button-box">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{
              width: "100%",
            }}
          >
            登录
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
