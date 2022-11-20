import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import BottomSheet from "../common/BottomSheet";
import Button from "../common/Button";
import Checkbox from "../common/Checkbox";

const terms = [
  { id: "agree1", text: "[필수] 서비스 이용약관" },
  { id: "agree2", text: "[필수] 개인(신용)정보 수집·이용에 관한 사항" },
  { id: "agree3", text: "[필수] 개인(신용)정보의 조회에 관한 사항" },
  { id: "agree4", text: "[필수] 제3자 개인(신용)정보의 제공에 관한사항" },
];

export default function ManageChecked() {
  const [agree, setAgree] = useState(false); // 바텀시트

  const onCloseAgree = () => {
    setAgree(false);
  };

  return (
    <div className="wrapper">
      <div className="col col-2-3">
        <Button
          text="select"
          url="#!"
          color="primary"
          size="small"
          // full
          onClick={() => setAgree(true)}
        />
      </div>

      <BottomSheet open={agree} onClick={onCloseAgree}>
        <div className="head">
          <h3>
            보장을 받으려면
            <br /> 동의가 필요해요
          </h3>
          <p>동의해도 전화로 보험 권유를 하지 않아요</p>
        </div>
        <div className="body">
          <div className="agreeList">
            <ul className="reset desc">
              {terms.map((el, index) => (
                <li key={index}>
                  <Checkbox
                    name={el.id}
                    id={el.id}
                    size="simple small"
                    text={el.text}
                    readOnly
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    //   checkedItemHandler(e);
                    // }}
                    // checked={isAllChecked && true}
                    // checked={checkedItems.includes(el.id) && true}
                  />
                  {/* <TextLink
                    text="자세히"
                    url="#!"
                    type="underline"
                    size="xtiny"
                    onClick={() => onAgreeMore(index + 1)}
                  /> */}
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
            // disabled={!isAllChecked && true}
            // onClick={onNextPage}
          />
        </div>
      </BottomSheet>
    </div>
  );
}

const FilterSel = styled.div`
  margin: 20px;
  .chips {
    margin-top: -2px;
  }
  .chip {
    margin-top: -12px;
  }
  .tag {
    display: inline-block;
    margin: 12px 8px 0 0;
    padding: 0 28px 0 12px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    font-weight: 600;
    color: var(--basic-a);
    border-radius: 6px;
    background-color: var(--basic-i);
    &::after {
      top: 50%;
      right: 8px;
      margin-top: -8px;
      width: 16px;
      height: 16px;
      mask-image: url("../common/chip_delete.svg");
      background-color: var(--basic-a);
    }
  }
  .add {
    position: relative;
    display: inline-block;
    margin-top: 12px;
    height: 32px;
    line-height: 30px;
    padding: 0 12px 0 28px;
    font-size: 14px;
    color: var(--basic-l);
    border-radius: 6px;
    border: solid 1px var(--basic-l);
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 10px;
      width: 12px;
      height: 1px;
      background-color: var(--basic-l);
    }
    &::after {
      transform: rotate(90deg);
    }
  }
`;
