/* eslint-disable radix */
/* eslint-disable arrow-body-style */
import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';

import cards from './data/dashboard.json';
import { Card, Graph } from './components';
import {
  Container,
  Title,
  CardsContainer,
} from './styles';

const Content: React.FC = () => {
  const [lastMeasure, setLastMeasure] = useState<any>({});
  const [weeklyMeasures, setWeeklyMeasure] = useState<any[]>([]);
  const [hours, setHours] = useState<any[]>([]);

  const renderCards = useCallback(() => {
    const items = cards.map((card: any) => {
      return (
        <Card
          {...card}
          description={`${moment(new Date(lastMeasure.datetime)).fromNow()}`}
          value={lastMeasure[card.key] || 0}
        />
      );
    });
    return items;
  }, [lastMeasure]);

  const getLastMeasure = useCallback(() => {
    fetch('http://172.22.69.92:3000/dashboard/last_measure').then(async (response) => {
      const parsed = await response.json();
      setLastMeasure({ ...parsed });
    });
  }, []);

  const getWeeklyMeasures = useCallback(() => {
    fetch('http://172.22.69.92:3000/dashboard/weekly_measure').then(async (response) => {
      const parsed = await response.json();
      if (!parsed) return;
      let hash: any = {};
      const newHours: any[] = [];
      parsed.forEach((item: any) => {
        const date = new Date(item.datetime);
        hours.push(`${date.getHours()}:${date.getMinutes()}`);
      });
      parsed.forEach((item: any) => {
        if (Object.keys(hash).length) {
          hash.oxygen.push(item.oxygen);
          hash.temperature.push(item.temperature);
          hash.ph.push(item.ph);
          hash.turbidity.push(item.turbidity);
        } else {
          hash = {
            oxygen: [item.oxygen],
            temperature: [item.temperature],
            turbidity: [item.turbidity],
            ph: [item.ph],
          };
        }
      });
      setWeeklyMeasure(hash);
      setHours(newHours);
    });
  }, []);

  useEffect(() => {
    getLastMeasure();
    getWeeklyMeasures();
  }, [getLastMeasure, getWeeklyMeasures]);

  useEffect(() => {
    renderCards();
  }, [lastMeasure]);

  return (
    <Container>
      <Title>Últimas medições</Title>
      <CardsContainer>
        {renderCards()}
      </CardsContainer>

      <CardsContainer>
        {Object.keys(weeklyMeasures).map((key: any, index) => (
          <Graph
            description=""
            title={cards[Object.keys(cards)[index] as any].title}
            categories={hours}
            values={weeklyMeasures[key] || []}
            kind=""
          />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Content;
