import '../styles/globals.css';
import Layout from '../components/Home';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}