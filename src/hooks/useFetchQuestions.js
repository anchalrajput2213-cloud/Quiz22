import { useState, useEffect } from "react";
function useFetchQuestions(category) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!category) return;
    function fetchQuestions() {
      setLoading(true);
      setError("");
      Promise.all([
        fetch(`https://the-trivia-api.com/v2/questions?limit=2&categories=${category}&difficulties=easy&type=multiple`).then((res) => res.json()),
        fetch(`https://the-trivia-api.com/v2/questions?limit=2&categories=${category}&difficulties=medium&type=multiple`).then((res) => res.json()),
        fetch(`https://the-trivia-api.com/v2/questions?limit=2&categories=${category}&difficulties=hard&type=multiple`).then((res) => res.json()),
      ])
        .then(([easy, medium, hard]) => {
          const allQuestions = [...easy, ...medium, ...hard];
          setQuestions(allQuestions);
        })
        .catch(() => {
          setError("Failed to load questions.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
    fetchQuestions();
  }, [category]);

  return {
    questions,
    loading,
    error,
  };
}
export default useFetchQuestions;