import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

import localFont from "@next/font/local";
import { Provider } from "react-redux";

import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

const font = localFont({
  src: [
    {
      path: "../font/test-calibre-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/test-calibre-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <main className={font.className}>
          <header>
            <Script
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-J638HY608D"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
       
                gtag('config', 'G-J638HY608D');`,
              }}
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
              rel="stylesheet"
            />
          </header>
          <Component {...pageProps} />
        </main>
      </PersistGate>
    </Provider>
  );
}
