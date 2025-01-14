// // // import { useState, useEffect } from 'react';
// // // import Cookies from 'js-cookie';
// // // import { Popover } from '@headlessui/react'; // For popover

// // // export default function Navbar() {
// // //   const [token, setToken] = useState(null);
// // //   const [avatarUrl, setAvatarUrl] = useState(''); // You can set this to the user's avatar URL

// // //   useEffect(() => {
// // //     const tokenFromCookie = Cookies.get('token'); // Check if the token exists in cookies
// // //     setToken(tokenFromCookie);
// // //     // If user is authenticated, get avatar URL or any other user data
// // //     if (tokenFromCookie) {
// // //       // Assuming you have an API to fetch user info
// // //       setAvatarUrl('https://github.com/shadcn.png'); // Set avatar URL accordingly
// // //     }
// // //   }, []);

// // //   const handleLogout = () => {
// // //     Cookies.remove('token');
// // //     setToken(null);
// // //     window.location.href = '/login'; // Redirect to login
// // //   };

// // //   const handleLogin = () => {
// // //     window.location.href = '/login'; // Redirect to login
// // //   };

// // //   const handleSignup = () => {
// // //     window.location.href = '/signup'; // Redirect to signup
// // //   };

// // //   const handleProfile = () => {
// // //     window.location.href = '/profile'; // Redirect to profile
// // //   };

// // //   return (
// // //     <nav className="flex justify-between items-center p-4 bg-black text-white shadow-lg">
// // //       <div className="text-3xl font-extrabold ml-10 text-gray-200 hover:text-white transition-all">DevFlow</div>

// // //       <div className="flex items-center space-x-4">
// // //         {token ? (
// // //           <Popover className="relative">
// // //             <Popover.Button className="flex items-center space-x-2">
// // //               <img
// // //                 src={avatarUrl}
// // //                 alt="User Avatar"
// // //                 className="w-10 h-10 rounded-full border-2 border-white"
// // //               />
// // //             </Popover.Button>
// // //             <Popover.Panel className="absolute right-0 w-48 mt-2 bg-gray-800 text-white rounded-lg shadow-lg p-4">
// // //               <div className="space-y-2">
// // //                 <button onClick={handleProfile} className="w-full text-left hover:bg-gray-700 p-2 rounded">
// // //                   My Profile
// // //                 </button>
// // //                 <button onClick={handleLogout} className="w-full text-left text-red-500 hover:bg-gray-700 p-2 rounded">
// // //                   Logout
// // //                 </button>
// // //               </div>
// // //             </Popover.Panel>
// // //           </Popover>
// // //         ) : (
// // //           <div className="flex space-x-4">
// // //             <button
// // //               onClick={handleLogin}
// // //               className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
// // //             >
// // //               Login
// // //             </button>
// // //             <button
// // //               onClick={handleSignup}
// // //               className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
// // //             >
// // //               Signup
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </nav>
// // //   );
// // // }
// // import { useState, useEffect } from 'react';
// // import Cookies from 'js-cookie';
// // import { Popover } from '@headlessui/react';

// // export default function Navbar() {
// //   const [token, setToken] = useState(null);
// //   const [avatarUrl, setAvatarUrl] = useState('');

// //   useEffect(() => {
// //     const tokenFromCookie = Cookies.get('token');
// //     setToken(tokenFromCookie);
// //     if (tokenFromCookie) {
// //       setAvatarUrl('https://github.com/shadcn.png'); // Example avatar URL
// //     }
// //   }, []);

// //   const handleLogout = () => {
// //     Cookies.remove('token');
// //     setToken(null);
// //     window.location.href = '/login';
// //   };

// //   const handleLogin = () => {
// //     window.location.href = '/login';
// //   };

// //   const handleSignup = () => {
// //     window.location.href = '/signup';
// //   };

// //   const handleProfile = () => {
// //     window.location.href = '/profile';
// //   };

// //   return (
// //     <nav className="flex justify-between items-center p-4 bg-black text-white shadow-lg">
// //       <div className="text-3xl font-extrabold ml-10 text-gray-200 hover:text-white transition-all">
// //         DevFlow
// //       </div>

// //       <div className="flex items-center space-x-8">
// //         <a
// //           href="/"
// //           className="text-gray-100 hover:text-purple-500 transition font-extrabold"
// //         >
// //           Home
// //         </a>
// //         <a
// //           href="/questions"
// //           className="text-gray-200 hover:text-purple-500 transition font-extrabold"
// //         >
// //           Questions
// //         </a>
// //         <a
// //           href="/users"
// //           className="text-gray-200 hover:text-purple-500 transition font-extrabold"
// //         >
// //           Users
// //         </a>

