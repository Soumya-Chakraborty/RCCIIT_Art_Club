// Importing React module from react package
import React from 'react';

// Functional component named Heading
const Heading = () => {
  // JSX representing a header with specific styling
  return (
    <header className="bg-blue-800 text-white text-center p-8">
      <h1 className="text-6xl font-extrabold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        RCCIIT Art Club
      </h1>
      <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
        Anime Art Contest 2023
      </h2>
      <p className="text-xl">
        Join the celebration of creativity and imagination in the world of anime!
      </p>
    </header>
  );
};

// Exporting Heading component as the default export
export default Heading;