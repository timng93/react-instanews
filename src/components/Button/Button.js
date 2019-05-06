import React from "react";

const Button = props => {
  return (
    <div className="submit">
      <button onClick={props.handleSubmit}>Click Me</button>
    </div>
  );
};
export default Button;
