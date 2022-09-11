import router from "next/router";
import styled from "styled-components";

export default function Home() {
  const onMove = (path: string) => {
    router.push({
      pathname: `/${path}`,
    });
  };

  return (
    <HomeBlock>
      <div>
        <h1>Hello :)</h1>

        <ul>
          <li>
            <a href="#!" onClick={() => onMove("todos")}>
              Go TodoList
            </a>
          </li>
          <li>{/* <Link to="/test"> Go React Practice</Link> */}</li>
        </ul>
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
