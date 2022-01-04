import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "blue",
  fontSize: "20px",
  border: "3px solid green",
  backgroundColor: "coral",
  borderRadius: "25px",
  boxShadow: "15px 10px",
  height: "120px",
  paddingTop: "80px",
  paddingLeft: "200px"
};

customStyle.color = "green";

ReactDOM.render(
  <div>
    <h1 style={{ color: "red" }}>Hello World!</h1>
    <h1 style={customStyle}>I love blue!</h1>
  </div>,
  document.getElementById("root")
);
