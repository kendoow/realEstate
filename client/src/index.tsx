import ReactDOM from 'react-dom/client';
import { YMaps } from 'react-yandex-maps';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux';

import AppRouter from './routes/AppRouter';

import './scss/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <YMaps>
        <AppRouter />
      </YMaps>
    </Provider>
  </BrowserRouter>
);


