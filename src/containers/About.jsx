import React from "react";
import {motion, AnimatePresence} from "framer-motion"  
import { Leaf1, Leaf2, about } from "../assets";


const About = () => {
  return (
    <section
    id="about"
    className="flex items-center justify-center flex-col gap-12 my-12">
    {/* title */}
    <div className="w-full flex items-center justify-center py-24 ">
     <motion.div 
     initial={{opacity : 0, width:0}}
     animate={{opacity : 1, width: 200}}
     exit={{opacity : 0, width:0}}
     transition={{delay:0.4}}
     className="flex items-center justify-around w-52">
      <img src={Leaf1} className="w-6 h-auto object-contain" alt="leaf"/>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from from-primary to-secondary font-bold" >About</p>
      <img src={Leaf2} className="w-6 h-auto object-contain" alt="leaf"/>

     </motion.div>
    </div>
    {/* main content */}
    <div  className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      {/* image  section */}
      <div className="w-full flex items-center justify-center px-8">
        <div className="w-50 lg:w-55 p-[2px] rounded-md bg-gradient-to-br from bg-primary to-secondary relative">
          <img src={about} 
          className="w-40px rounded-md h-70px object-contain" alt="" />
          <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from bg-primary to-secondary rounded-md blur-[5px] -z-10">

          </div>
        </div>
      </div>
      {/* className */}
      <div className="w-full px-8 flex flex-col gap-4 items-center justify-start">
        
        <p className="text-white text-base tracking-wide text-justify block">
        🚀 Aspiring Web Developer 🌐 | Computer Science Graduate
            
            Passionate about crafting intuitive and visually appealing websites, I am a graduate with a knack for front-end technologies. Armed with a solid foundation in HTML, CSS, and JavaScript, I bring a fresh perspective to the dynamic world of web development.
            </p>
           <p className="text-white text-base tracking-wide text-justify block">
           🌱 Key Highlights:
            
            Proficient in front-end technologies, specializing in responsive design.
            Problem solver with a creative approach to troubleshooting.
            Enthusiastic collaborator, ready to contribute to innovative projects.
           </p>
            
            <p className="text-white text-base tracking-wide text-justify block">
            🔍 Projects:
            E-commerce Website: Implemented user authentication and responsive design.<br/>
            Personal Portfolio: Showcasing a collection of projects in a visually engaging manner.
            </p>
            <p className="text-white text-base tracking-wide text-justify block">
            🚀 Next Chapter:
            Actively seeking opportunities to grow as a web developer, collaborate with industry professionals, and contribute to cutting-edge projects. Eager to explore new frameworks and technologies.
            </p>

        
        
      </div>
    </div>
    </section>
  )
};
 
export default About;