// //         {token ? (
// //           <Popover className="relative">
// //             <Popover.Button className="flex items-center space-x-2">
// //               <img
// //                 src={avatarUrl}
// //                 alt="User Avatar"
// //                 className="w-10 h-10 rounded-full border-2 border-white"
// //               />
// //             </Popover.Button>
// //             <Popover.Panel className="absolute right-0 w-48 mt-2 bg-gray-800 text-white rounded-lg shadow-lg p-4">
// //               <div className="space-y-2">
// //                 <button
// //                   onClick={handleProfile}
// //                   className="w-full text-left hover:bg-gray-700 p-2 rounded"
// //                 >
// //                   My Profile
// //                 </button>
// //                 <button
// //                   onClick={handleLogout}
// //                   className="w-full text-left text-red-500 hover:bg-gray-700 p-2 rounded"
// //                 >
// //                   Logout
// //                 </button>
// //               </div>
// //             </Popover.Panel>
// //           </Popover>
// //         ) : (
// //           <div className="flex space-x-4">
// //             <button
// //               onClick={handleLogin}
// //               className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
// //             >
// //               Login
// //             </button>
// //             <button
// //               onClick={handleSignup}
// //               className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
// //             >
// //               Signup
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // }
// import { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';
// import { Popover } from '@headlessui/react';

// export default function Navbar() {
//   const [token, setToken] = useState(null);
//   const [avatarUrl, setAvatarUrl] = useState('');

//   useEffect(() => {
//     const tokenFromCookie = Cookies.get('token');
//     setToken(tokenFromCookie);
//     if (tokenFromCookie) {
//       setAvatarUrl('https://github.com/shadcn.png'); // Example avatar URL
//     }
//   }, []);

//   const handleLogout = () => {
//     Cookies.remove('token');
//     setToken(null);
//     window.location.href = '/login';
//   };

//   const handleLogin = () => {
//     window.location.href = '/login';
//   };

//   const handleSignup = () => {
//     window.location.href = '/signup';
//   };

//   const handleProfile = () => {
//     window.location.href = '/profile';
//   };

//   return (
//     <nav className="flex justify-between items-center p-4 bg-black text-white shadow-md">
//       {/* Logo Section */}
//       <div className="text-3xl font-extrabold ml-10 text-gray-100 hover:text-purple-500 transition-all cursor-pointer">
//         DevFlow
//       </div>

//       {/* Navigation Links */}
//       <div className="flex items-center space-x-8">
//         <a
//           href="/"
//           className="text-gray-200 hover:text-purple-500 transition font-semibold"
//         >
//           Home
//         </a>
//         <a
//           href="/questions"
//           className="text-gray-200 hover:text-purple-500 transition font-semibold"
//         >
//           Questions
//         </a>
//         <a
//           href="/users"
//           className="text-gray-200 hover:text-purple-500 transition font-semibold"
//         >
//           Users
//         </a>

//         {/* User Profile or Auth Buttons */}
//         {token ? (
//           <Popover className="relative">
//             <Popover.Button className="flex items-center space-x-2">
//               <img
//                 src={avatarUrl}
//                 alt="User Avatar"
//                 className="w-10 h-10 rounded-full border-2 border-purple-500 hover:border-white transition"
//               />
//             </Popover.Button>
//             <Popover.Panel className="absolute right-0 w-48 mt-2 bg-gray-900 text-white rounded-lg shadow-lg p-4">
//               <div className="space-y-2">
//                 <button
//                   onClick={handleProfile}
//                   className="w-full text-left hover:bg-gray-800 p-2 rounded"
//                 >
//                   My Profile
//                 </button>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left text-red-500 hover:bg-gray-800 p-2 rounded"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </Popover.Panel>
//           </Popover>
//         ) : (
//           <div className="flex space-x-4">
//             <button
//               onClick={handleLogin}
//               className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 text-gray-200 transition"
//             >
//               Login
//             </button>
//             <button
//               onClick={handleSignup}
//               className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition"
//             >
//               Signup
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Popover } from "@headlessui/react";
import { motion } from "framer-motion";
import { Home, Users, MessageCircle, LogOut, User, Search } from "lucide-react";

export default function Navbar() {
  const [token, setToken] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    const tokenFromCookie = Cookies.get("token");
    setToken(tokenFromCookie);
    if (tokenFromCookie) {
      setAvatarUrl("https://github.com/shadcn.png");
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setToken(null);
    window.location.href = "/";
  };

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/questions", label: "Questions", icon: MessageCircle },
    { href: "/users", label: "Users", icon: Users },
    { href: "https://astonishing-arithmetic-d5066a.netlify.app/", label: "Tech-UI", icon: Search },
  ];

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="text-3xl font-extrabold cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <a href="/">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                DevFlow
              </span>
            </a>
          </motion.div>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </motion.a>
            ))}

            {token ? (
              <Popover className="relative">
                <Popover.Button
                  as={motion.button}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <img
                    src={avatarUrl}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full border-2 border-purple-500 hover:border-pink-500 transition-colors"
                  />
                </Popover.Button>

                <Popover.Panel className="absolute right-0 mt-2 w-48 rounded-xl bg-gray-800 border border-gray-700 shadow-lg p-2">
                  <div className="space-y-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      onClick={() => (window.location.href = "/profile")}
                      className="flex items-center gap-2 w-full p-2 text-left text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                    >
                      <User className="w-4 h-4" />
                      My Profile
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full p-2 text-left text-red-400 hover:text-red-300 hover:bg-gray-700/50 rounded-lg transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </motion.button>
                  </div>
                </Popover.Panel>
              </Popover>
            ) : (
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window.location.href = "/login")}
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Login
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window.location.href = "/signup")}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg transition-all"
                >
                  Sign Up
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
