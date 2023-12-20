"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";

const page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-4">
      {loading ? (
        <Spinner />
      ) : user ? (
        <div className="text-2xl mb-4 text-gray-600">
          {/*
            Using template literals for better readability and concatenation
            Adding space after 'Hey' for better spacing
          */}
          {`Hey `}
          <span className="text-red-500 font-bold">{user.displayName}</span>!!
          🎨 Welcome to the excitement of the{" "}
          <span className="font-bold">Animae Art Contest 2023</span>! 🚀 Your
          registration is confirmed, and we're thrilled to have you on board.
          {/*
            Adding margin-top for better separation
            Adjusting button styling for consistency
          */}
          <a
            href="https://forms.gle/WF9o826QLsfhm9nY6"
            className="mt-4 inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
          >
            Submit Your Painting
          </a>
        </div>

      ) : (
        <p className="text-lg text-gray-700">
          You must be logged in to view this page - protected route.
        </p>
      )}
    </div>
  );  
};

export default page;
