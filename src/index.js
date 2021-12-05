import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/App";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from './component/Theme'

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <React.StrictMode>
           <App/>
      </React.StrictMode>
    </ThemeProvider>,
  document.getElementById('root')
);
