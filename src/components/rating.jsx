import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";


const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={index < rating ? faStar : faStar}
          className={index < rating ? "Star__Full" : "Star__Empty"}
        />
      ))}
    </div>
  );
};

export default Rating;