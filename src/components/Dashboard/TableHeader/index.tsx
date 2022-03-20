import styled from 'styled-components';

import { Placement, Theme } from 'types';

type HeaderProps = {
  countries: {
    [key: string]: Placement[];
  };
};

const Header = ({ countries }: HeaderProps) => (
  <HeaderWrapper>
    <HeaderItem>Game name</HeaderItem>
    {Object.keys(countries).map((country) => (
      <HeaderItem key={country}>{country}</HeaderItem>
    ))}
    <HeaderItem>Total</HeaderItem>
  </HeaderWrapper>
);

export default Header;

const HeaderWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }: Theme) => theme.colors.lightGray};
  display: flex;
  padding: 0 20px 20px 20px;
`;

const HeaderItem = styled.div<{ $isTotal?: boolean }>`
  color: ${({ theme }: Theme) => theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bolder;
  text-transform: uppercase;
  width: calc(100% / 8);
`;
