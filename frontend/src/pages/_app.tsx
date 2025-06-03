// pages/_app.tsx
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ноён Дизайн</title>
        <meta name="description" content="Ноён Дизайн — Хэвлэл, Хаяг, Дизайны үйлчилгээ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
