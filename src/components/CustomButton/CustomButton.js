import React from "react";
import { Button } from "@material-ui/core";

const CustomButton = ({ children, ...otherProps }) => (
  <Button {...otherProps}>{children}</Button>
);

export default CustomButton;
