import React, { useState } from 'react';
import Chart from 'react-apexcharts';

import { Container, Description, Title } from './styles';
import { GraphProps } from './interfaces';

const Graph: React.FC<GraphProps> = ({
  description,
  title,
  categories,
  values,
  kind,
}) => {
  const [options] = useState<any>({

    series: [{
      name: kind,
      data: values,
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter(val: any) {
          return `${val}`;
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },

      xaxis: {
        categories,
        position: 'bottom',
        fontSize: '8px',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter(val: any) {
            return `${val}`;
          },
        },

      },
      title: {
        text: title,
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444',
        },
      },
    },

  });

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Chart {...options} height="70%" width="100%" />
    </Container>
  );
};

export default Graph;
