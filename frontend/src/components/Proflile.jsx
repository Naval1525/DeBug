import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';
import { Calendar, Clock, Award, MessageSquare } from 'lucide-react';
import Navbar from './shared/Navbar';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activityData, setActivityData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [yearStats, setYearStats] = useState({});
  const [availableYears, setAvailableYears] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = Cookies.get('token');
      if (!token) {
        setError('Authentication required');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('https://devflow-1.onrender.com/api/auth/user', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setUser(response.data.user);
        setQuestions(response.data.questions);
        setAnswers(response.data.answers);
        processAllActivityData(response.data.questions, response.data.answers);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const processAllActivityData = (questions, answers) => {
    // Get all activity dates
    const allDates = [
      ...questions.map(q => new Date(q.createdAt)),
      ...answers.map(a => new Date(a.createdAt))
    ];

    // Extract unique years and sort them
    const years = [...new Set(allDates.map(date => date.getFullYear()))].sort();
    setAvailableYears(years);

    // Set initial selected year to most recent
    if (years.length > 0) {
      const mostRecentYear = Math.max(...years);
      setSelectedYear(mostRecentYear);
    }

    // Process statistics for each year
    const yearlyStats = {};
    years.forEach(year => {
      const yearData = processYearData(year, questions, answers);
      yearlyStats[year] = {
        totalActivity: yearData.reduce((sum, day) => sum + day.count, 0),
        questions: questions.filter(q => new Date(q.createdAt).getFullYear() === year).length,
        answers: answers.filter(a => new Date(a.createdAt).getFullYear() === year).length,
        maxDay: Math.max(...yearData.map(day => day.count))
      };
    });

    setYearStats(yearlyStats);
    updateYearData(selectedYear, questions, answers);
  };

  const processYearData = (year, questions, answers) => {
    const activityMap = new Map();

    // Initialize all dates for the year
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dateKey = d.toISOString().split('T')[0].replace(/-/g, '/');
      activityMap.set(dateKey, {
        count: 0,
        questions: 0,
        answers: 0,
        details: []
      });
    }

    // Process questions
    questions
      .filter(q => new Date(q.createdAt).getFullYear() === year)
      .forEach(question => {
        const date = new Date(question.createdAt).toISOString().split('T')[0].replace(/-/g, '/');
        if (activityMap.has(date)) {
          const current = activityMap.get(date);
          current.count += 1;
          current.questions += 1;
          current.details.push({
            type: 'question',
            title: question.title,
            time: new Date(question.createdAt).toLocaleTimeString(),
            tags: question.tags
          });
          activityMap.set(date, current);
        }
      });

    // Process answers
    answers
      .filter(a => new Date(a.createdAt).getFullYear() === year)
      .forEach(answer => {
        const date = new Date(answer.createdAt).toISOString().split('T')[0].replace(/-/g, '/');
        if (activityMap.has(date)) {
          const current = activityMap.get(date);
          current.count += 1;
          current.answers += 1;
          current.details.push({
            type: 'answer',
            excerpt: answer.body.substring(0, 50) + '...',
            time: new Date(answer.createdAt).toLocaleTimeString(),
            status: answer.status
          });
          activityMap.set(date, current);
        }
      });

    return Array.from(activityMap, ([date, data]) => ({
      date,
      count: data.count,
      questions: data.questions,
      answers: data.answers,
      details: data.details
    }));
  };

  const updateYearData = (year, questions, answers) => {
    const yearData = processYearData(year, questions, answers);
    setActivityData(yearData);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    updateYearData(year, questions, answers);
  };

  if (loading) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">{error}</div>;
  if (!user) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">No user data found</div>;

  return (
    <div className="bg-gray-900 shadow-xl">
    <Navbar></Navbar>
    <div className="bg-gray-900 shadow-xl">
      <div className="min-h-screen bg-gray-950 text-white p-8">
        <div className="max-w-7xl mx-auto space-y-8 mt-8">
          {/* Profile Header */}
          <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
            <div className="flex items-center space-x-6">
              <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-3xl font-bold">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-3xl font-bold">{user.username}</h1>
                <p className="text-gray-400">{user.email}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <div className="px-3 py-1 bg-blue-500 rounded-full text-sm">
                    {user.reputation} reputation
                  </div>
                  <div className="text-gray-400 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Joined {new Date(user.dateJoined).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Heat Map Section */}
          <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Activity Overview</h2>
              <div className="flex items-center space-x-4">
                <select
                  value={selectedYear}
                  onChange={(e) => handleYearChange(parseInt(e.target.value))}
                  className="bg-gray-800 text-white rounded-lg px-3 py-1 border border-gray-700"
                >
                  {availableYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Year Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Total Activity</span>
                  <Clock className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold">
                  {yearStats[selectedYear]?.totalActivity || 0}
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Questions</span>
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-blue-500">
                  {yearStats[selectedYear]?.questions || 0}
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Answers</span>
                  <Award className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-purple-500">
                  {yearStats[selectedYear]?.answers || 0}
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Most Active Day</span>
                  <Award className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-green-500">
                  {yearStats[selectedYear]?.maxDay || 0}
                </div>
              </div>
            </div>

            {/* Heat Map */}
            <div className="mt-4 overflow-x-auto">
              <HeatMap
                value={activityData}
                startDate={new Date(selectedYear, 0, 1)}
                endDate={new Date(selectedYear, 11, 31)}
                width={800}
                rectSize={12}
                space={4}
                style={{ color: '#4F46E5' }}
                panelColors={['#1F2937', '#3730A3', '#4F46E5', '#6366F1', '#818CF8']}
                rectProps={{
                  rx: 2
                }}
                weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
                rectRender={(props, data) => {
                  if (!data.count) return <rect {...props} />;
                  return (
                    <Tooltip
                      placement="top"
                      content={
                        <div className="p-2 max-w-xs">
                          <div className="font-bold">
                            {new Date(data.date).toLocaleDateString()}
                          </div>
                          <div className="grid grid-cols-2 gap-2 mt-4">
                            <div className="text-sm">
                              <span className="text-blue-400">Questions:</span> {data.questions}
                            </div>
                            <div className="text-sm">
                              <span className="text-purple-400">Answers:</span> {data.answers}
                            </div>
                          </div>
                          {data.details.length > 0 && (
                            <div className="mt-2 border-t border-gray-700 pt-2">
                              <div className="text-sm font-semibold mb-1">Activity:</div>
                              {data.details.map((detail, i) => (
                                <div key={i} className="text-xs text-gray-300 mb-1">
                                  {detail.time} - {detail.type === 'question' ? '❓' : '✍️'}{' '}
                                  {detail.type === 'question' ? detail.title : detail.excerpt}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      }
                    >
                      <rect {...props} />
                    </Tooltip>
                  );
                }}
              />
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-500">{questions.length}</div>
              <div className="text-gray-400">Questions Asked</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-500">{answers.length}</div>
              <div className="text-gray-400">Answers Given</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-500">
                {answers.filter(a => a.status === 'accepted').length}
              </div>
              <div className="text-gray-400">Accepted Answers</div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Questions */}
            <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
              <h2 className="text-xl font-bold mb-4">Recent Questions</h2>
              <div className="space-y-4">
                {questions.slice(0, 5).map((question) => (
                  <div key={question._id} className="border-b border-gray-800 pb-4">
                    <h3 className="font-semibold text-blue-400">{question.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{question.body.substring(0, 100)}...</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {question.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          {/* Recent Answers */}
          <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
              <h2 className="text-xl font-bold mb-4">Recent Answers</h2>
              <div className="space-y-4">
                {answers.slice(0, 5).map((answer) => (
                  <div key={answer._id} className="border-b border-gray-800 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          answer.status === 'accepted' ? 'bg-green-900 text-green-400' : 'bg-gray-800 text-gray-400'
                        }`}>
                          {answer.status}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {answer.upvotes - answer.downvotes} votes
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">{answer.body.substring(0, 100)}...</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;