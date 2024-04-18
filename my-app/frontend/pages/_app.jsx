import React from 'react';
import '../styles/globals.css'; 
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meu Aplicativo Next.js</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
