import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import TopBar from './components/TopBar';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { Light, Dark, DarkModeContext } from './styled/Themes';
import { StyledBody } from './styled/StyledComponents';
import { GlobalTableStyles } from './styled/GlobalStyles';
import { SetDarkModeConst } from './components/tetris/utils/constants';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Desktop APP</title>
        <link rel="canonical" href="http://achmyrov.com" />
      </Helmet>
      <DarkModeContext.Provider
        value={{
          DarkMode: darkMode,
          SetDarkMode: (darkMode: boolean) => {
            setDarkMode(darkMode);
            SetDarkModeConst(darkMode);
          },
        }}
      >
        <ThemeProvider theme={darkMode ? Dark : Light}>
          <GlobalTableStyles />
          <StyledBody>
            <TopBar />
          </StyledBody>
        </ThemeProvider>
      </DarkModeContext.Provider>
    </div>
  );
}
