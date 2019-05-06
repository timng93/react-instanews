import React from "react";

const View = props => {
  return (
    <div className="submit">
      <button onClick={props.handleSubmit}>Click Me</button>
    </div>
  );
};
export default View;
