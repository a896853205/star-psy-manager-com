// import { createBrowserHistory } from 'history';
import * as DominConfigs from '../constants/domin-constants';
import { message } from 'antd';

/**
 * request日志
 * @param config
 */
export const requestLog = (config: any) => {
  console.log('Request <<<<<<<<<<<<<<<<<<<<<<<');
  console.dir(config);
  console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
};

/**
 * response日志
 * @param response
 */
export const responseLog = (response: any) => {
  console.log('Response >>>>>>>>>>>>>>>>>>>>>>');
  console.dir(response);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
};

export const responseSuccessMessage = (response: any) => {
  const { msg } = response.data;
  response.data = response.data.mainData;

  if (response.status === DominConfigs.RESPONSE_CODE.success) {
    // 查询200
    if (msg) {
      message.success(msg);
    }
  } else if (response.status === DominConfigs.RESPONSE_CODE.created) {
    // 创建201
    if (msg) {
      message.success(msg);
    }
  } else if (response.status === DominConfigs.RESPONSE_CODE.noContent) {
    // 更新204
    if (msg) {
      message.success(msg);
    }
  }
};

// TODO: 401 拦截器
// history = createBrowserHistory(); history.push('/')
export const responseErrorMessage = (error: any) => {
  const errorStatus = error.response.status;
  const { msg } = error.response.data;

  if (errorStatus === DominConfigs.RESPONSE_CODE.error) {
    // 客户端请求失败400
    if (msg) {
      message.error(msg);
    }
  } else if (errorStatus === DominConfigs.RESPONSE_CODE.unauthorized) {
    // 客户端请求失败401
    message.error('请进行身份验证！');
  } else if (errorStatus === DominConfigs.RESPONSE_CODE.unFind) {
    // 客户端请求失败404
    if (msg) {
      message.error(msg);
    }
  } else if (errorStatus === DominConfigs.RESPONSE_CODE.serviceError) {
    // 服务器解析错误500
    message.error('服务器内部异常，请稍后再试');
  }
};
