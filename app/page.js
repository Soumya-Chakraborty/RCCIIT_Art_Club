import React from 'react';
import Image from 'next/image';

import anime1 from 'app/Anime.jpeg';
import anime2 from 'app/Anime1.jpg';

function Home() {
  return (
    <main className="container mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="md:flex-1 text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-green-600">
          ANIME ART CONTEST 2023
        </h1>
        <div className="leading-loose">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Welcome to the Anime Art Contest 2023!
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Join us as we celebrate the power of creativity and imagination in the world of anime!
          </p>
        </div>
        <div className="text-center md:text-left">
          <a href="https://soumya-chakraborty.github.io/RCCIIT_Art_Club/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Know More
          </a>
          <a href="https://soumya-chakraborty.github.io/RCCIIT_Art_Club/profile" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Register Now
          </a>
        </div>
      </div>
      <div className="md:flex-1 flex justify-center items-center">
        <Image
          src="/_next/static/media/Anime.4136a887.jpeg"
          alt="Anime"
          width={400}
          height={600}
          layout="responsive"
          objectFit="cover"
          className="rounded-md shadow-lg"
        />
      </div>
      <div className="md:flex-1 flex justify-center items-center">
        <Image
          src="/_next/static/media/Anime1.a8d48758.jpg"
          alt="Anime 1"
          width={400}
          height={600}
          layout="responsive"
          objectFit="cover"
          className="rounded-md shadow-lg"
        />
      </div>
    </main>
  );
}

export default Home;