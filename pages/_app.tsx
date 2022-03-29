import "antd/dist/antd.css";
import "highlight.js/styles/monokai-sublime.css";

import "../styles/css/globals.css";
import "../styles/fonts/iconfont.css";
import "../styles/css/common.sass";
import "../styles/css/detail.sass";

import { useRouter } from "next/router";
import React, { useEffect } from "react";
// import Script from 'next/script'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  // console.log(Script)
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url:string) => {
      console.log("App is changing to: ", url);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  })
  return (
    <>
    <div id="app">
      <Component {...pageProps} />
      {/* <div className="aurora-bubble">
        <div className="aurora-bubble-box" id="aurora-bubble-box"></div>
        <canvas className="aurora-bubble-canvas" id="aurora-bubble-canvas"></canvas>
      </div> */}
    </div>
    {/* <Script
      id="stripe-js"
      src="/utils/backgroundBubble.js"
      onLoad={() => {
      } } /> */}
    </>
  );
}

export default MyApp
