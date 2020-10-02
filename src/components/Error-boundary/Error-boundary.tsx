import React from 'react';

import { useRequest } from 'ahooks';
import axios from 'axios';

interface Props {
  errorUrl: string;
  nodeEnv: string;
}

export class ErrorBoundary extends React.Component<Props, {}> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // 将错误日志上报给服务器
    if (this.props.nodeEnv === 'production') {
      useRequest(
        axios.post(this.props.errorUrl, {
          error,
          errorInfo,
          userAgent: window.navigator.userAgent,
        })
      );
    }
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
