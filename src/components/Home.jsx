import React from 'react';
import ImagePhone from '../assets/phone.png';
import '../assets/Home.css'

const HomePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center relative">
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <div className="md:w-1/2">
          <h1 className="text-white text-4xl md:text-6xl text-center mb-6">
            Discover. Connect. Collaborate.
          </h1>
          <p className="text-white text-lg md:text-xl text-center mb-8">
            An ecosystem for Social media Influencers and Brands
          </p>
          <div className="flex flex-col gap-4 ">
            <button className="bg-teal-400 hover:bg-teal-800 text-white font-bold py-1 px-10 rounded">
              I'm an Influencer
            </button>
            <button className="bg-teal-400 hover:bg-teal-800 text-white font-bold py-1 px-10 rounded hover:shadow-md">
              I'm a Brand
            </button>
          </div>
        </div>
        <div className="md:w-1/2 ml-10">
          <img className="max-w-full h-auto" src={ImagePhone} alt="Image" />
        </div>
      </div>
      <div className="wave-animation"></div>
    </div>
  );
};

export default HomePage;
