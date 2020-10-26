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
