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

        <div className="profile-section bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold mb-6">
            Welcome, <span className="text-pink-400">{user.displayName}</span>!
          </h1>
          <p className="text-lg mb-8 leading-relaxed">
            🎨 Immerse yourself in the excitement of the{" "}
            <span className="font-bold">Animae Art Contest 2023</span>! Your registration
            is confirmed, and we're thrilled to have you on board.
          </p>
          <a
            href="https://forms.gle/WF9o826QLsfhm9nY6"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out"
          >
            Submit Your Masterpiece
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
