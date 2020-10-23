import React from 'react';

import { useAntdTable } from 'ahooks';
import { PaginatedParams } from 'ahooks/lib/useAntdTable';

import Show from '../show';

interface Result {
  total: number;
  list: UserList.Item[];
}

const getTableData = (
  { current, pageSize }: PaginatedParams[0],
  formData: Object
): Promise<Result> => {
  let query = `page=${current}&size=${pageSize}`;
  Object.entries(formData).forEach(([key, value]) => {
    if (value) {
      query += `&${key}=${value}`;
    }
  });

  return fetch(`https://randomuser.me/api?results=55&${query}`)
    .then(res => res.json())
    .then(res => ({
      total: res.info.results,
      list: res.results,
    }));
};

// fetch请求组件,专门用户请求后台数据,注意要与view组件拆分
export default () => {
  const { tableProps } = useAntdTable(getTableData, {
    defaultPageSize: 5,
  });

  return <Show tableProps={tableProps} />;
};
