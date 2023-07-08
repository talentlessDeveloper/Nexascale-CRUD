import { useEffect, useState } from 'react';

import FeedbackCard from './component/FeedbackCard';
import Form from './component/Form';
import Header from './component/Header';
import Loader from './component/Loader';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFeedbacks = async () => {
      setLoading(true);
      const res = await fetch('/feedbacks?_sort=rating&_order=asc');
      const data = await res.json();
      setFeedbacks(data);
      setLoading(false);
    };

    getFeedbacks();
  }, []);

  return (
    <div className="pb-10">
      <Header />
      <h1 className="text-accent dark:text-darkAccent text-center text-3xl my-4 font-bold">
        Feedback App
      </h1>

      <div className="nexa-container">
        <Form
          feedbacks={feedbacks}
          setFeedbacks={setFeedbacks}
          feedbackEdit={feedbackEdit}
          setFeedbackEdit={setFeedbackEdit}
        />
        {loading ? (
          <div className="h-[300px] flex justify-center items-center">
            <Loader size="w-10 h-10" />
          </div>
        ) : (
          <div className=" mt-10 lg:mt-16 space-y-4">
            {feedbacks.map((feedback) => {
              return (
                <FeedbackCard
                  key={feedback.id}
                  feedback={feedback}
                  feedbacks={feedbacks}
                  setFeedbacks={setFeedbacks}
                  setFeedbackEdit={setFeedbackEdit}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
