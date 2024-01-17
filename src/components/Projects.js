import React from 'react';
import code from '../assets/default.png';
import codeHere from '../assets/CodeHere.png';

const Projects = () => {

  const projects = [{
    name : 'CodeHere',
    description : 'CodeHere Built On Springboot, React and MongoDB',
    image: codeHere,
    demo: 'https://init-codehere.netlify.app',
    code : '/'
  },{
    name : 'AV_Service',
    description : 'AV_Service Built On SpringBoot, React and MySQL',
    image : code,
    demo: '/',
    code : '/'
  },{
    name : 'EazySchool',
    description : 'EazySchool Built On SpringBoot, Thymeleaf, Html,Css,Js and MySql',
    image: code,
    demo: '/',
    code : '/'
  }]
  return (
    <div name='work' className='w-full text-gray-300 bg-[#0a192f]'>
      <div className='w-full mx-auto p-4 flex flex-col justify-center'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 xl:grid-cols-3'>
          {projects.map((value,key)=>(
            <div
              key={key}
              style={{backgroundImage: `url(${value.image})`, backgroundSize:'auto 200px'}}
              className='shadow-lg shadow-[#040c16] rounded-md bg-no-repeat bg-center 
              flex justify-center items-center mx-auto bg-black mb-5 group md:h-[300px] md:w-[350px] h-[250px] w-[300px]'
            >
              {/* Hover Effects */}
            <div className='hidden group-hover:flex justify-center items-center flex-col bg-blue-500 h-full w-full rounded-md'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                {value.name}
              </span>
              <p className='text-enter w-9/12'>{value.description}</p>
              <div className='pt-8 text-center'>
                <a href={value.demo} target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/kmvipin?tab=repositories' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};
export default Projects;