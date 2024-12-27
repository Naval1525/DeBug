import { useState, useEffect } from "react";
import CreateQuestionForm from "./CreateQuestionForm";
import Cookies from "js-cookie";
import { Sliders, Calendar, Tag, Award, MessageCircle } from "lucide-react";
import Navbar from "./shared/Navbar";

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    tags: [],
    dateRange: "all",
    minVotes: "",
    maxVotes: "",
    minAnswers: "",
    maxAnswers: "",
    userReputation: "all",
    sortBy: "newest",
    hasAcceptedAnswer: null,
    questionStatus: "all",
  });

  const [availableTags, setAvailableTags] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const token = Cookies.get("token");

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    const tags = [...new Set(questions.flatMap((q) => q.tags))];
    setAvailableTags(tags);
  }, [questions]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("https://devflow-1.onrender.com/api/questions");
      if (!response.ok) throw new Error("Failed to fetch questions");

      const data = await response.json();
      setQuestions(data);
    } catch (err) {
      setError("Failed to load questions");
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (questionId, voteType) => {
    try {
      const response = await fetch(
        `https://devflow-1.onrender.com/api/questions/${questionId}/vote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Using the token from Cookies
          },
          credentials: "include",
          body: JSON.stringify({ voteType }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to process vote");
      }

      const data = await response.json();

      // Update the questions state with new vote count
      setQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question._id === questionId
            ? {
                ...question,
                votes: data.votes,
                hasUpvoted: data.hasUpvoted,
                hasDownvoted: data.hasDownvoted,
              }
            : question
        )
      );
    } catch (error) {
      console.error("Error voting:", error);
      // You might want to show an error notification here
    }
  };
  const handleQuestionCreated = (newQuestion) => {
    setQuestions(prev => [newQuestion, ...prev]);
  };

  const filteredQuestions = questions.filter((question) => {
    const matchesSearch =
      question.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      question.body.toLowerCase().includes(filters.search.toLowerCase());

    const matchesTags =
      filters.tags.length === 0 ||
      filters.tags.some((tag) => question.tags.includes(tag));

    const matchesVotes =
      (!filters.minVotes || question.votes >= parseInt(filters.minVotes)) &&
      (!filters.maxVotes || question.votes <= parseInt(filters.maxVotes));

    const matchesAnswers =
      (!filters.minAnswers ||
        question.answers >= parseInt(filters.minAnswers)) &&
      (!filters.maxAnswers || question.answers <= parseInt(filters.maxAnswers));

    const matchesDate = () => {
      if (filters.dateRange === "all") return true;
      const questionDate = new Date(question.createdAt);
      const now = new Date();
      switch (filters.dateRange) {
        case "today":
          return questionDate.toDateString() === now.toDateString();
        case "week":
          return questionDate >= new Date(now - 7 * 24 * 60 * 60 * 1000);
        case "month":
          return questionDate >= new Date(now - 30 * 24 * 60 * 60 * 1000);
        default:
          return true;
      }
    };

    return (
      matchesSearch &&
      matchesTags &&
      matchesVotes &&
      matchesAnswers &&
      matchesDate()
    );
  });

  const FilterSection = ({ title, children }) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );

  return (
    // Using a subtle dark background that's easier on the eyes
    <div className="min-h-screen bg-[#121622]">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        {/* Search Bar with softer colors */}
        <div className="p-4 border-b border-gray-800/50">
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full bg-[#1a1f2e] border border-gray-700/30 rounded-lg px-4 py-3 text-gray-200
                     placeholder-gray-400 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                     focus:ring-indigo-400/30 transition-all duration-200"
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, search: e.target.value }))
            }
          />
        </div>
        {/* Create Question Button */}
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600
               transition-colors duration-200 flex items-center gap-2"
          >
            <span className="text-lg">+</span>
            Create Question
          </button>
        </div>

        {/* Create Question Modal */}
        {isCreateModalOpen && (
          <CreateQuestionForm
            onClose={() => setIsCreateModalOpen(false)}
            onQuestionCreated={handleQuestionCreated}
          />
        )}

        <div className="flex">
          {/* Sidebar with improved contrast and spacing */}
          <div className="w-72 border-r border-gray-800/50 p-6 bg-[#161a27]">
            {/* Sort Options */}
            <FilterSection title="Sort By">
              <select
                className="w-full bg-[#1e2333] border border-gray-700/30 rounded-lg px-3 py-2.5
                         text-gray-200 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                         focus:ring-indigo-400/30 transition-all duration-200"
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
                }
              >
                <option value="newest">Newest First</option>
                <option value="votes">Most Voted</option>
                <option value="answers">Most Answered</option>
                <option value="trending">Trending</option>
              </select>
            </FilterSection>

            {/* Date Range Filter */}
            <FilterSection title="Time Period">
              <div className="space-y-2 pl-1">
                {["all", "today", "week", "month"].map((range) => (
                  <label
                    key={range}
                    className="flex items-center space-x-3 text-gray-300 hover:text-gray-100
                                              cursor-pointer transition-colors duration-150 py-1"
                  >
                    <input
                      type="radio"
                      name="dateRange"
                      checked={filters.dateRange === range}
                      onChange={() =>
                        setFilters((prev) => ({ ...prev, dateRange: range }))
                      }
                      className="text-indigo-400 focus:ring-indigo-400/30 focus:ring-offset-gray-800"
                    />
                    <span className="capitalize">{range}</span>
                  </label>
                ))}
              </div>
            </FilterSection>

            {/* Number Range Filters */}
            <FilterSection title="Vote Range">
              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-1/2 bg-[#1e2333] border border-gray-700/30 rounded-lg px-3 py-2
                           text-gray-200 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                           focus:ring-indigo-400/30 transition-all duration-200"
                  value={filters.minVotes}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      minVotes: e.target.value,
                    }))
                  }
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-1/2 bg-[#1e2333] border border-gray-700/30 rounded-lg px-3 py-2
                           text-gray-200 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                           focus:ring-indigo-400/30 transition-all duration-200"
                  value={filters.maxVotes}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      maxVotes: e.target.value,
                    }))
                  }
                />
              </div>
            </FilterSection>

            {/* Tags with improved visual hierarchy */}
            <FilterSection title="Tags">
              <div
                className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2
                            scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800/30"
              >
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                      filters.tags.includes(tag)
                        ? "bg-indigo-400/20 text-indigo-200 border border-indigo-400/30"
                        : "bg-[#1e2333] text-gray-300 border border-gray-700/30 hover:bg-[#252b3d] hover:border-gray-600/50"
                    }`}
                    onClick={() =>
                      setFilters((prev) => ({
                        ...prev,
                        tags: prev.tags.includes(tag)
                          ? prev.tags.filter((t) => t !== tag)
                          : [...prev.tags, tag],
                      }))
                    }
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </FilterSection>
          </div>

          {/* Main Content with improved card design */}
          <div className="flex-1 p-6 bg-[#141824]">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-400"></div>
              </div>
            ) : error ? (
              <div className="text-red-400 bg-red-400/10 px-4 py-2 rounded-lg">
                {error}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredQuestions.map((question) => (
                  <div
                    key={question._id}
                    className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-700/20 hover:border-indigo-400/30
                             transform transition-all duration-200 hover:shadow-lg hover:shadow-indigo-400/5"
                  >
                    <div className="flex items-start gap-6">
                      {/* Vote buttons with softer interaction */}
                      <div className="flex flex-col items-center gap-2 min-w-[80px]">
                        <button
                          onClick={() => handleVote(question._id, "up")}
                          className={`p-2 rounded-lg transition-colors duration-200 ${
                            question.hasUpvoted
                              ? "bg-indigo-500 text-white"
                              : "bg-[#1e2333] hover:bg-[#252b3d] text-gray-300"
                          }`}
                          disabled={loading}
                        >
                          ▲
                        </button>
                        <span className="text-xl font-medium text-gray-200">
                          {question.votes || 0}
                        </span>
                        <button
                          onClick={() => handleVote(question._id, "down")}
                          className={`p-2 rounded-lg transition-colors duration-200 ${
                            question.hasDownvoted
                              ? "bg-red-500 text-white"
                              : "bg-[#1e2333] hover:bg-[#252b3d] text-gray-300"
                          }`}
                          disabled={loading}
                        >
                          ▼
                        </button>
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-xl font-medium text-gray-100 hover:text-indigo-300
                                   transition-colors duration-200 cursor-pointer"
                          onClick={() =>
                            (window.location.href = `/questions/${question._id}`)
                          }
                        >
                          {question.title}
                        </h3>
                        <p className="mt-3 text-gray-300 leading-relaxed">
                          {question.body}
                        </p>

                        <div className="flex flex-wrap gap-4 items-center mt-4">
                          <span className="text-indigo-300">
                            {question.answerCount || 0} answers
                          </span>
                          <span className="text-gray-400">
                            {new Date(question.createdAt).toLocaleDateString()}
                          </span>
                          <div className="flex items-center gap-2">
                            {/* <img
                              src={`/api/placeholder/32/32`}
                              alt={question.author?.name}
                              className="w-6 h-6 rounded-full bg-gray-700"
                            /> */}
                            <span className="text-gray-300">
                              {question.author?.name}
                            </span>
                            <span className="text-indigo-300">
                              {question.user?.reputation?.toLocaleString() ||
                                0}{" "}
                              rep
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {question.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 rounded-full bg-indigo-400/10 text-indigo-200 text-sm
                                       hover:bg-indigo-400/20 cursor-pointer transition-all duration-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsAndAnswers;
