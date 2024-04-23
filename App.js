import React from "react";
import ReactDOM from "react-dom";

const HeadingComponent = () => (
  <div id="parent">
    <div id="child">
      <h1>I am an h1 tag.</h1>
      <h2>I am an h2 tag.</h2>
    </div>
    
    <div id="child2">
      <h1>I am and h1 tag.</h1>
      <h2>I am and h2 tag.</h2>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
