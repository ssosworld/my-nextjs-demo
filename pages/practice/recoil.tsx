import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../../core/recoil/Counter";
import RecoilCharacterCount from "../../components/practice/RecoilCharacterCount";
import RecoilTodoList from "../../components/practice/RecoilTodoList";

export default function RecoilSample() {
  // recoil
  const [text, setText] = useRecoilState(textState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        <h1>Echo: {text}</h1>
        <h1>
          <RecoilCharacterCount />
        </h1>
      </div>

      <br />
      <br />
      <br />
      <br />
      <h1>
        <RecoilTodoList />
      </h1>
    </div>
  );
}
