import React from "react";

const Skills = () => {
  const skills = [
    "Java",
    "C++",
    "Data Structure & Algorithm",
    "SpringBoot",
    "Spring Data MongoDB",
    "Spring JDBC",
    "Spring REST",
    "React",
    "Mongo DB",
    "MySQL",
    "Linux",
    "Git & GitHub",
    "Jenkins",
    "Chef",
    "Docker",
    "Kubernetes",
  ];
  return (
    <div name="skills" className="w-full bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center ">
            Skills
          </p>
          <p className="py-4 text-2xl">
            I enjoy diving into and learning new things. Here's a list of
            technologies I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
            >
              <p className="my-4"><a href={`https://www.google.com/search?q=${skill}`} target="_blank">{skill}</a></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
