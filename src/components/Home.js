import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/Header_logo.png';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="w-full bg-[#0a192f] pt-[80px] md:h-screen"
  >
    <div className="mx-auto flex flex-col items-center justify-center h-full md:flex-row">
      <div className="flex flex-col justify-center h-full md:pl-28">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Full Stack Web Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md item-center">
          I have 1 years of experience in web development.
          Currently, I love to work on web application using technologies like
          Spring, React, tailwind and Mongodb.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div className='w-full'>
        <img
          src={me}  
          alt="my profile"
          className="rounded-2xl mx-auto w-4/5 md:max-h-fit md:pr-28"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;