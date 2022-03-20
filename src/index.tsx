import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from 'components/App';
import { GlobalStyle } from 'style/globalStyles';
import { theme } from 'style/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('voodoo'),
);
