import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { theme } from 'components/Common/Theme.jsx';
import './index.css';

///////////////////
// Маршрутизация //
///////////////////
//
// Если приложение использует библиотеку react-router-dom для маршрутизации,
// необходимо дополнительно настроить компонент < BrowserRouter >,
// передав в пропе basename точное название твоего репозитория.
// Слеши в начале и конце строки обязательны.
//
// <BrowserRouter basename="/_____repo_name______/">
//   <App />
// </BrowserRouter>
//
///////////////////

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/weighings-VA-web/">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
