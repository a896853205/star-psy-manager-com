import React, { useState, useCallback } from 'react';

import { Statistic, Row, Col } from 'antd';
import { useRequest, useUnmount } from 'ahooks';
import { ArrowUpOutlined } from '@ant-design/icons';
import * as APIS from 'src/constants/api-constants';

export default () => {
  const [statisticData, setStaticticData] = useState({
    todayIncrease: 0,
    topEvaluation: {
      topEvaluationMark: '0.00',
      topSunSignName: '',
      topMoonSignName: '',
    },
    lowEvaluation: {
      lowEvaluationMark: '0.00',
      lowSunSignName: '',
      lowMoonSignName: '',
    },
    sumEvaluation: '0.00',
    avgEvaluation: '0.00',
  });

  // 向后台获取统计数据
  let { cancel } = useRequest(
    () => {
      return {
        url: APIS.STATISTIC,
        method: 'GET',
      };
    },
    {
      manual: false,
      onSuccess: result => {
        setStaticticData(result.data.statisticData);
      },
      onError: () => {
        console.log('onError');
      },
    }
  );

  const statisticName = useCallback((sunSignName, moonSignName) => {
    if (sunSignName && moonSignName) return `${sunSignName}/${moonSignName}`;
    else return '--/--';
  }, []);

  useUnmount(() => {
    cancel();
  });

  return (
    <Row gutter={20} style={{ marginBottom: 10 }}>
      <Col span={4}>
        <Statistic
          title='本日增加数'
          value={statisticData.todayIncrease}
          valueStyle={{ color: '#3f8600' }}
          prefix={<ArrowUpOutlined />}
        />
      </Col>
      <Col span={4}>
        <Statistic
          title='最高评价为'
          valueStyle={{ color: '#3f8600' }}
          value={statisticData.topEvaluation.topEvaluationMark}
          suffix={statisticName(
            statisticData.topEvaluation.topSunSignName,
            statisticData.topEvaluation.topMoonSignName
          )}
        />
      </Col>
      <Col span={4}>
        <Statistic
          title='最低评价为'
          valueStyle={{ color: '#cf1322' }}
          value={statisticData.lowEvaluation.lowEvaluationMark}
          suffix={statisticName(
            statisticData.lowEvaluation.lowSunSignName,
            statisticData.lowEvaluation.lowMoonSignName
          )}
        />
      </Col>
      <Col span={4}>
        <Statistic title='总评价数' value={statisticData.sumEvaluation} />
      </Col>
      <Col span={4}>
        <Statistic title='总评价平均数为' value={statisticData.avgEvaluation} />
      </Col>
    </Row>
  );
};
