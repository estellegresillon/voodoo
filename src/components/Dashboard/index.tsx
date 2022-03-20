import groupBy from 'lodash/groupBy';
import styled from 'styled-components';

import { Placement, Theme } from 'types';

import TableContent from './TableContent';
import TableHeader from './TableHeader';
import TableTotal from './TableTotal';

type DashboardProps = {
  data: Placement[];
};

const Dashboard = ({ data }: DashboardProps): JSX.Element => {
  const sortedByGames = groupBy(data, ({ game }) => game);
  const sortedByCountries = groupBy(data, ({ country }) => country);

  return (
    <DashboardWrapper>
      <TableHeader countries={sortedByCountries} />
      <TableContent games={sortedByGames} />
      <TableTotal countries={sortedByCountries} />
    </DashboardWrapper>
  );
};

export default Dashboard;

const DashboardWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: ${({ theme }: Theme) => theme.shadows.normal};
  font-size: 12px;
  margin-top: 20px;
  padding: 30px 40px;
`;
