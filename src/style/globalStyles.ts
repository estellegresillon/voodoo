import { createGlobalStyle } from 'styled-components';

import { Theme } from 'types';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }: Theme) => theme.colors.lightGray};
    color: ${({ theme }: Theme) => theme.colors.primary};
    font-family: ${({ theme }: Theme) => theme.font.main};
    margin: 0;
  }
`;
