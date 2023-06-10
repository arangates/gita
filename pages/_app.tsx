import React from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

import { Inter, JetBrains_Mono } from "next/font/google";

import type { AppProps } from "next/app";
import { ToastProvider, ToastViewport } from "../components/Toast";
import { useSectionInViewObserver } from "../utils/useSectionInViewObserver";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  const [enableViewObserver, setEnableViewObserver] = React.useState(false);
  useSectionInViewObserver({ headerHeight: 72, enabled: enableViewObserver });

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href={`/favicon.png`} />
        <title>Gita Explorer</title>

        <meta
          property="og:image"
          content="https://gita-aranganathan.vercel.app/krishna.jpeg"
          key="og-image"
        />
        <meta
          property="og:title"
          content="Gita Explorer by Aranga"
          key="og-title"
        />
        <meta
          property="og:description"
          content="Easily browse, share, and read Gita."
          key="og-description"
        />

        <meta property="og:type" content="website" key="og-type" />
        <meta
          property="twitter:card"
          content="summary_large_image"
          key="twitter-card"
        />
        <meta property="twitter:site" content="@arangates" />
        <meta
          name="description"
          content="Easily browse, share, and read Gita."
        />
      </Head>
      <ToastProvider swipeDirection="down">
        <style jsx global>{`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-jetbrains: ${jetbrainsMono.style.fontFamily};
          }
        `}</style>
        <Component
          {...pageProps}
          onTouchReady={() => setEnableViewObserver(true)}
        />
        <ToastViewport />
      </ToastProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
