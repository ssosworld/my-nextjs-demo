import Head from "next/head";
import router from "next/router";
import styled from "styled-components";

export default function Home() {
  const onMove = () => {
    router.push({
      pathname: "/main",
    });
  };

  return (
    <HomeBlock>
      <Head>
        <title>Create My Next App</title>
      </Head>
      <div>
        <h1>Next.js + Typescript</h1>
      </div>
      <div>
        <a href="#!" onClick={() => onMove()}>
          click me
        </a>
      </div>
    </HomeBlock>
  );
}

const HomeBlock = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
