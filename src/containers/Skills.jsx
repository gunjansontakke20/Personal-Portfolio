import React from "react";
import {AnimatePresence, motion} from 'framer-motion'
import { Leaf1, Leaf2, about } from "../assets";
import { SkillCard } from "../components";


const Skills = () => {
  return <section
  id="skills"
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
    <p className="text-transparent bg-clip-text bg-gradient-to-r from from-primary to-secondary font-bold" >Skills</p>
    <img src={Leaf2} className="w-6 h-auto object-contain" alt="leaf"/>

   </motion.div>
  </div>
  {/* main content */}
  <div  className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
    
     
    {/* className */}
    <div className="w-full px-8 flex flex-col gap-4 items-center justify-start">
    <p className="text-transparent bg-clip-text bg-gradient-to-r from from-primary to-secondary font-bold" >My Skills & Work Experince</p>
      <p className="text-white text-base tracking-wide text-justify block">
      Technical Skills:
                       Programming Languages: Proficient in Python, with exposure to  JavaScript.
                       Web Development: Understanding of HTML, CSS, and front-end frameworks.
                       Data Analysis: Familiarity with data manipulation in Excel and basic data visualization in Python.
                       Database Management: Introduction to SQL and relational database concepts.
                       Version Control: Experience with Git and GitHub for collaborative coding projects.
                       Problem Solving: Strong analytical and logical reasoning skills.
          </p>
         <p className="text-white text-base tracking-wide text-justify block">
         Soft Skills:
               Communication: Clear and concise communication skills, both written and verbal.
               Teamwork: Able to collaborate effectively in team projects, understanding the importance of diverse perspectives.
               Adaptability: Quick learner with the ability to adapt to new technologies and environments.
               Time Management: Efficient at managing time and meeting project deadlines.
         </p>
          
          <p className="text-white text-base tracking-wide text-justify block">
          Experience:
                 Intern, NullClass <br/>
                 Collaborated with senior developers to enhance existing features of the company's application.
             
          </p>
          <p className="text-white text-base tracking-wide text-justify block">
                 Education:
                 Marster of Science in Computer Science
                 K R Pandav, Graduation Year 2024
                 Relevant coursework: Data Structures, Algorithms, Web Development, Database Management.
          </p>

      
      
    </div>
    {/* image  section */}
    <div className="w-full flex flex-col gap-5 items-center justify-center px-8">
      <SkillCard Skill={"HTML 5"} percentage={"95%"} color={"#FF3F3F"} move={true}/>
      <SkillCard Skill={"CSS 3"} percentage={"85%"} color={"#008FFF"}/>
      <SkillCard Skill={"JavaScript"} percentage={"80%"} color={"#FFB900"} move={true}/>
      <SkillCard Skill={"Node Js"} percentage={"75%"} color={"#00FFF3"}/>
      <SkillCard Skill={"React & NextJs"} percentage={"80%"} color={"#FFE400"} move={true}/>
      <SkillCard Skill={"Mongo DB & Firebase"} percentage={"75%"} color={"#14DB00"}/>



    </div>
  </div>
  </section>
};

export default Skills;
