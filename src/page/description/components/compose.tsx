import React, { useState } from 'react';

import { Select, Form, Button, Typography, Skeleton } from 'antd';
import { useRequest, useToggle, useUnmount } from 'ahooks';
import * as APIS from 'src/constants/api-constants';

import Update from './update';

const { Option } = Select;
const { Title } = Typography;

const SIGN_OPTIONS = [
  {
    value: 1,
    name: '白羊',
  },
  {
    value: 2,
    name: '金牛',
  },
  {
    value: 3,
    name: '双子',
  },
  {
    value: 4,
    name: '巨蟹',
  },
  {
    value: 5,
    name: '狮子',
  },
  {
    value: 6,
    name: '处女',
  },
  {
    value: 7,
    name: '天秤',
  },
  {
    value: 8,
    name: '天蝎',
  },
  {
    value: 9,
    name: '射手',
  },
  {
    value: 10,
    name: '摩羯',
  },
  {
    value: 11,
    name: '水瓶',
  },
  {
    value: 12,
    name: '双鱼',
  },
];

const signName = (value?: number) => {
  if (!value) return '--';

  return SIGN_OPTIONS.find(option => {
    return option.value === value;
  })?.name;
};

export default () => {
  const [description, setDescription] = useState<string | undefined>();
  const [sunSignId, setSunSignId] = useState<number | undefined>();
  const [moonSignId, setMoonSignId] = useState<number | undefined>();
  const [isUpdate, { toggle }] = useToggle();

  let { cancel, run, loading } = useRequest(
    value => {
      const { sunSign, moonSign } = value;

      setSunSignId(sunSign);
      setMoonSignId(moonSign);

      return {
        url: APIS.DESCRIPTION,
        method: 'GET',
        params: {
          sunSign,
          moonSign,
        },
      };
    },
    {
      manual: true,
      onSuccess: result => {
        setDescription(result.data.description);
      },
      onError: () => {
        setSunSignId(undefined);
        setMoonSignId(undefined);
      },
    }
  );

  useUnmount(() => {
    cancel();
  });

  return (
    <>
      <Form
        layout='inline'
        style={{ marginBottom: 20 }}
        onFinish={value => run(value)}>
        <Form.Item
          label='太阳星座'
          name='sunSign'
          rules={[{ required: true, message: '请选择太阳星座!' }]}>
          <Select style={{ width: 120 }} placeholder='请选择'>
            {SIGN_OPTIONS.map(signOption => (
              <Option value={signOption.value} key={signOption.value}>
                {signOption.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label='月亮星座'
          name='moonSign'
          rules={[{ required: true, message: '请选择月亮星座!' }]}>
          <Select style={{ width: 120 }} placeholder='请选择'>
            {SIGN_OPTIONS.map(signOption => (
              <Option value={signOption.value} key={signOption.value}>
                {signOption.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            查找
          </Button>
        </Form.Item>
      </Form>

      <Typography>
        <Title>
          {signName(sunSignId)}/{signName(moonSignId)}
          {isUpdate ? (
            <Button type='link' onClick={() => toggle()}>
              取消
            </Button>
          ) : (
            <Button
              type='link'
              style={{ display: !sunSignId || !moonSignId ? 'none' : 'inline' }}
              onClick={() => {
                if (!sunSignId || !moonSignId) return;
                toggle();
              }}>
              修改
            </Button>
          )}
        </Title>
        {isUpdate ? (
          <Update
            description={description}
            sunSignId={sunSignId}
            moonSignId={moonSignId}
            toggle={toggle}
            searchRun={run}
          />
        ) : (
          <div style={{ whiteSpace: 'pre-line' }}>
            {loading ? <Skeleton /> : description}
          </div>
        )}
      </Typography>
    </>
  );
};
