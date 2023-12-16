// Mark Navbar as a client component
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
    }
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");

    // Toggle dark-mode and light-mode classes on the root element
    document.documentElement.classList.toggle('dark-mode', !isDarkMode);
    document.documentElement.classList.toggle('light-mode', isDarkMode);
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
    document.documentElement.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between px-4">
      <ul className="flex space-x-4">
        <li className="transition duration-300 hover:text-blue-500">
          <Link href="/">Home</Link>
        </li>
        <li className="transition duration-300 hover:text-blue-500">
          <Link href="/about">About us</Link>
        </li>
        {!user ? null : (
          <li className="transition duration-300 hover:text-blue-500">
            <Link href="/profile">
              <button className="cursor-pointer">Profile</button>
            </Link>
          </li>
        )}
      </ul>

      <div className="flex space-x-4 items-center">
        <div
          onClick={toggleTheme}
          className={`rounded-full px-4 py-2 ${isDarkMode ? 'bg-yellow-500 text-white' : 'bg-blue-500 text-black'} cursor-pointer`}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </div>

        {loading ? null : !user ? (
          <ul className="flex space-x-4">
            <li
              onClick={handleSignIn}
              className="transition duration-300 hover:text-blue-500 cursor-pointer"
            >
              <button className="rounded-full px-4 py-2 bg-blue-500 text-white">
                Login
              </button>
            </li>
            <li
              onClick={handleSignIn}
              className="transition duration-300 hover:text-blue-500 cursor-pointer"
            >
              <button className="rounded-full px-4 py-2 bg-blue-500 text-white">
                Sign up
              </button>
            </li>
          </ul>
        ) : (
          <div className="text-right">
            <p className="text-red-600 mb-2">Welcome, {user.displayName}</p>
            <p
              className="transition duration-300 hover:underline cursor-pointer text-blue-500"
              onClick={handleSignOut}
            >
              <button className="rounded-full px-4 py-2 bg-blue-500 text-white">
                Sign out
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;