import React from "react";
import "./Modal.scss";

export interface IModalProps {
  children?: React.ReactNode;
  id: string;
  open: boolean;
}

export const Modal = ({ children, id, open }: IModalProps) => {
  return (
    <>
      {open === true && (
        <div id={id} className="modal" data-testid="modal">
          <div>{children}</div>
        </div>
      )}
    </>
  );
};
