import React, { PropsWithChildren } from "react";
import "./Button.css";

export interface IButton {
  type: "primary" | "secondary";
}

const Button = ({ children, type }: PropsWithChildren<IButton>) => {
  return <button>{children}</button>;
};

export default Button;
