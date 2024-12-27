import { useState, useEffect, useRef, useCallback } from 'react';
import { API_ENDPOINTS } from '../constants/endpoints';

export const useQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_ENDPOINTS.questions}?page=${page}&limit=10`
      );
      if (!response.ok) throw new Error("Failed to fetch questions");
      const data = await response.json();


      // Guard against missing or invalid data
      const newQuestions = Array.isArray(data.questions) ? data.questions :
                          Array.isArray(data) ? data : [];

      setQuestions(prev => [...prev, ...newQuestions]);
      setHasMore(!!data.hasMore); // Convert to boolean
    } catch (err) {
      console.error('Error details:', err); // Add this to debug
      setError("Failed to load questions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [page]);

  const observer = useRef();
  const lastQuestionElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return {
    questions,
    loading,
    error,
    hasMore,
    lastQuestionElementRef
  };
};