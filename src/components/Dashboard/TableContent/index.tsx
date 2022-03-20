import groupBy from 'lodash/groupBy';
import styled from 'styled-components';

import { Placement, Theme } from 'types';
import { sumNumbers, sumRevenues } from 'utils/helpers';

type TableContentProps = {
  games: {
    [key: string]: Placement[];
  };
};

const TableContent = ({ games }: TableContentProps) => (
  <>
    {Object.keys(games).map((game: string) => (
      <GameRow gameData={games[game]} gameName={game} key={game} />
    ))}
  </>
);

type GameRowProps = {
  gameData: Placement[];
  gameName: string;
};

const GameRow = ({ gameData, gameName }: GameRowProps) => {
  const countries = groupBy(gameData, 'country');

  const allRevenues = Object.keys(countries).map((country) =>
    sumRevenues(countries[country]),
  );

  const bestRevenue = Math.floor(allRevenues.sort((a, b) => b - a)[0]);

  return (
    <GameRowWrapper>
      <GameItem>{gameName}</GameItem>
      {Object.keys(countries).map((country) => {
        const totalPerCountry = sumRevenues(countries[country]);
        const roundedTotal = Math.floor(totalPerCountry);

        return (
          <GameItem key={country}>
            <ItemContent $bestRevenue={roundedTotal === bestRevenue}>
              {roundedTotal}k
            </ItemContent>
          </GameItem>
        );
      })}
      <GameItem>
        <ItemContent $isTotal>{sumNumbers(allRevenues)}k</ItemContent>
      </GameItem>
    </GameRowWrapper>
  );
};

export default TableContent;

const GameRowWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }: Theme) => theme.colors.lightGray};
  border-radius: 10px;
  display: flex;
  padding: 20px;

  &:hover {
    background-color: ${({ theme }: Theme) => theme.colors.lightGray};
  }
`;

const GameItem = styled.div`
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
