import React from 'react';

import { Select, Form, Button, Typography } from 'antd';

const { Option } = Select;
const { Title } = Typography;

export default () => {
  return (
    <>
      <Form layout='inline' style={{ marginBottom: 20 }}>
        <Form.Item label='太阳星座'>
          <Select defaultValue='lucy' style={{ width: 120 }}>
            <Option value='jack'>Jack</Option>
            <Option value='lucy'>巨蟹</Option>
            <Option value='disabled' disabled>
              Disabled
            </Option>
            <Option value='Yiminghe'>yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item label='月亮星座'>
          <Select defaultValue='lucy' style={{ width: 120 }}>
            <Option value='jack'>Jack</Option>
            <Option value='lucy'>处女</Option>
            <Option value='disabled' disabled>
              Disabled
            </Option>
            <Option value='Yiminghe'>yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type='primary'>查找</Button>
        </Form.Item>
      </Form>

      <Typography>
        <Title>
          巨蟹/处女 <Button type='link'>修改</Button>
        </Title>
        内向型性格，原则性强，表现出一定的固执性。感受性强，反应缓慢，有较高的耐心和深刻情绪体验。观察及其仔细，对细节小心谨慎，内心有着极大的愤世嫉俗的态度却不流于表面。拥有着巨大的想象力创造力，总希望在工作事业或者人生道路上有着不拘一格，独一无二的篇章。对待工作认真负责，在自己经验范围内的事能够慢条斯理的处理好，会有吹毛求疵的毛病，对一些执着的事总有一点想塑造完美的强迫症。可能对文学性艺术性的东西有一些特殊的天赋。
        生活上懂得累积和提升。虽然过的很务实，但总有一些有别于他人的想法去经历和体验不一样的生活状态。
        <br />
        交际适度，并不是特别爱交际，情感不易外露，不容易发怒，朋友不多，对待朋友却总是尽心尽力，有时言语刻薄，爱唠叨，但对待朋友、亲人、恋人却是非常真诚。
        情感深刻，会有些有些挑剔的毛病，也会有一些多愁善感，优柔寡断的毛病，但是对待认定的人，总是一心一意，认认真真的与对方经营好感情。
      </Typography>

      {/* <Form>
        <Form.Item>
          <TextArea rows={15}></TextArea>
        </Form.Item>
        <Form.Item>
          <Button type='primary'>保存</Button>
        </Form.Item>
      </Form> */}
    </>
  );
};
