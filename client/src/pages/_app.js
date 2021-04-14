import Head from 'next/head';
import { Provider } from 'next-auth/client';
import '../styles/reset.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>NextJS Base | Lodestone Studio</title>
        <link rel="shortcut icon" href="/Favicon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
