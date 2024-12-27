import React from "react";
import { MessageCircle, ThumbsUp, Eye, Clock, User } from "lucide-react";

export const QuestionCard = React.forwardRef(({ question }, ref) => (
  <div
    ref={ref}
    className="bg-[#1a1f2e] rounded-xl border border-gray-700/20 hover:border-indigo-400/30
               transform transition-all duration-200 hover:shadow-lg hover:shadow-indigo-400/5
               overflow-hidden"
  >
    <div className="p-6 border-b border-gray-700/20">
      <div className="flex items-start justify-between">
        <h3
          className="text-xl font-medium text-gray-100 hover:text-indigo-300
                     transition-colors duration-200 cursor-pointer flex-1"
          onClick={() => (window.location.href = `/questions/${question._id}`)}
        >
          {question.title}
        </h3>
        <div className="flex items-center gap-4 ml-4">
          <div className="flex items-center gap-1 text-gray-400">
            <Eye size={16} />
            <span>{question.views || 0}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Clock size={16} />
            <span>{new Date(question.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="p-6">
      <p className="text-gray-300 leading-relaxed line-clamp-3">
        {question.body}
      </p>

      <div className="grid grid-cols-3 gap-4 mt-6 py-4 border-y border-gray-700/20">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-medium text-indigo-300">
            {question.votes || 0}
          </div>
          <div className="text-sm text-gray-400 mt-1">Votes</div>
        </div>
        <div className="flex flex-col items-center border-x border-gray-700/20">
          <div className="text-2xl font-medium text-indigo-300">
            {question.answers || 0}
          </div>
          <div className="text-sm text-gray-400 mt-1">Answers</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-medium text-indigo-300">
            {question.views || 0}
          </div>
          <div className="text-sm text-gray-400 mt-1">Views</div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {question.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1.5 rounded-full bg-indigo-400/10 text-indigo-200 text-sm
                       hover:bg-indigo-400/20 cursor-pointer transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <img
            src={`/api/placeholder/32/32`}
            alt={question.author?.name}
            className="w-8 h-8 rounded-full bg-gray-700"
          />
          <div className="flex flex-col">
            <span className="text-gray-200 text-sm font-medium">
              {question.author?.name}
            </span>
            <span className="text-indigo-300 text-sm">
              {question.author?.reputation?.toLocaleString() || 0} rep
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
));
