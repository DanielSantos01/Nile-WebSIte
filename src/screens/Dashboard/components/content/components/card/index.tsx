import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

import { Container, Description, Title } from './styles';
import { CardProps } from './interfaces';

const Card: React.FC<CardProps> = ({
  unit,
  value,
  description,
  title,
}) => {
  const [options, setOptions] = useState<any>({
    series: [value],
    options: {
      chart: {
        type: 'radialBar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },
          dataLabels: {
            show: true,
            value: {
              formatter: (data: any) => `${data} ${unit}`,
              color: '#111',
              fontSize: '36px',
              offsetY: 0,
              show: true,
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: 'round',
      },
      labels: [''],
    },
  });

  useEffect(() => {
    const copy = { ...options };
    copy.series = [value];
    setOptions(copy);
  }, [value]);

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Chart {...options} type="radialBar" height="70%" width="100%" />
    </Container>
  );
};

export default Card;
