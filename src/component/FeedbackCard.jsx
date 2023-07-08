/* eslint-disable react/prop-types */

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import StarRenderd from './StarRenderd';
import { randomPeople } from '../utils/randomPeople';

const FeedbackCard = ({
  feedback,
  feedbacks,
  setFeedbacks,
  setFeedbackEdit,
}) => {
  const { rating, text } = feedback;

  const deleteFeedBack = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedbacks/${id}`, { method: 'DELETE' });
      const newFeedbacks = feedbacks.filter((feedback) => feedback.id !== id);
      setFeedbacks(newFeedbacks);
    }
  };

  const user = randomPeople();

  return (
    <div className="w-[95%] max-w-3xl mx-auto border-solid border border-accent dark:border-darkAccent rounded-lg py-5 px-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div>
            <img
              src={user.imgUrl}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <p className="text-sm">{user.name}</p>
        </div>
        <div className="flex gap-x-2">
          <button
            onClick={() =>
              setFeedbackEdit({
                item: feedback,
                edit: true,
              })
            }
          >
            <AiOutlineEdit />
          </button>
          <button onClick={() => deleteFeedBack(feedback.id)}>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
      <StarRenderd rating={rating} />
      <p className="mt-3 ">{text}</p>
    </div>
  );
};

export default FeedbackCard;
