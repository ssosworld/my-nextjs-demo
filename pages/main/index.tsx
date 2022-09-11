import router from "next/router";
import styled from "styled-components";

const list = [
  {
    title: "TodoList",
    path: "todos",
  },
  {
    title: "Count",
    path: "counter",
  },
  {
    title: "동적 input",
    path: "practice",
  },
];

export default function Home() {
  const onMove = (path: string) => {
    router.push({
      pathname: `/main/${path}`,
    });
  };

  return (
    <HomeBlock>
      <div>
        <h1>Hello :)</h1>

        <ul>
          {list.map((item, i) => (
            <li key={i}>
              <a href="#!" onClick={() => onMove(item.path)}>
                Go {item.title}
              </a>
            </li>
          ))}
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
