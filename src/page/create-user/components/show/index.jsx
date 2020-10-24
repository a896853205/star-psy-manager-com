import React, { useCallback } from 'react';

import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: '${label} is required!',
  types: {
    // eslint-disable-next-line no-template-curly-in-string
    email: '${label} is not validate email!',
    // eslint-disable-next-line no-template-curly-in-string
    number: '${label} is not a validate number!',
  },
  number: {
    // eslint-disable-next-line no-template-curly-in-string
    range: '${label} must be between ${min} and ${max}',
  },
};

export default () => {
  const onFinish = useCallback(values => {
    console.log(values);
  }, []);

  return (
    <Form {...layout} onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label='Name'
        rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label='Email'
        rules={[{ type: 'email', required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label='Age'
        rules={[{ type: 'number', min: 0, max: 99, required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
