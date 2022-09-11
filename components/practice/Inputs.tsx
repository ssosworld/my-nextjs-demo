import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Radio from "../common/Radio";

// type Props = {
//   onSubmit: (form: { name: string; description: string }) => void;
// };
// export default function Inputs({ onSubmit }: Props) {

const dataType: object = { YY: "fruits", NN: "color" };
const option: { [index: string]: object } = {
  YY: {
    y1: "apple",
    y2: "banana",
    y3: "orange",
  },
  NN: { n1: "black", n2: "white" },
};

export default function Inputs() {
  const [type, setType] = useState("YY");
  const [state, setOptions] = useState({
    group: type === "NN" ? option.NN : option.YY,
    selected: type === "NN" ? "n1" : "y1",
  });
  const { group, selected } = state;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(`*****handleChange*****`);
    console.log(`선택한 값 : ${e.target.id}`);
    const checkedVal = e.target.id;

    if (checkedVal === "YY") {
      setType(e.target.id);
      setOptions({
        group: option.YY,
        selected: "y1",
      });
    } else if (checkedVal === "NN") {
      setType(e.target.id);
      setOptions({
        group: option.NN,
        selected: "n2",
      });
    } else {
      setOptions((prevState) => {
        return { ...prevState, selected: checkedVal };
      });
    }
  };

  // const onResult = () => {
  //   console.log(`Type : ${type}`);
  //   console.log(`Option : ${selected}`);
  // };

  return (
    <FilterSel>
      <h4>먼저 선택해주세요</h4>
      <div className="chips">
        {Object.entries(dataType).map((value, i) => (
          <Radio
            key={i}
            name="type"
            id={value[0]}
            text={value[1]}
            label="chip"
            onChange={onChange}
            checked={type === value[0]}
          />
        ))}
      </div>
      <br />
      <h4>그 다음 선택해주세요</h4>
      <div className="chips">
        {Object.entries(group).map((value, i) => (
          <Radio
            key={i}
            name="option"
            id={value[0]}
            text={value[1]}
            label="chip"
            onChange={onChange}
            checked={selected === value[0]}
          />
        ))}
      </div>

      {/* <div className="col col-2-3">
        <Button
          text="select"
          url="#!"
          color="primary"
          size="small"
          // full
          onClick={onResult}
        />
      </div>
      <div>
        Type : {type}
        Option : {selected}
      </div> */}
    </FilterSel>
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
