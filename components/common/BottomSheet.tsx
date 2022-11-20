import React from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClick: () => void;
  footers?: React.ReactNode;
}

export default function bottomSheet({
  children,
  open = false,
  onClick,
  footers,
}: Props) {
  return (
    <BottomSheet
      open={open}
      header={
        <a href="#!" className="close maskInner" onClick={onClick}>
          <em>바텀시트 닫기</em>
        </a>
      }
      className="bottomSheet"
      // snapPoints={({ maxHeight }) => (maxHeight / 3) * 2}
      footer={footers}
    >
      {children}
    </BottomSheet>
  );
}
