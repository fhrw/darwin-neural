import "./Terminal.css";
import Banner from "./Banner";
import { Data } from "./Data";
import Command from "./Command";
import { useState } from "react";
import { motion } from "framer-motion";
const Terminal = (props) => {
  const [enteredCommands, setEnteredCommands] = useState([]);
  const acceptedCommands = [
    "name",
    "experience",
    "about",
    "web",
    "phone",
    "help",
    "email",
    "clear",
    "calculate",
  ];

  const submitCommand = (command) => {
    setEnteredCommands([...enteredCommands, command]);
  };

  const Output = (props) => {
    const commandRpt = `visitor@resume.com$`;
    const command = props.command;
    const unknown = "unknown command";
    return (
      <>
        <p className="red">
          <span>{commandRpt.slice(0, 8)}</span>
          <span className="yellow">{commandRpt.slice(8, 18)}</span>
          <span className="grey">{commandRpt.slice(18)}</span>
          <span
            style={{ marginLeft: "0.25em" }}
            className={
              acceptedCommands.indexOf(command) !== -1 ? "blue" : "grey"
            }
          >
            {command}
          </span>
        </p>
        {acceptedCommands.indexOf(props.command) === -1 ? (
          <p className="grey">{unknown}</p>
        ) : (
          <>{commandOutput(props.command)}</>
        )}
      </>
    );
  };

  const calculateJob = () => {
    const result = JSON.stringify(Data.result, null, 2);

    // return <pre className="grey">{result}</pre>;
  };

  const commandOutput = (command) => {
    switch (command) {
      case "calculate":
        return (
          <pre className="grey">{JSON.stringify(Data.result, null, 2)}</pre>
        );
      case "help":
        const comDesc = {
          about: "summary of basic information",
          name: "returns name programmer",
          web: "returns link to website to current browser",
          phone: "returns phone number",
          email: "cybernetic link to local email application",
          help: "this command! returns list of available commands",
          experience: "returns database of relevant experience",
          clear: "clears the terminal window",
          calculate:
            "calculates suitabilty for advertised role using advanced neural engine",
        };
        return (
          <>
            {acceptedCommands.map((command) => (
              <div style={{ display: "flex", gap: "2em" }}>
                <p className="blue">{command}</p>
                <p className="grey">{comDesc[command]}</p>
              </div>
            ))}
          </>
        );
      case "about":
        return (
          <>
            <p className="grey">{Data.name}</p>
            <ul>
              <li className="yellow">
                <a href={`https://www.${Data.url}`}>{Data.url}</a>
              </li>
              <li className="green">{Data.phone}</li>
              <li className="yellow">
                <a href={`mailto:${Data.url}`}>{Data.email}</a>
              </li>
            </ul>
            <p className="grey">{Data.about}</p>
          </>
        );
      case "experience":
        return (
          <>
            {Data.experience.map((item) => {
              return (
                <pre className="grey">{JSON.stringify(item, null, 2)}</pre>
              );
            })}
          </>
        );
      case "name":
        return (
          <p style={{ textAlign: "center", width: "200px" }} className="grey">
            ++++++++++++++++++++++++ <br />
            Neural1652 engine copyright <br /> {Data.name} <br /> 2022 <br />
            ++++++++++++++++++++++++
          </p>
        );
      case "phone":
        return <p className="grey">{Data.phone}</p>;
      case "email":
        return (
          <a href="mailto:felix@felixwatson.com.au" className="yellow">
            {Data.email}
          </a>
        );
      case "web":
        return (
          <a href="https://www.felixwatson.com.au" className="yellow">
            felixwatson.com.au
          </a>
        );
      case "clear":
        setEnteredCommands([]);
    }
  };

  return (
    <div className="wrapper base-03">
      <Banner />
      {enteredCommands.map((command) => (
        <Output command={command} />
      ))}
      <Command
        submitCommand={submitCommand}
        acceptedCommands={acceptedCommands}
      />
    </div>
  );
};

export default Terminal;
