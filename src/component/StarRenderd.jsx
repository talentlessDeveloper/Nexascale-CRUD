/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa';

const StarRenderd = ({ rating }) => {
  return (
    <div className="flex gap-x-1 mt-3">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <div key={`${i}-star`}>
            <FaStar
              className={`h-3 w-3 ${
                ratingValue <= rating
                  ? ' text-darkPrimary dark:text-primary'
                  : ' text-gray-400'
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRenderd;
