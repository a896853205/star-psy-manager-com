import React, { useRef, useEffect, useState } from 'react';

import { useRequest, useUnmount } from 'ahooks';
import * as APIS from 'src/constants/api-constants';
import * as echarts from 'echarts';


export default () => {
  let barRef = useRef<HTMLDivElement>(null);
  const [chartData, setChartData] = useState([]);

  // 获取图表数据
  let { cancel } = useRequest(
    () => {
      return {
        url: APIS.CHART,
        method: 'GET',
      };
    },
    {
      manual: false,
      onSuccess: result => {
        console.log('获取的后台chartData:', result.data);
        setChartData(result.data);
        console.log('chartData', result.data);
      },
      onError: () => {
        console.log('onError');
      },
    }
  );
  useUnmount(() => {
    cancel();
  });
  useEffect(() => {
    let pieChart = echarts.init(barRef.current as HTMLDivElement);
    let option = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          let title = '太阳星座：' + params[0].data.sunSign + '<br/>月亮星座：';
          for (let i = 0; i < params.length; i++) {
            let key = params[i].seriesName;
            let value = parseInt(params[i].data[key]).toFixed(2);
            title +=
              '<br/>' + params[i].marker + params[i].seriesName + ' ：' + value;
          }
          return title;
        },
      },
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
        source: chartData,
      },
      xAxis: { type: 'category' },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: function (value: any) {
            return value.toFixed(2);
          },
        },
      },
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
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
        { type: 'bar' },
      ],
    };
    pieChart.setOption(option);
  }, [chartData]);

  return <div ref={barRef} style={{ height: 500 }}></div>;
};
