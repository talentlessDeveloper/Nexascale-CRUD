/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Importing star icons from react-icons

const StarRating = ({ rating, setRating }) => {
  //   const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex space-x-1">
      {' '}
      {/* Using flex and space-x-1 for single line and gaps */}
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className="hidden" // hiding the default radio input
            />

            <FaStar
              className={`h-5 w-5 transition-all duration-200 cursor-pointer 
              ${
                ratingValue <= (hover || rating)
                  ? ' text-darkPrimary dark:text-primary'
                  : ' text-gray-400'
              }`}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
