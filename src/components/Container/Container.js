import React from "react";

function Container({ children, padding = 0 }) {
  return (
    <div style={{ width: "100%", paddingLeft: padding, paddingRight: padding }}>
      {children}
    </div>
  );
}

export default Container;
