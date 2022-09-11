import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../core/redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Hydrate state={pageProps.dehydratedState}>
    <Component {...pageProps} />
    // </Hydrate>
  );
}

export default wrapper.withRedux(MyApp);
