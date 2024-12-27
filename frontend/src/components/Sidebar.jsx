import React from 'react';
import { FilterSection } from './FilterSection';

export const Sidebar = ({ filters, setFilters, availableTags }) => (
  <div className="w-72 border-r border-gray-800/50 p-6 bg-[#161a27]">
    <FilterSection title="Sort By">
      <select
        className="w-full bg-[#1e2333] border border-gray-700/30 rounded-lg px-3 py-2.5
                   text-gray-200 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                   focus:ring-indigo-400/30 transition-all duration-200"
        value={filters.sortBy}
        onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
      >
        <option value="newest">Newest First</option>
        <option value="votes">Most Voted</option>
        <option value="answers">Most Answered</option>
        <option value="trending">Trending</option>
      </select>
    </FilterSection>

    <FilterSection title="Time Period">
      <div className="space-y-2 pl-1">
        {['all', 'today', 'week', 'month'].map(range => (
          <label key={range} className="flex items-center space-x-3 text-gray-300 hover:text-gray-100
                                      cursor-pointer transition-colors duration-150 py-1">
            <input
              type="radio"
              name="dateRange"
              checked={filters.dateRange === range}
              onChange={() => setFilters(prev => ({ ...prev, dateRange: range }))}
              className="text-indigo-400 focus:ring-indigo-400/30 focus:ring-offset-gray-800"
            />
            <span className="capitalize">{range}</span>
          </label>
        ))}
      </div>
    </FilterSection>

    <FilterSection title="Vote Range">
      <div className="flex gap-3">
        <input
          type="number"
          placeholder="Min"
          className="w-1/2 bg-[#1e2333] border border-gray-700/30 rounded-lg px-3 py-2
                     text-gray-200 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                     focus:ring-indigo-400/30 transition-all duration-200"
          value={filters.minVotes}
          onChange={(e) => setFilters(prev => ({ ...prev, minVotes: e.target.value }))}
        />
        <input
          type="number"
          placeholder="Max"
          className="w-1/2 bg-[#1e2333] border border-gray-700/30 rounded-lg px-3 py-2
                     text-gray-200 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                     focus:ring-indigo-400/30 transition-all duration-200"
          value={filters.maxVotes}
          onChange={(e) => setFilters(prev => ({ ...prev, maxVotes: e.target.value }))}
        />
      </div>
    </FilterSection>

    <FilterSection title="Tags">
      <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2
                    scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800/30">
        {availableTags.map(tag => (
          <button
            key={tag}
            className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
              filters.tags.includes(tag)
                ? 'bg-indigo-400/20 text-indigo-200 border border-indigo-400/30'
                : 'bg-[#1e2333] text-gray-300 border border-gray-700/30 hover:bg-[#252b3d] hover:border-gray-600/50'
            }`}
            onClick={() => setFilters(prev => ({
              ...prev,
              tags: prev.tags.includes(tag)
                ? prev.tags.filter(t => t !== tag)
                : [...prev.tags, tag]
            }))}
          >
            {tag}
          </button>
        ))}
      </div>
    </FilterSection>
  </div>
);
