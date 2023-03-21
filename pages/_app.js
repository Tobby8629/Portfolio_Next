import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='container'>
        <Script src="https://kit.fontawesome.com/196c781b0b.js" crossOrigin="anonymous" />
      </div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  );
}

