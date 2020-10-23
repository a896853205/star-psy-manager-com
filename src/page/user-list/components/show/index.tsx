import React from 'react';

import { Table } from 'antd';
import { PaginatedResult } from 'ahooks/lib/useAntdTable';

const COLUMNS = [
  {
    title: 'name',
    dataIndex: 'name.last',
  },
  {
    title: 'email',
    dataIndex: 'email',
  },
  {
    title: 'phone',
    dataIndex: 'phone',
  },
  {
    title: 'gender',
    dataIndex: 'gender',
  },
];

interface Props {
  tableProps: PaginatedResult<UserList.Item>['tableProps'];
}
export default ({ tableProps }: Props) => {
  return <Table columns={COLUMNS} rowKey='email' {...tableProps} />;
};
