import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Checkbox from "../common/Checkbox";
import TextLink from "../common/TextLink";
import SubChecked from "./SubChecked";
import BottomSheet from "../common/BottomSheet";

const terms = [
  { id: "agree1", text: "[필수] 체크1" },
  { id: "agree2", text: "[필수] 체크2" },
  { id: "agree3", text: "[필수] 체크3" },
  { id: "agree4", text: "[필수] 체크4" },
];

export default function ManageChecked() {
  const [agree, setAgree] = useState(false); // 바텀시트

  const [isModal1, modalOn1] = useState(false);
  const [isModal2, modalOn2] = useState(false);
  const [isModal3, modalOn3] = useState(false);
  const [isModal4, modalOn4] = useState(false);

  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  // 개별 check 제어
  const checkedItemHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedId = e.target.id;
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedItems([...checkedItems, checkedId]);
    } else {
      // 체크 해제
      setCheckedItems(checkedItems.filter((el) => el !== checkedId));
    }
  };

  // 전체 check 제어
  const allCheckedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      const idArray: string[] = [];
      terms.forEach((el) => idArray.push(el.id));
      setCheckedItems(idArray);
      setIsAllChecked(true);
    } else {
      setCheckedItems([]);
      setIsAllChecked(false);
    }
  };

  // 약관 자세히
  const onAgreeMore = (idx: number) => {
    switch (idx) {
      case 1:
        return modalOn1(true);
      case 2:
        return modalOn2(true);
      case 3:
        return modalOn3(true);
      case 4:
        return modalOn4(true);
      default:
        return "";
    }
  };

  useEffect(() => {
    if (terms.length === checkedItems.length) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
    // console.log("top", checkedItems);
  }, [checkedItems, checkedItems.length]);

  return (
    <WrapBox>
      <div className="head">
        <h3>checkebox test</h3>
      </div>
      <div className="body">
        <div className="agreeList">
          <div className="all">
            <Checkbox
              id="agreeAll"
              size="large"
              text="전체체크"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                allCheckedHandler(e);
              }}
              checked={terms.length === checkedItems.length && true}
            />
          </div>
          <ul>
            {terms.map((el, index) => (
              <li key={index}>
                <Checkbox
                  name={el.id}
                  id={el.id}
                  size="simple small"
                  text={el.text}
                  readOnly
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    checkedItemHandler(e);
                  }}
                  // checked={isAllChecked && true}
                  checked={checkedItems.includes(el.id) && true}
                />
                {index === 3 && (
                  <TextLink
                    text="자세히"
                    url="#!"
                    type="underline"
                    size="xtiny"
                    onClick={() => onAgreeMore(2)}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="foot">
        <Button
          text="확인"
          url="#!"
          size="large"
          color="primary"
          full
          disabled={!isAllChecked && true}
          // onClick={onNextPage}
        />
      </div>

      <BottomSheet open={isModal2} onClick={() => modalOn2(false)}>
        <SubChecked
          checkedTop={checkedItems.includes("agree4") && true}
          checkedTopItems={checkedItems}
          setCheckedTopItems={setCheckedItems}
        />
      </BottomSheet>
    </WrapBox>
  );
}

const WrapBox = styled.div`
  margin: 20px;
`;
