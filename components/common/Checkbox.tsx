import React from "react";
import styled from "styled-components";
import classNames from "classnames";

interface Props {
  id?: string;
  name?: string;
  text?: string;
  size?: string;
  simple?: string;
  value?: boolean;
  onClick?: () => void;
  onChange?: any; // eact.ChangeEvent<HTMLInputElement> 이슈
  disabled?: boolean;
  checked?: boolean;
  readOnly?: boolean;
  label?: React.ReactNode;
}

const index = (props: Props) => {
  return (
    // <Checkbox className={classNames("checks", props.size)}>
    <Checkbox className={classNames("checks", props.size)}>
      <input
        id={props.id}
        type="checkbox"
        name={props.name}
        value={props.text}
        className="srOnly"
        checked={props.checked ? props.checked : props.value}
        {...(props as any)}
      />
      <label htmlFor={props.id} className="maskInner">
        {props.label ? props.label : props.text}
      </label>
    </Checkbox>
  );
};

const Checkbox = styled.div`
  text-align: left;
  label {
    position: relative;
    padding-left: 32px;
    display: block;
    cursor: default;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    color: var(--basic-l);
    &::before,
    &::after {
      content: "";
      position: absolute;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }
  }
  input {
    & + label::before {
      top: 50%;
      left: 0;
      margin-top: -11px;
      width: 22px;
      height: 22px;
      border-radius: 100%;
      border: 1px solid var(--basic-e);
      @media (prefers-color-scheme: dark) {
        border-color: var(--basic-h);
      }
    }
    & + label::after {
      top: 50%;
      left: 3px;
      margin-top: -8px;
      mask-image: url("/common/checkbox.svg");
      width: 16px;
      height: 16px;
      background-color: var(--basic-n);
    }
    &:checked + label::before {
      background-color: var(--primary);
      border-color: transparent;
    }
    &:checked + label::after {
      background-color: var(--primary-text);
    }
  }
  &.large {
    label {
      padding-left: 40px;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
    }
    input + label::before {
      width: 28px;
      height: 28px;
      margin-top: -14px;
    }
    input + label::after {
      left: 2px;
      width: 24px;
      height: 24px;
      margin-top: -12px;
    }
  }
  &.xlarge {
    label {
      padding-left: 40px;
      font-weight: 600;
      line-height: 28px;
    }
    input + label::before {
      width: 32px;
      height: 32px;
      margin-top: -16px;
    }
    input + label::after {
      left: 2px;
      width: 24px;
      height: 24px;
      margin-top: -12px;
    }
  }
  &.small {
    label {
      font-size: 12px;
      line-height: 18px;
      color: var(--basic-m);
    }
    input:checked + label {
      color: var(--basic-l);
    }
  }
  &.simple {
    label {
      padding-left: 34px;
      /* color: var(--basic-g); */
    }
    input {
      & + label::before {
        display: none;
      }
      & + label::after {
        left: 0;
        width: 24px;
        height: 24px;
        margin-top: -12px;
      }
      &:checked + label::after {
        background-color: var(--basic-l);
      }
    }
  }
  &.chip {
    display: inline-block;
    margin-right: 8px;
    &:last-child {
      margin-left: 0;
    }
    input {
      & + label {
        height: 32px;
        line-height: 32px;
        padding: 0 12px;
        border-radius: 6px;
        font-size: 14px;
        color: var(--basic-m);
        background-color: var(--basic-c);
        &::before,
        &::after {
          display: none;
        }
      }
      &:checked + label {
        color: var(--basic-a);
        background-color: var(--basic-i);
      }
    }
  }
`;

export default index;
