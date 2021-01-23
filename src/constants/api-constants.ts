import * as DominConfigs from './domin-constants';

/**
 * 系统前端错误日志
 */
export const ERROR_LOG = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_SYS}/errorLog`;

/**
 * 用户列表查询
 */
export const GET_LIST = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_USER}/list`;

/**
 * 用户增加
 */
export const CREATE_USER = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_USER}`;

/**
 * 用户登录
 */
export const AUTHORTION = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_AUTHORTION}`;

/**
 * 获取统计数据
 */
export const STATISTIC = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STATISTIC}`;

/**
 * 获取描述
 */
export const DESCRIPTION = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_DESCRIPTION}`;

/**
 * 获取图表数据
 */
export const CHART = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_CHART}`;

/**
 * 更改描述信息
 */
export const DESCRIPTION_UPDATE = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_DESCRIPTION}/update`;
