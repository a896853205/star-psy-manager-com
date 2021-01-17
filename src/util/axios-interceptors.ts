import { createBrowserHistory } from 'history';
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

/**
 * 响应成功回调显示对应msg
 * @param response 响应
 */
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

/**
 * 响应错误时显示对应msg
 * @param error 错误
 */
export const responseErrorMessage = (error: any) => {
  if (!error.response) {
    message.error('网络错误,请稍后再试');
    return;
  }

  const errorStatus = error.response.status;
  const { msg } = error.response.data;

  if (errorStatus === DominConfigs.RESPONSE_CODE.error) {
    // 客户端请求失败400
    if (msg) {
      message.error(msg);
    }
  } else if (errorStatus === DominConfigs.RESPONSE_CODE.unauthorized) {
    // 客户端请求失败401
    const history = createBrowserHistory();
    history.push('/');
    message.warning('身份认证失效,请重新登录');
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
