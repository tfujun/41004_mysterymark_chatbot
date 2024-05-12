import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Chat from './views/chat/Chat';

const App: React.FunctionComponent = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Chat/>
    </ThemeProvider>
  );
}

export default App;
