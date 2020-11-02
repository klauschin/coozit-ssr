import '@/styles/index.scss';
import Layout from '@/layout';
import { Provider } from 'react-redux';
import store from '../store';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
