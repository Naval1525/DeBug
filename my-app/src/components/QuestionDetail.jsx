import { useEffect, useState } from "react";

const QuestionDetail = () => {
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const questionId = window.location.pathname.split("/")[2];

    const fetchQuestionDetail = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/questions/${questionId}/user-answers`);
        if (!response.ok) throw new Error("Failed to fetch question details");
        const data = await response.json();
        setQuestion(data.question);
        setAnswers(data.answers);
      } catch (err) {
        setError("Failed to load question details");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestionDetail();
  }, []);

  if (loading)
    return <div>Loading...</div>;

  if (error)
    return <div>{error}</div>;

  return (
    <div>
      <h1>{question?.title}</h1>
      <p>{question?.body}</p>
      <h3>Author: {question?.questionAuthor?.username}</h3>

      <div>
        <h2>Answers:</h2>
        {answers?.map(answer => (
          <div key={answer?._id}>
            <p>{answer?.body}</p>
            <p>Answered by: {answer?.user?.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionDetail;
