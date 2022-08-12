import "./Command.css";
import { useState, useEffect } from "react";

const Caret = () => {
  return <div className="caret" />;
};

const Command = (props) => {
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitCommand(input);
    setInput("");
  };
  return (
    <div className="command">
      <p style={{ paddingRight: ".25em" }} className="element grey">
        <span className="red">visitor</span>
        <span className="yellow">@resume.com</span>$
      </p>
      <span
        className={
          props.acceptedCommands.indexOf(input) !== -1 ? "blue" : "grey"
        }
      >
        {input}
      </span>
      <Caret />
      <form onSubmit={handleSubmit}>
        <input autoFocus onChange={handleChange} value={input} />
      </form>
    </div>
  );
};

export default Command;
