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
        <p className="text-2xl mb-4 text-white-600">
            Hey <span className="text-red-500 font-bold">{user.displayName}</span>! 🎨 Welcome to the excitement of the <span className="italic">Animae Art Contest 2023</span>! 🚀 Your registration is confirmed, and we're thrilled to have you on board.

Get ready to dive into a world of creativity and imagination. 🌟 As a contestant, you have the power to bring your unique vision to life. Whether it's vibrant characters, mesmerizing scenes, or innovative concepts, the canvas is yours.

Stay tuned for updates, announcements, and inspiration to fuel your artistic journey. Feel free to explore the contest community, connect with fellow artists, and share your progress. 🤝 Together, let's make this contest a celebration of artistry and talent.

Best of luck, and may your artistic endeavors shine bright in the Animae Art Contest 2023! 🌈✨

        </p>

      ) : (
        <p className="text-lg text-gray-700">
          You must be logged in to view this page - protected route.
        </p>
      )}
    </div>
  );  
};

export default page;
