import React, { useEffect, useState } from "react";
import Radio from "../common/Radio";

interface Props {
  checkedTop: boolean;
  checkedTopItems: string[];
  setCheckedTopItems: React.Dispatch<string[]>;
}

export default function Index({
  checkedTop,
  checkedTopItems,
  setCheckedTopItems,
}: Props) {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  // radio check 제어
  const checkedItemHandler = (checkedId: string) => {
    if (checkedId.includes("radioAgree") && !checkedItems.includes(checkedId)) {
      setCheckedItems([...checkedItems, checkedId]);
    } else {
      const changeId = checkedId.replace("Disagree", "Agree");
      if (checkedItems.includes(changeId)) {
        setCheckedItems(checkedItems.filter((el) => el !== changeId));
      }
    }
  };

  useEffect(() => {
    if (checkedTop) {
      setCheckedItems([
        "radioAgreeA",
        "radioAgreeB",
        "radioAgreeC",
        "radioAgreeD",
      ]);
    } else {
      setCheckedItems([]);
    }
  }, []);

  useEffect(() => {
    if (checkedItems.length < 4) {
      setCheckedTopItems(checkedTopItems.filter((el) => el !== "agree2"));
    } else {
      setCheckedTopItems([...checkedTopItems, "agree2"]);
    }
  }, [checkedItems.length]);

  return (
    <div className="termWrapper">
      <h3>[필수] 개인(신용)정보 수집·이용에 관한 사항</h3>

      <h4>하위 선택1</h4>
      <div className="agreeBox">
        <Radio
          name="agreeA"
          id="radioDisagreeA"
          text="동의하지 않음"
          label="basic"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            checkedItemHandler(e.target.id);
          }}
          checked={!checkedItems.includes("radioAgreeA") && true}
        />
        <Radio
          name="agreeA"
          id="radioAgreeA"
          text="동의함"
          label="basic"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            checkedItemHandler(e.target.id);
          }}
          checked={checkedItems.includes("radioAgreeA") && true}
        />
      </div>

      <h4>하위 선택2</h4>
      <div className="agreeBox">
        <Radio
          name="agreeB"
          id="radioDisagreeB"
          text="동의하지 않음"
          label="basic"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            checkedItemHandler(e.target.id);
          }}
          checked={!checkedItems.includes("radioAgreeB") && true}
        />
        <Radio
          name="agreeB"
          id="radioAgreeB"
          text="동의함"
          label="basic"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            checkedItemHandler(e.target.id);
          }}
          checked={checkedItems.includes("radioAgreeB") && true}
        />
      </div>

      <h4>하위 선택3</h4>
      <div className="agreeBox">
        <Radio
          name="agreeC"
          id="radioDisagreeC"
          text="동의하지 않음"
          label="basic"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            checkedItemHandler(e.target.id);
          }}
          checked={!checkedItems.includes("radioAgreeC") && true}
        />
        <Radio
          name="agreeC"
          id="radioAgreeC"
          text="동의함"
          label="basic"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            checkedItemHandler(e.target.id);
          }}
          checked={checkedItems.includes("radioAgreeC") && true}
        />
      </div>

      <h4>하위선택 4</h4>

      <div className="agreeBox">
        <Radio
          name="agreeD"
          id="radioDisagreeD"
          text="동의하지 않음"
          label="basic"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            checkedItemHandler(e.target.id);
          }}
          checked={!checkedItems.includes("radioAgreeD") && true}
        />
        <Radio
          name="agreeD"
          id="radioAgreeD"
          text="동의함"
          label="basic"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            checkedItemHandler(e.target.id);
          }}
          checked={checkedItems.includes("radioAgreeD") && true}
        />
      </div>
    </div>
  );
}
