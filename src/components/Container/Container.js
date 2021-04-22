import React from "react";

function Container({ children, padding = 0 }) {
  return (
    <div
      style={{
        width: "100%",
        padding: padding,
        paddingLeft: padding + 8,
        paddingRight: padding + 8,
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
