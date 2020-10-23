import React from 'react';

import { Table, Tag } from 'antd';
import { PaginatedResult } from 'ahooks/lib/useAntdTable';
import Column from 'antd/lib/table/Column';

interface Props {
  tableProps: PaginatedResult<UserList.Item>['tableProps'];
}

export default ({ tableProps }: Props) => (
  <Table rowKey={record => record.uuid} {...tableProps}>
    <Column
      title='Name'
      render={(_text: any, record: UserList.Item) => {
        return <Tag>{record.firstName} {record.lastName}</Tag>;
      }}
    />
    <Column title='Email' dataIndex='email' />
    <Column title='Phone' dataIndex='phone' />
  </Table>
);
