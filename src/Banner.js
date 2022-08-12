import { Data } from "./Data";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
const Banner = (props) => {
  const parent = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        staggerChildren: 0.1,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div className="grey">
      <p>
        <span className="blue">{Data.banner.startUp.slice(0, 17)}</span>
        <span className="grey">{Data.banner.startUp.slice(17, 18)}</span>

        <span className="yellow">{Data.banner.startUp.slice(18, 31)}</span>
        <span className="grey">{Data.banner.startUp.slice(31, 32)}</span>
        <span className="grey">{Data.banner.startUp.slice(32)}</span>
      </p>
      {Data.banner.intro.map((item, index) => (
        <p key={uuid()}>{item}</p>
      ))}
      <p>
        type <span className="blue">'help'</span> to see a list of commands.
      </p>
    </div>
  );
};

export default Banner;
