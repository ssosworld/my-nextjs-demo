import "../styles/globals.css";
// import "../styles/style.scss";
import type { AppProps } from "next/app";
import { wrapper } from "../core/redux";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Hydrate state={pageProps.dehydratedState}>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
    // </Hydrate>
  );
}

export default wrapper.withRedux(MyApp);
