import React, { PropsWithChildren } from "react";
import "./Container.scss";

export interface IContainer {}

const Container = ({ children }: PropsWithChildren<IContainer>) => {
  return <div className="devk__container">{children}</div>;
};

export default Container;
