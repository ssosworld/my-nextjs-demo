import React from "react";
import styled from "styled-components";
import classNames from "classnames";

interface Props {
  text?: string;
  url?: string;
  color?: string;
  size?: string;
  full?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function index({ ...props }: Props) {
  return (
    <StyledButton
      href={props.url}
      className={classNames(
        props.size ? props.size : null,
        props.color ? props.color : null,
        {
          full: props.full,
          disabled: props.disabled,
        },
      )}
      // disabled={props.disabled}
      {...props}
    >
      {props.text}
    </StyledButton>
  );
}

const StyledButton = styled.a`
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0 20px;
  font-weight: 600;
  height: 52px;
  line-height: 50px;
  font-size: 16px;
  border-radius: 26px;
  text-align: center;
  color: var(--basic-l);
  border: solid 1px var(--basic-e);
  background-color: var(--basic-b);
  &.primary {
    color: var(--primary-text);
    background-color: var(--primary);
    border-color: transparent;
  }
  &.secondary {
    color: var(--basic-a);
    background-color: var(--basic-h);
    border-color: var(--basic-h);
  }
  &.info {
    color: var(--basic-l);
    font-weight: 400;
    background-color: var(--basic-c);
    border-color: var(--basic-c);
  }
  &.danger {
    color: var(--danger);
    background-color: var(--danger-b);
    border-color: var(--danger-b);
  }
  &.tiny {
    padding: 0 13px;
    height: 32px;
    line-height: 30px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 16px;
  }
  &.small {
    padding: 0 20px;
    min-width: 80px;
    height: 48px;
    line-height: 46px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 24px;
  }
  &.large {
    padding: 0 20px;
    height: 60px;
    line-height: 58px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 30px;
    &.info {
      font-weight: 400;
    }
  }
  &.xlarge {
    padding: 0 20px;
    height: 60px;
    line-height: 58px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 0;
  }
  &.full {
    display: block;
    padding: 0;
  }
  &.disabled {
    position: relative;
    cursor: default;
    pointer-events: none;
    /* opacity: 0.32; */
    &::after {
      content: "";
      position: absolute;
      top: -1px;
      left: -1px;
      bottom: -1px;
      right: -1px;
      background-color: var(--basic-a);
      opacity: 0.68;
    }
  }
`;
