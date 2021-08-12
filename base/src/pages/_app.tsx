import "../styles/globals.css";
import type { AppProps } from "next/app";

if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
  /* eslint-disable @typescript-eslint/no-var-requires */
  const { worker } = require("../mocks/browser");
  worker.start();
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
