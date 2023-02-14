import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "@next/font/local";
import { useEffect, useState } from "react";
import sanityClient from "../utils/sanityClient";

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
    <main className={font.className}>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </header>
      <Component {...pageProps} />
    </main>
  );
}
