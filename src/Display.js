import {useSelector} from "react-redux";
import {selectDisplayText} from "./selectors";

const Display = () => {
  const displayText = useSelector(selectDisplayText)

  return <p className="display">{displayText}</p>;
};

export default Display;
