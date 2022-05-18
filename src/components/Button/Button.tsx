import React, { PropsWithChildren } from "react";
import "./Button.scss";

export interface IButton {
  type: "primary" | "secondary";
}

const Button = ({ children, type }: PropsWithChildren<IButton>) => {
  return (
    <button
      className={
        type === "primary" ? "devk__btn--primary" : "devk__btn--secondary"
      }
    >
      {children}
    </button>
  );
};

export default Button;
