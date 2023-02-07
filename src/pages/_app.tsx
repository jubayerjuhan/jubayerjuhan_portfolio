import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "@next/font/local";
import { useEffect, useState } from "react";

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
      <Component {...pageProps} />
    </main>
  );
}
