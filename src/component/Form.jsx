/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import StarRating from './StarRating';
import { v4 } from 'uuid';
import Loader from './Loader';

const Form = ({ setFeedbacks, feedbacks, feedbackEdit, setFeedbackEdit }) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [isDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const addFeedback = async (newFeedback) => {
    setLoading(true);
    const res = await fetch('/feedbacks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await res.json();

    setFeedbacks([data, ...feedbacks]);
    setLoading(false);
  };

  const updateFeedback = async (id, updatedFeedback) => {
    setLoading(true);
    const res = await fetch(`/feedbacks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFeedback),
    });

    const data = await res.json();
    const newFeedbacks = feedbacks.map((feedback) => {
      if (feedback.id === id) {
        return data;
      }
      return feedback;
    });

    setFeedbacks(newFeedbacks);
    setLoading(false);
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
        id: v4(),
      };

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
    }
    setText('');
    setRating(0);
  };

  useEffect(() => {
    if (feedbackEdit.edit) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
      inputRef.current.focus();
    }
  }, [feedbackEdit.edit, feedbackEdit.item.rating, feedbackEdit.item.text]);

  return (
    <form
      className="w-[95%] mx-auto max-w-2xl py-5 px-6 border-solid border border-accent dark:border-darkAccent rounded-lg "
      onSubmit={handleSubmit}
    >
      <StarRating rating={rating} setRating={setRating} />
      <div className="mt-5">
        <input
          type="text"
          placeholder="Feedback Here..."
          value={text}
          onChange={handleTextChange}
          className="w-full py-3 px-2 outline outline-1 outline-darkPrimary dark:outline-primary rounded-md text-darkPrimary dark:text-primary bg-primary dark:bg-darkPrimary text-lg"
          ref={inputRef}
        />
      </div>
      <div className="flex justify-end mt-3">
        <button
          className="bg-darkPrimary text-primary dark:bg-primary dark:text-darkPrimary py-2 px-10 hover:text-darkPrimary hover:bg-primary dark:hover:text-primary dark:hover:bg-darkPrimary transition-colors duration-300 rounded-md disabled:bg-gray-400 dark:disabled:bg-primary/5 disabled:cursor-not-allowed hover:disabled:text-darkPrimary dark:hover:disabled:text-gray-700 flex justify-center items-center"
          disabled={isDisabled}
        >
          {loading ? <Loader /> : 'Send'}
        </button>
      </div>
      {message && <p className="text-center text-red-600 text-sm">{message}</p>}
    </form>
  );
};

export default Form;
