import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import Cookies from 'js-cookie';
import Navbar from './shared/Navbar';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [profileLoading, setProfileLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    username: '',
    email: '',
    sortBy: 'username',
    sortOrder: 'asc'
  });

  const [searchQuery, setSearchQuery] = useState('');

  const sortOptions = [
    { value: 'username', label: 'Username' },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://devflow-1.onrender.com/api/auth/users');
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const applyFilters = () => {
    let result = [...users];

    // Search query filter for username or email
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(user =>
        user.username?.toLowerCase().includes(query) ||
        user.email?.toLowerCase().includes(query)
      );
    }

    // Username filter
    if (filters.username) {
      result = result.filter(user =>
        user.username?.toLowerCase().includes(filters.username.toLowerCase())
      );
    }

    // Email filter
    if (filters.email) {
      result = result.filter(user =>
        user.email?.toLowerCase().includes(filters.email.toLowerCase())
      );
    }

    // Sorting
    result.sort((a, b) => {
      const aValue = a[filters.sortBy];
      const bValue = b[filters.sortBy];

      if (typeof aValue === 'string') {
        return filters.sortOrder === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
    });

    setFilteredUsers(result);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, searchQuery]);

  const fetchUserProfile = async (userId) => {
    const token = Cookies.get('token');
    if (!token) {
      setError('Authentication token is missing.');
      return;
    }

    setProfileLoading(true);
    try {
      const response = await fetch(`https://devflow-1.onrender.com/api/auth/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch user profile');
      const data = await response.json();
      setSelectedUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setProfileLoading(false);
    }
  };

  const resetFilters = () => {
    setFilters({
      username: '',
      email: '',
      sortBy: 'username',
      sortOrder: 'asc'
    });
    setSearchQuery('');
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto py-6">
        {/* Search and Filter Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">All Users</h1>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              <SlidersHorizontal size={20} />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search users by username or email..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <Card className="mb-6 bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Advanced Filters</CardTitle>
                <button
                  onClick={resetFilters}
                  className="text-sm text-gray-400 hover:text-white flex items-center gap-1"
                >
                  <X size={16} />
                  Reset Filters
                </button>
              </div>
            </CardHeader>
            <CardContent className="text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Username Contains</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 p-2 rounded"
                    value={filters.username}
                    onChange={(e) => setFilters({ ...filters, username: e.target.value })}
                    placeholder="Filter by username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email Contains</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 p-2 rounded"
                    value={filters.email}
                    onChange={(e) => setFilters({ ...filters, email: e.target.value })}
                    placeholder="Filter by email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Sort By</label>
                  <Select
                    defaultValue={filters.sortBy}
                    onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select sort field" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Sort Order</label>
                  <Select
                    defaultValue={filters.sortOrder}
                    onValueChange={(value) => setFilters({ ...filters, sortOrder: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select sort order" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asc">Ascending</SelectItem>
                      <SelectItem value="desc">Descending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* User Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <Popover key={user._id} className="relative">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">{user.username}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{user.email}</p>
                  <Popover.Button
                    className="mt-4 w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
                    onClick={() => fetchUserProfile(user._id)}
                  >
                    View Profile
                  </Popover.Button>
                </CardContent>
              </Card>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 mt-3 w-64 p-4 bg-gray-800 rounded-lg shadow-lg">
                  {profileLoading ? (
                    <div className="text-blue-500">Loading profile...</div>
                  ) : selectedUser ? (
                    <div>
                      <h2 className="text-xl font-bold mb-3">{selectedUser.user.username}</h2>
                      <div className="space-y-2">
                        <p className="text-gray-300">Email: {selectedUser.user.email}</p>
                        <p className="text-gray-300">Reputation: {selectedUser.user.reputation}</p>
                        <p className="text-gray-300">Questions: {selectedUser.questions?.length || 0}</p>
                        <p className="text-gray-300">Answers: {selectedUser.answers?.length || 0}</p>
                        <p className="text-gray-300">
                          Joined:{' '}
                          {selectedUser.user.createdAt
                            ? new Date(selectedUser.user.createdAt).toLocaleDateString()
                            : 'N/A'}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-red-500">No profile data available.</div>
                  )}
                </Popover.Panel>
              </Transition>
            </Popover>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;