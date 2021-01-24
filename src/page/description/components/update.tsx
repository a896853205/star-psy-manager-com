import React from 'react';

import { Form, Button, message } from 'antd';
import { useRequest } from 'ahooks';
import * as APIS from 'src/constants/api-constants';
import TextArea from 'antd/lib/input/TextArea';

export default ({
  description,
  sunSignId,
  moonSignId,
  toggle,
  searchRun,
}: {
  description?: string;
  sunSignId?: number;
  moonSignId?: number;
  toggle: (value?: boolean | undefined) => void;
  searchRun: (value: any) => Promise<any>;
}) => {
  // 描述修改
  const { run, loading } = useRequest(
    value => {
      const { description } = value;

      return {
        url: APIS.DESCRIPTION,
        method: 'PUT',
        data: {
          description,
          sunSignId,
          moonSignId,
        },
      };
    },
    {
      manual: true,
      onSuccess: () => {
        searchRun({
          sunSign: sunSignId,
          moonSign: moonSignId,
        });
        toggle();
        message.success('修改成功！');
      },
      onError: () => {
        console.log('onError');
      },
    }
  );

  return (
    <Form style={{ whiteSpace: 'pre-line' }} onFinish={run}>
      <Form.Item name='description' initialValue={description}>
        <TextArea
          disabled={loading}
          value={description}
          autoSize={{ minRows: 3 }}
        />
      </Form.Item>
      <Form.Item>
        <Button loading={loading} type='primary' htmlType='submit'>
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};
