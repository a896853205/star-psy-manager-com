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

// TODO: 401 拦截器
// history = createBrowserHistory(); history.push('/')
export const responseSuccessMessage = (response: any) => {
  console.log('查询成功');
  if (response.status === DominConfigs.RESPONSE_CODE.success) {
    // 查询200
    message.success('查找成功！');
  } else if (response.status === DominConfigs.RESPONSE_CODE.created) {
    // 创建201
    message.success('新建成功！');
  } else if (response.status === DominConfigs.RESPONSE_CODE.noContent) {
    // 更新204
    message.success('更新成功！');
  }
};

export const responseErrorMessage = (error: any) => {
  console.log('查询失败', error);
  const errorStatus = error.response.status;
  if (errorStatus === DominConfigs.RESPONSE_CODE.error) {
    // 客户端请求失败400
    message.error(error.message);
  } else if (errorStatus === DominConfigs.RESPONSE_CODE.unauthorized) {
    // 客户端请求失败401
    message.error(error.message);
  } else if (errorStatus === DominConfigs.RESPONSE_CODE.unFind) {
    // 客户端请求失败404
    message.error(error.message);
  } else if (errorStatus === DominConfigs.RESPONSE_CODE.serviceError) {
    // 服务器解析错误500
    message.error(error.message);
  }
};
