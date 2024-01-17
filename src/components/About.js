import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full bg-[#0a192f] text-gray-300 py-5"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 w-9/12">
          <div className="w-full mb-4 flex justify-center">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-10/12">
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-right text-4xl font-bold">
                <p>
                  Hi. I'm Vipin, nice to meet you. Please take a
                  look around.
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  A software developer with experience in building Responsive
                  and Scalable Web apps. My passion has evolved towards creating dynamic
                  web applications. Currently, I have 1 year of experience and specialize 
                  in technologies like Java, SpringBoot, Spring Data MongoDB, Spring JDBC, 
                  Spring REST, React, MongoDB, and MySQL. My journey began with a focus on Java,
                  SpringBoot, React, and MySQL, allowing me to seamlessly transition between design
                  and development. This diverse skill set empowers me to deliver engaging and efficient
                  solutions in the ever-evolving landscape of web technologies.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
