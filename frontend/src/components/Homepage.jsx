
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./shared/Navbar";

import {
  ArrowRight,
  Star,
  Users,
  Clock,
  Code,
  ChevronRight,
  Search,
  ExternalLink,
} from "lucide-react";
import { Avatar } from "./ui/avatar";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const BackgroundDots = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0) 50%)`,
        }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-purple-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
  const features = [
    {
      title: "Ask Questions",
      description:
        "Post your toughest coding challenges and get answers from fellow developers.",
      icon: "🤔",
      stats: "10K+ questions asked daily",
    },
    {
      title: "Answer Questions",
      description:
        "Share your expertise by answering questions and earn recognition.",
      icon: "✨",
      stats: "5K+ active experts",
    },
    {
      title: "Earn Reputation",
      description:
        "Contribute and build your profile as a top coder in the community.",
      icon: "🏆",
      stats: "500K+ reputation points awarded",
    },
    {
      title: "Find Solutions",
      description:
        "Search through thousands of coding questions and find solutions that work.",
      icon: "🔍",
      stats: "1M+ solutions shared",
    },
  ];

  const trendingTopics = [
    { name: "React", count: "2.5k questions" },
    { name: "TypeScript", count: "1.8k questions" },
    { name: "Python", count: "3.2k questions" },
    { name: "Node.js", count: "2.1k questions" },
    { name: "Docker", count: "1.5k questions" },
    { name: "AWS", count: "2.3k questions" },
  ];

  const questions = {
    recent: [
      {
        title: "How to implement WebSocket authentication in Node.js?",
        votes: 42,
        answers: 8,
        time: "2 hours ago",
        tags: ["Node.js", "WebSocket", "Auth"],
        author: { name: "Sarah Chen", reputation: 15460 },
      },
      {
        title: "Best practices for React Query data caching",
        votes: 38,
        answers: 6,
        time: "3 hours ago",
        tags: ["React", "React-Query", "Performance"],
        author: { name: "Mike Johnson", reputation: 12780 },
      },
      {
        title: "Understanding Docker layer caching for faster builds",
        votes: 56,
        answers: 12,
        time: "4 hours ago",
        tags: ["Docker", "DevOps", "Performance"],
        author: { name: "Alex Kumar", reputation: 23450 },
      },
    ],
    popular: [
      {
        title: "How to handle state management in large React applications?",
        votes: 1242,
        answers: 86,
        time: "2 days ago",
        tags: ["React", "Redux", "State-Management"],
        author: { name: "Lisa Park", reputation: 45670 },
      },
      {
        title: "Understanding async/await in TypeScript",
        votes: 892,
        answers: 45,
        time: "1 day ago",
        tags: ["TypeScript", "Async", "JavaScript"],
        author: { name: "David Wilson", reputation: 34560 },
      },
      {
        title: "Optimizing PostgreSQL queries for large datasets",
        votes: 756,
        answers: 32,
        time: "3 days ago",
        tags: ["PostgreSQL", "Database", "Performance"],
        author: { name: "Maria Garcia", reputation: 28900 },
      },
    ],
  };

  const topUsers = [
    { name: "Sarah Chen", reputation: 154600, answers: 1234, badges: 45 },
    { name: "Mike Johnson", reputation: 127800, answers: 987, badges: 38 },
    { name: "Alex Kumar", reputation: 234500, answers: 2345, badges: 56 },
  ];

  return (
    <div className="">
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        <Navbar></Navbar>
        {/* Hero Section */}
        <motion.header
          className="flex flex-col items-center text-center gap-8 p-12 mt-[-8vh] min-h-screen flex justify-center" // Adjusted padding and margin
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <BackgroundDots />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 pointer-events-none"
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          <motion.h1
            className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            variants={fadeInUp}
          >
            Ask. Answer. Build Together.
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-300 max-w-3xl"
            variants={fadeInUp}
          >
            Your go-to platform for coding questions, community-driven answers,
            and knowledge sharing. Join our community !
          </motion.p>
          <a href="/questions">
          <motion.div className="flex gap-6" variants={fadeInUp}>
            <motion.button
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transform hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ask a Question
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              className="group bg-gray-800 text-white px-8 py-4 rounded-lg border border-purple-500 font-semibold text-lg flex items-center gap-2 hover:bg-gray-700 transform hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Questions
              <Search className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
          </a>

          <motion.div
            className="absolute bottom-20 animate-bounce"
            variants={fadeInUp}
          >
            <ChevronRight className="w-8 h-8 text-purple-500 rotate-90" />
          </motion.div>
        </motion.header>

        {/* Stats Banner */}
        <motion.div
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 py-8"
          initial="initial"
          whileInView="animate"
          variants={staggerChildren}
          viewport={{ once: true }}
        >
          <div className="container mx-auto grid grid-cols-4 gap-8">
            {[
              { label: "Active Users", value: "1M+", icon: Users },
              { label: "Questions Asked", value: "5M+", icon: Code },
              { label: "Questions Answered", value: "4.8M+", icon: Star },
              { label: "Average Response Time", value: "5 mins", icon: Clock },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2"
                variants={fadeInUp}
              >
                <stat.icon className="w-8 h-8 text-purple-400" />
                <span className="text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-gray-400">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.section
          className="container mx-auto px-8 py-24"
          initial="initial"
          whileInView="animate"
          variants={staggerChildren}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            variants={fadeInUp}
          >
            Everything You Need to Grow
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-xl backdrop-blur-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500 transform hover:scale-105 transition-all"
                variants={fadeInUp}
              >
                <span className="text-4xl mb-4">{feature.icon}</span>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <span className="text-purple-400 text-sm">{feature.stats}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Trending Topics */}
        <motion.section
          className="container mx-auto px-8 py-24 bg-gray-900/50"
          initial="initial"
          whileInView="animate"
          variants={staggerChildren}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            variants={fadeInUp}
          >
            Trending Topics
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={staggerChildren}
          >
            {trendingTopics.map((topic, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500 text-center transform hover:scale-105 transition-all cursor-pointer"
                variants={fadeInUp}
              >
                <h3 className="text-white font-semibold mb-2">{topic.name}</h3>
                <span className="text-purple-400 text-sm">{topic.count}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Questions Section */}
        <motion.section
          className="container mx-auto px-8 py-24"
          initial="initial"
          whileInView="animate"
          variants={staggerChildren}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              variants={fadeInUp}
            >
              Featured Questions
            </motion.h2>
            <div className="flex gap-4">
              <button
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "recent"
                    ? "bg-purple-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("recent")}
              >
                Recent
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "popular"
                    ? "bg-purple-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("popular")}
              >
                Popular
              </button>
            </div>
          </div>

          <motion.div className="grid gap-6" variants={staggerChildren}>
            {questions[activeTab].map((question, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transform hover:scale-101 transition-all"
                variants={fadeInUp}
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center gap-2 min-w-[80px]">
                    <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white">
                      ▲
                    </button>
                    <span className="text-xl font-semibold text-white">
                      {question.votes}
                    </span>
                    <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white">
                      ▼
                    </button>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white hover:text-purple-400 transition-colors">
                      {question.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 items-center mt-4">
                      <span className="text-purple-400">
                        {question.answers} answers
                      </span>
                      <span className="text-gray-400">{question.time}</span>
                      <div className="flex items-center gap-2">
                        {/* <img
                          src={`/api/placeholder/32/32`}
                          alt={question.author.name}
                          className="w-6 h-6 rounded-full"
                        /> */}
                        <span className="text-gray-300">
                          {question.author.name}
                        </span>
                        <span className="text-purple-400">
                          {question.author.reputation.toLocaleString()} rep
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      {question.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm hover:bg-purple-500/30 cursor-pointer transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Top Users Section */}
        <motion.section
          className="container mx-auto px-8 py-24 bg-gray-900/50"
          initial="initial"
          whileInView="animate"
          variants={staggerChildren}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            variants={fadeInUp}
          >
            Top Contributors
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topUsers.map((user, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transform hover:scale-105 transition-all"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={Avatar}
                    alt={user.name}
                    className="w-16 h-16 rounded-full border-2 border-purple-500"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {user.name}
                    </h3>
                    <span className="text-purple-400">
                      {user.reputation.toLocaleString()} reputation
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-white">
                      {user.answers}
                    </div>
                    <div className="text-gray-400">Answers</div>
                  </div>
                  <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-white">
                      {user.badges}
                    </div>
                    <div className="text-gray-400">Badges</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="relative overflow-hidden py-24"
          initial="initial"
          whileInView="animate"
          variants={staggerChildren}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
          <div className="container mx-auto px-8 text-center relative z-10">
            <motion.h2
              className="text-5xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
              variants={fadeInUp}
            >
              Join our community of developers, share your knowledge, and grow
              together. Get started for free today!
            </motion.p>
            <motion.div
              className="flex justify-center gap-6"
              variants={fadeInUp}
            >
              <a href="/signup">
              <motion.button
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Account
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              </a>
              <motion.button
                className="group bg-gray-800 text-white px-10 py-4 rounded-lg border border-purple-500 font-semibold text-lg flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ExternalLink className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="bg-gray-900/80 border-t border-gray-800"
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  {["Features", "Pricing", "API", "Documentation"].map(
                    (item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  {["About", "Blog", "Careers", "Press"].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  {["Community", "Help Center", "Support", "Status"].map(
                    (item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  {["Privacy", "Terms", "Security", "Cookies"].map(
                    (item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© 2024 DevFlow. All rights reserved.</p>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default HomePage;
