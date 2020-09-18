import React from 'react';
import GlobalStyle from './styles/global';


import {createMuiTheme, ThemeProvider} from '@material-ui/core'

import {Header} from './components/Header'
import {List} from './components/List'



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3366ff',
    }
  }
})


function App() {

  return (
    <ThemeProvider theme={theme}>
    <Header text="You can do it!"/>
    <List />
    <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
