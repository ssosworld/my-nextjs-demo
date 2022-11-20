import React from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "../../core/recoil/Counter";

// recoil hook
export default function RecoilCharacterCount() {
  // useRecoilValue : 값만 사용
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
