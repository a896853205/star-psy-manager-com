import React, { useRef, useEffect } from 'react';

import { Statistic, Row, Col } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import * as echarts from 'echarts';

const random = () => (Math.random() * 5).toFixed(2);

export default () => {
  let barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let pieChart = echarts.init(barRef.current as HTMLDivElement);
    let option = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: [
          'sunSign',
          '白羊',
          '金牛',
          '双子',
          '巨蟹',
          '狮子',
          '处女',
          '天秤',
          '天蝎',
          '射手',
          '摩羯',
          '水瓶',
          '双鱼',
        ],
        source: [
          {
            sunSign: '白羊',
            白羊: random(),
            金牛: random(),
            双子: random(),
            巨蟹: random(),
            狮子: random(),
            处女: random(),
            天秤: random(),
            天蝎: random(),
            射手: random(),
            摩羯: random(),
            水瓶: random(),
            双鱼: random(),
          },
          {
            sunSign: '金牛',
            白羊: random(),
            金牛: random(),
            双子: random(),
            巨蟹: random(),
            狮子: random(),
            处女: random(),
            天秤: random(),
            天蝎: random(),
            射手: random(),
            摩羯: random(),
            水瓶: random(),
            双鱼: random(),
          },
          {
            sunSign: '双子',
            白羊: random(),
            金牛: random(),
            双子: random(),
            巨蟹: random(),
            狮子: random(),
            处女: random(),
            天秤: random(),
            天蝎: random(),
            射手: random(),
            摩羯: random(),
            水瓶: random(),
            双鱼: random(),
          },
          {
            sunSign: '巨蟹',
            白羊: random(),
            金牛: random(),
            双子: random(),
            巨蟹: random(),
            狮子: random(),
            处女: random(),
            天秤: random(),
            天蝎: random(),
            射手: random(),
            摩羯: random(),
            水瓶: random(),
            双鱼: random(),
          },
          {
            sunSign: '狮子',
            白羊: random(),
            金牛: random(),
            双子: random(),
            巨蟹: random(),
            狮子: random(),
            处女: random(),
            天秤: random(),
            天蝎: random(),
            射手: random(),
            摩羯: random(),
            水瓶: random(),
            双鱼: random(),
          },
          {
            sunSign: '处女',
            白羊: random(),
            金牛: random(),
            双子: random(),
            巨蟹: random(),
            狮子: random(),
            处女: random(),
            天秤: random(),
            天蝎: random(),
            射手: random(),
            摩羯: random(),
            水瓶: random(),
            双鱼: random(),
          },
          {
            sunSign: '天秤',
            白羊: random(),
            金牛: random(),
            双子: random(),
            巨蟹: random(),
            狮子: random(),
            处女: random(),
            天秤: random(),
            天蝎: random(),
            射手: random(),
            摩羯: random(),
            水瓶: random(),
            双鱼: random(),
          },
          {
            sunSign: '天蝎',
            白羊: random(),
            金牛: random(),
            双子: random(),
            巨蟹: random(),
            狮子: random(),
            处女: random(),
            天秤: random(),
            天蝎: random(),
            射手: random(),
            摩羯: random(),
            水瓶: random(),
            双鱼: random(),
          },
          {
            sunSign: '射手',
            白羊: random(),
            金牛: random(),
            双子: random(),
            巨蟹: random(),
            狮子: random(),
            处女: random(),
            天秤: random(),
            天蝎: random(),
            射手: random(),
            摩羯: random(),
            水瓶: random(),
            双鱼: random(),
          },
          {
            sunSign: '摩羯',
            白羊: random(),
            金牛: random(),
            双子: random(),
            巨蟹: random(),
            狮子: random(),
            处女: random(),
            天秤: random(),
            天蝎: random(),
            射手: random(),
            摩羯: random(),
            水瓶: random(),
            双鱼: random(),
          },
          {
            sunSign: '水平',
            白羊: random(),
            金牛: random(),
            双子: random(),
            巨蟹: random(),
            狮子: random(),
            处女: random(),
            天秤: random(),
            天蝎: random(),
            射手: random(),
            摩羯: random(),
            水瓶: random(),
            双鱼: random(),
          },
          {
            sunSign: '双鱼',
            白羊: random(),
            金牛: random(),
            双子: random(),
            巨蟹: random(),
            狮子: random(),
            处女: random(),
            天秤: random(),
            天蝎: random(),
            射手: random(),
            摩羯: random(),
            水瓶: random(),
            双鱼: random(),
          },
        ],
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
        {
          type: 'bar',
          tooltip: {
            formatter: (param: any) => {
              return `太阳星座: ${param.name}<br />月亮星座: ${
                param.seriesName
              }<br />平均值: <strong>${
                param.value[param.value.sunSign]
              }</strong>`;
            },
          },
        },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
      ],
    };
    pieChart.setOption(option);
  }, []);

  return (
    <div>
      <Row gutter={20} style={{ marginBottom: 10 }}>
        <Col span={4}>
          <Statistic
            title='本日增加数'
            value={1128}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
          />
        </Col>
        <Col span={4}>
          <Statistic
            title='最高评价为'
            valueStyle={{ color: '#3f8600' }}
            value='4.5'
            suffix='巨蟹/金牛'
          />
        </Col>
        <Col span={4}>
          <Statistic
            title='最低评价为'
            valueStyle={{ color: '#cf1322' }}
            value='1.3'
            suffix='处女/金牛'
          />
        </Col>
        <Col span={4}>
          <Statistic
            title='总评价数'
            value='6325'
          />
        </Col>
        <Col span={4}>
          <Statistic
            title='总评价平均数为'
            value='4.5'
          />
        </Col>
      </Row>
      <div ref={barRef} style={{ height: 500 }}></div>
    </div>
  );
};
