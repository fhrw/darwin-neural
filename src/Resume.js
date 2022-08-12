import "./Resume.css";
import Terminal from "./Terminal";
const Resume = (props) => {
  document.onmousedown = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container base-03">
      <Terminal />
    </div>
  );
};

export default Resume;
