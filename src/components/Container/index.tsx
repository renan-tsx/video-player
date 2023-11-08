import React from "react";
import { Content } from "./styles";

interface ContainerProps extends React.ComponentProps<"div"> {
  bg?: string;
}

export const Container = ({ bg, children, ...props }: ContainerProps) => {
  return (
    <Content $bg={bg} {...props}>
      {children}
    </Content>
  );
};
