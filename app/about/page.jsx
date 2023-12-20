import React from 'react'

const Page = () => {
  return (
    <main className="container mx-auto px-8 py-12 shadow-lg">
      <h1 className="text-4xl font-extrabold mb-6 text-indigo-600">
        Attention, Creative Minds and Art Enthusiasts!
      </h1>

      <h2 className="text-2xl font-semibold mb-8">
        The RCCIIT Art Club is thrilled to announce the much-anticipated Animae Art Contest 2023.
      </h2>

      <p className="text-lg">
        <strong className="text-pink-500">Theme:</strong> Unleash the Power of Imagination in the World of Animae
      </p>

      <p className="text-lg mt-4">
        Calling all artists, both budding and seasoned, to bring their wildest imaginings to life through the captivating medium of Animae. This is your chance to showcase your artistic prowess, delve into the realm of fantasy, and let your creativity soar!
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Key Details:</h2>
        <p className="mb-2">
          <strong className="text-pink-500">Contest Deadline:</strong> December 25, 2023
        </p>
        <p className="mb-2">
          <strong className="text-pink-500">Category:</strong> Individual Submissions
        </p>
        <p className="mb-2">
          <strong className="text-pink-500">Submission Guidelines:</strong> Submit your entries through this
          <a href="https://forms.gle/WF9o826QLsfhm9nY6" className="text-indigo-600 hover:underline"> form</a> by the specified deadline. Include your name, contact information, and a brief description of your artwork.
        </p>
      </div>

      <p className="mt-10">
        <strong className="text-pink-500">Get Ready to Dazzle Us with Your Creativity:</strong> Let your imagination run wild, and create art that transcends boundaries. The Animae Art Contest 2023 is not just a competition; it's a celebration of artistic expression and the magic of Animae.
      </p>

      <p className="mt-10">
        For any inquiries, reach out to Soumya Chakraborty of ITA 2nd Year at{' '}
        <a href="mailto:soumyachakraborty198181@gmail.com" className="text-indigo-600 hover:underline">
          soumyachakraborty198181@gmail.com
        </a>
        {' '} or at{' '}
        <a href="tel:+918910927312" className="text-indigo-600 hover:underline">
          +918910927312
        </a>.
      </p>

      <p className="mt-10 text-lg font-semibold">
        We can't wait to witness the magic you'll bring to life!
      </p>

      <p className="mt-10 text-2xl font-bold text-pink-500">
        RCCIIT Art Club
      </p>
    </main>

  );
}

export default Page;