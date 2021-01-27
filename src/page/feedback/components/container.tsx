import React, { useRef, useEffect, useState } from 'react';

import { useRequest, useUnmount } from 'ahooks';
import * as APIS from 'src/constants/api-constants';
import * as echarts from 'echarts';

export default () => {
  let barRef = useRef<HTMLDivElement>(null);
  const [pieChart, setPieChart] = useState<echarts.ECharts | null>(null);
  const [chartData, setChartData] = useState([]);

  // 获取图表数据
  let { cancel, run } = useRequest(
    () => {
      return {
        url: APIS.CHART,
        method: 'GET',
      };
    },
    {
      manual: true,
      onSuccess: result => {
        setChartData(result.data);
        console.log('chartData', result.data);
        pieChart?.hideLoading()
      },
      onError: () => {
        console.log('onError');
      },
    }
  );

  useEffect(() => {
    setPieChart(echarts.init(barRef.current as HTMLDivElement));
  }, []);

  useEffect(() => {
    if (pieChart) {
      pieChart.showLoading();
      run();
    }
  }, [pieChart, run]);

  useUnmount(() => {
    cancel();
  });

  useEffect(() => {
    let option = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          let title = `太阳星座：${params[0].data.sunSign}<br/>月亮星座：`;

          for (let i = 0; i < params.length; i++) {
            const key = params[i].seriesName;
            const value = params[i].data[key];
            title += `<br/>${params[i].marker}${params[i].seriesName} ： ${value}`;
          }

          return title;
        },
      },
      dataset: {
        dimensions: [
          'sunSign',
          '白羊',
          '狮子',
          '射手',
          '金牛',
          '处女',
          '摩羯',
          '双子',
          '天秤',
          '水瓶',
          '巨蟹',
          '天蝎',
          '双鱼',
        ],
        source: chartData,
      },
      xAxis: { type: 'category' },
      yAxis: {
        type: 'value',
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

    if (pieChart) pieChart.setOption(option);
  }, [chartData, pieChart]);

  return (
    <div
      ref={barRef}
      style={{
        height: 500,
      }}></div>
  );
};
