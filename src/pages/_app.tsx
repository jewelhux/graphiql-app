import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import i18n from '../locales/i18cfg';
import { I18nextProvider } from 'react-i18next';
import { store } from '../store/store';
import '../firebaseConfig';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
