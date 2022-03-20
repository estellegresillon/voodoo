import styled from 'styled-components';

import { Placement, Theme } from 'types';
import { sumNumbers, sumRevenues } from 'utils/helpers';

type TableTotalProps = {
  countries: {
    [key: string]: Placement[];
  };
};

const TableTotal = ({ countries }: TableTotalProps) => {
  const allRevenues = Object.keys(countries).map((country) =>
    sumRevenues(countries[country]),
  );

  const bestRevenue = Math.floor(allRevenues.sort((a, b) => b - a)[0]);

  return (
    <AllGamesWrapper>
      <AllGamesItem>All Games</AllGamesItem>
      {Object.keys(countries).map((country: string) => {
        const totalPerCountry = sumRevenues(countries[country]);
        const roundedTotal = Math.floor(totalPerCountry);

        return (
          <AllGamesItem key={country}>
            <ItemContent $bestRevenue={roundedTotal === bestRevenue}>
              {roundedTotal}k
            </ItemContent>
          </AllGamesItem>
        );
      })}
      <AllGamesItem>
        <ItemContent $isTotal>{sumNumbers(allRevenues)}k</ItemContent>
      </AllGamesItem>
    </AllGamesWrapper>
  );
};

export default TableTotal;

const AllGamesWrapper = styled.div`
  display: flex;
  padding: 20px;
`;

const AllGamesItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 8);
`;

type ItemProps = { $bestRevenue?: boolean; $isTotal?: boolean };

const ItemContent = styled.div<ItemProps>`
  background-color: ${({ theme, $bestRevenue, $isTotal }: Theme & ItemProps) =>
    $isTotal
      ? theme.colors.lightGray
      : $bestRevenue
      ? theme.colors.secondary
      : 'transparent'};
  border-radius: 5px;
  color: ${({ $bestRevenue }) => ($bestRevenue ? '#fff' : 'initial')};
  display: flex;
  font-weight: ${({ $bestRevenue }) => ($bestRevenue ? 'bolder' : 'normal')};
  padding: 5px 7px;
`;
