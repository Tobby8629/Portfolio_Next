import Head from 'next/head';
import { propTypes } from 'prop-types';
import Layout from '../components/layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/196c781b0b.js" crossOrigin="anonymous" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  );
}
App.propTypes = {
  Component: propTypes.string.isRequired,
  pageProps: propTypes.string.isRequired,
};
