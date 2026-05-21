import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Slider({ pictures }) {
  const [index, setIndex] = useState(0);
  const previousClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(pictures.length - 1);
    }
  };

  const nextClick = () => {
    if (index < pictures.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div>
      <button className="Slider__Previous" onClick={previousClick}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button className="Slider__Next" onClick={nextClick}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <img src={pictures[index]} alt="Photos des Logements" />
    </div>
  );
}
