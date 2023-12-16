import Image from 'next/image';
import banner from 'app/ANIME ART CONTEST POSTER.png';  // Corrected import

const MidSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-5">Explore the World of Art with RCCIIT Art Club</h2>
            <p className="text-lg mb-4">
              🎨 Unlock Your Artistic Potential with RCCIIT Art Club! 🎨

              Are you passionate about expressing your creativity through art? Look no further! RCCIIT Art Club invites you to embark on a journey of self-expression, imagination, and artistic exploration.

              🌟 Why Join RCCIIT Art Club?
              <ul className="list-disc pl-6 mb-4">
                <li>Dive into a vibrant community of fellow artists.</li>
                <li>Explore various art forms, from painting to digital art.</li>
                <li>Connect with like-minded individuals who share your passion.</li>
                <li>Participate in exciting workshops and collaborative projects.</li>
              </ul>
              🚀 Get Ready for:
              <ul className="list-disc pl-6">
                <li>Inspirational Art Sessions</li>
                <li>Creative Challenges</li>
                <li>Artistic Collaborations</li>
                <li>Fun-filled Events</li>
              </ul>
            </p>
            <a href="https://chat.whatsapp.com/BvhCL4hdMZTDWFX1bj01mC" className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
              Join the Club
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={banner}
              alt="RCCIIT Art Club"
              width={600}
              height={400}
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidSection;