import React from "react";
import styled from "styled-components";
import classNames from "classnames";
// import HtmlReactParser from "html-react-parser";

interface Props {
  text?: string;
  url?: string;
  size?: string;
  type?: string;
  color?: string;
  underline?: boolean;
  full?: boolean;
  classes?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
}

export default function index({ ...props }: Props) {
  return (
    <Link
      href={props.url}
      className={classNames(
        props.type && props.type,
        props.color && props.color,
        props.size && props.size,
        props.classes && props.classes,
        // props.disabled && props.disabled,
        {
          underline: props.underline,
          full: props.full,
        },
      )}
      disabled={props.disabled}
      // {...(props as any)}
      {...props}
    >
      <span className="maskInner">
        {/* {props.text && HtmlReactParser(props.text)} */}
        {props.text}
      </span>
    </Link>
  );
}

const Link = styled.a`
  position: relative;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  vertical-align: middle;
  color: var(--basic-m);
  span {
    position: relative;
    display: inline-block;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
    }
  }
  &::after {
    content: "";
    position: absolute;
    background-color: var(--basic-m);
  }
  &.large {
    font-size: 16px;
    line-height: 1.44;
    font-weight: 400;
  }
  &.more {
    span {
      padding-right: 18px;
      &::after {
        margin-top: -9px;
        width: 18px;
        height: 18px;
        mask-image: url("/product/common/link_more.svg");
        background-color: var(--basic-m);
      }
    }
    &.full {
      display: block;
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: 15px;
      font-weight: 400;
      text-align: center;
      span {
        padding-right: 24px;
        &::after {
          margin-top: -12px;
          width: 24px;
          height: 24px;
          transform: rotate(90deg);
          transition: all 0.3s;
        }
      }
    }
  }
  &.notice {
    span {
      padding-right: 20px;
      &::after {
        margin-top: -9px;
        width: 18px;
        height: 18px;
        mask-image: url("/product/common/notice.svg");
        background-color: var(--basic-m);
      }
    }
  }
  &.guide {
    span {
      display: inline;
      &::after {
        position: relative;
        top: auto;
        right: auto;
        display: inline-block;
        margin-left: 3px;
        margin-top: -5px;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        mask-image: url("/product/common/guide.svg");
        background-color: var(--basic-m);
      }
    }
  }
  &.underline {
    &::after {
      top: 100%;
      left: 0;
      right: 0;
      height: 1px;
    }
    &.more::after,
    &.notice::after {
      right: 20px;
    }
  }
  &.secondary {
    color: var(--basic-l);
    &::after,
    span::after {
      background-color: var(--basic-l);
    }
  }
  &.info {
    color: var(--info);
    &::after,
    span::after {
      background-color: var(--info);
    }
  }
  &.danger {
    color: var(--danger);
    &::after,
    span::after {
      background-color: var(--danger);
    }
  }
  &.light {
    color: var(--basic-a);
    &::after,
    span::after {
      background-color: var(--basic-a);
    }
  }
`;
