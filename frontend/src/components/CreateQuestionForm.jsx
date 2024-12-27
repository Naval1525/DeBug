import { useState } from "react";
import { X } from "lucide-react";
import Cookies from "js-cookie";

const CreateQuestionForm = ({ onClose, onQuestionCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    tags: [],
  });
  const [currentTag, setCurrentTag] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const token = Cookies.get("token");

      if (!token) throw new Error("Authentication token is missing.");

      const response = await fetch(
        "https://devflow-1.onrender.com/api/questions/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include", // Include cookies
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(
          data.error || "An unexpected error occurred. Please try again later."
        );
      }

      const data = await response.json();
      onQuestionCreated(data);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addTag = (e) => {
    e.preventDefault();
    const trimmedTag = currentTag.trim();
    if (
      trimmedTag &&
      !formData.tags.some(
        (tag) => tag.toLowerCase() === trimmedTag.toLowerCase()
      )
    ) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, trimmedTag],
      }));
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1f2e] rounded-xl w-full max-w-2xl p-6 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-200"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold text-white mb-6">
          Create New Question
        </h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-200 mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full bg-[#1e2333] border border-gray-700/30 rounded-lg px-4 py-3 text-gray-200
                     placeholder-gray-400 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                     focus:ring-indigo-400/30"
              placeholder="Enter your question title"
              minLength={5}
              required
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Body</label>
            <textarea
              value={formData.body}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, body: e.target.value }))
              }
              className="w-full bg-[#1e2333] border border-gray-700/30 rounded-lg px-4 py-3 text-gray-200
                     placeholder-gray-400 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                     focus:ring-indigo-400/30 min-h-[200px] resize-none"
              placeholder="Describe your question in detail"
              minLength={20}
              required
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Tags</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-indigo-400/10 text-indigo-200 text-sm
                           flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-indigo-200 hover:text-indigo-100"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addTag(e);
                  }
                }}
                className="flex-1 bg-[#1e2333] border border-gray-700/30 rounded-lg px-4 py-3 text-gray-200
                       placeholder-gray-400 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                       focus:ring-indigo-400/30"
                placeholder="Add a tag (press Enter to add)"
                disabled={loading}
              />
              <button
                type="button"
                onClick={addTag}
                disabled={loading}
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600
                         transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add Tag
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:text-gray-100 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || formData.tags.length === 0}
              className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600
                     transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating..." : "Create Question"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateQuestionForm;
