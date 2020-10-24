import React from 'react';

import { useAntdTable } from 'ahooks';
import { PaginatedParams } from 'ahooks/lib/useAntdTable';
import axios from 'axios';

import Show from '../show';
import * as APIS from 'src/constants/api-constants';

interface Result {
  total: number;
  list: UserList.Item[];
}

/**
 * useAntdTable回调函数
 * @param param0 当前组件page选项
 */
const getTableData = ({
  current,
  pageSize,
}: PaginatedParams[0]): Promise<Result> => {
  return axios
    .get(APIS.GET_LIST, {
      params: {
        page: current,
        pageSize,
      },
    })
    .then(res => ({
      total: res.data.count,
      list: res.data.rows,
    }));
};

// fetch请求组件,专门用户请求后台数据,注意要与view组件拆分
export default () => {
  const { tableProps } = useAntdTable(getTableData, {
    defaultPageSize: 5,
  });

  return <Show tableProps={tableProps} />;
};
