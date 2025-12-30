import { createRoot } from 'react-dom/client'
import './index.css';
import { RouterProvider } from "react-router/dom";
import router from './route';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
 createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>

      <RouterProvider router={router} />
    </I18nextProvider>
  </Provider>,

);