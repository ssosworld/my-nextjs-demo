import React, { useState, useRef, useEffect } from "react";

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  //useRef
  const inputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = form;

  // const onChange = (e: any) => {
  //   // e 값을 모를떄는 any 로 설정
  // };

  // const handleSubmit = (e: any) => {

  // };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: "",
    });
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  };

  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  // useEffect-------------------
  useEffect(() => {
    console.log("렌더링 완료!");
    console.log({
      name,
    });
  });

  useEffect(() => {
    //처음 렌더링될 때만 실행. 업데이트때 실행X
    console.log("마운트될 때만 실행됩니다.");
  }, []);

  useEffect(() => {
    //특정 값 업데이트 될때만 실헹
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  useEffect(() => {
    //컴포넌트가 언마운트되기 전이나 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 cleanup 함수 반환해 주어야 한다.
    console.log("effect 22");
    return () => {
      console.log("unmount");
    };
  }, []); //오직 언마운트될 때만 cleanup 함수 호출하고 싶다면 두번째 파라미터에 비어 있는 배열은 넣는다.

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} ref={inputRef} />
      <input
        name="description"
        value={description}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
