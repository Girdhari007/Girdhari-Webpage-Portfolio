import React, { useState, useEffect } from "react";

const IntroductionAndContact = () => {
  const fullName = "Giirdhari Godara";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setDisplayedText((prev) => prev + fullName.charAt(currentIndex));
        currentIndex += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [fullName]);

  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-teal-300 to-teal-500 text-white text-center py-16 px-8"
    >
      <h1 className="text-5xl md:text-8xl font-bold">{displayedText}</h1>
      <p className="mt-4 text-lg md:text-xl font-light">
        A passionate software developer specializing in MERN stack, system design, and problem-solving.
      </p>

      {/* Responsive Contact Me Section */}
      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/girdhari-godara-96763b250/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition w-full sm:w-auto text-center"
        >
          LinkedIn
        </a>
        {/* GitHub Button */}
        <a
          href="https://github.com/Girdhari007"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-gray-900 transition w-full sm:w-auto text-center"
        >
          GitHub
        </a>
        {/* Email Button */}
        <a
          href="girdharigodara007@gmail.com"
          className="bg-green-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition w-full sm:w-auto text-center"
        >
          Email
        </a>
      </div>
    </section>
  );
};

export default IntroductionAndContact;
