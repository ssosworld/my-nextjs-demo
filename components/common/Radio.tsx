import styled from "styled-components";
import classNames from "classnames";

interface Props {
  id: string;
  name?: string;
  text?: string;
  size?: string;
  large?: string;
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  onChange?: any;
  readOnly?: boolean;
  onClick?: () => void;
  defaultChecked?: boolean;
}

const index = (props: Props) => {
  return (
    <Radio
      className={classNames("radio", props.size, props.label && props.label)}
    >
      <input
        id={props.id}
        type="radio"
        name={props.name}
        // className="srOnly"
        value={props.text}
        checked={props.checked}
        disabled={props.disabled}
        readOnly={props.readOnly}
        {...(props as any)}
      />
      <label htmlFor={props.id} className="maskInner">
        <span>{props.text}</span>
      </label>
    </Radio>
  );
};

const Radio = styled.div`
  text-align: left;
  label {
    position: relative;
    padding-left: 30px;
    display: block;
    cursor: default;
    line-height: 22px;
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
    }
    & + label::after {
      top: 50%;
      left: 6px;
      margin-top: -5px;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: var(--primary-text);
      transform: scale(0, 0);
      transition: all 0.3s;
    }
    &:checked + label::before {
      background-color: var(--primary);
      border-color: transparent;
    }
    &:checked + label::after {
      transform: scale(1, 1);
    }
  }
  &.text {
    input {
      & + label {
        padding-left: 0;
        &::before,
        &::after {
          display: none;
        }
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
  &.basic {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 12px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-right: 10px;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      label {
        span {
          position: absolute;
          top: 0;
          left: 0;
          height: 14px;
          width: 14px;
          background-color: #eee;
          border-radius: 50%;
          margin-left: -3px;
        }
      }
      & + label {
        padding-left: 22px;
        color: var(--basic-j);
        &::before {
          width: 14px;
          height: 14px;
          border: 1px solid var(--basic-f);
          margin-top: -7px;
          left: 0;
          background-color: var(--basic-a);
        }
        &::after {
          width: 6px;
          height: 6px;
          background-color: var(--basic-l);
          left: 4px;
          margin-top: -3px;
        }
      }
      &:checked + label::before {
        border-color: var(--basic-l);
      }
    }
  }
  &.none {
    span {
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
      position: absolute;
      display: inline-block;
      overflow: hidden;
      word-break: keep-all;
      white-space: nowrap;
      clip: rect(0 0 0 0);
      font-family: a;
      padding: 0;
      border: 0;
      width: 1px;
      height: 1px;
      margin: -1px 0 0 -1px;
      color: transparent;
    }
  }
`;

export default index;
