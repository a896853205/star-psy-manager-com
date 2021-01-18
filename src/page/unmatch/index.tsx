import React from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const Unmatch = () => {
  const history = useHistory();
  
  return (
    <Result
      status="404"
      title="404"
      subTitle="您访问的页面不存在！"
      extra={
        <Button
          type="primary"
          onClick={() => {
            history.push('/');
          }}
        >
          登录
        </Button>
      }
    />
  );
};

export default Unmatch;
