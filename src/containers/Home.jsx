import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";
import coding from '../assets/img/coding.gif'



const Home = () => {
  return (
    <section 
    id="home" 
    className="flex items-center justify-center flex-col gap-3 relative">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center ml-3">
      {/* content section */}
       <div className="w-full h-full flex flex-col items-center lg:items-start text-center justify-center gap-4">
        <h2 className="text-3xl lg:text-4xl text-texlight">
          Hello, It's me...
          <span className="block tracking-wider text-4xl lg:text-6xl mt-0 text-white ">
            Gunjan Sontakke
          </span>
        </h2>
        {/*typewriter  */}
         <h2 className="text-5xl lg:text-4xl text-texlight mt-0 m-3"> {"  "}And I'm {" "}
         <HeroTypeWritter 
         speed={100}
         words={["a Coder..", "an  Web Wizard..","a Developer.."]}/>
         </h2> 
         <p className="text-base text-texlight mt-0 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere! Eveniet officiis a explicabo esse temporibus deserunt obcaecati aperiam asperna
          </p>
          {/* social media links  */}
          <div className="flex items-center justify-center gap-10 mt-2">
            <AnimatePresence>
              {Socials && Socials.map((item, index) => (
               <HomeSocialLinks key={index} data={item} index={index}/>
              ))}
            </AnimatePresence>
          </div>
          {/* hire me */}
          <a href="#"
          style={{boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)"}}
          className="mt-2 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95
          group hover:border-primary">
            <p className="text-texlight group:hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">Hire Me</p>
          </a>
       </div>
      {/* image  */}
       <div className="w-full h-full flex items-start justify-center lg:item-center">
        <motion.img 
        initial = {{ y : 0}}
        animate = {{ y : [-10, 10, -10]}}
        transition={{
          repeat : Infinity,
          duration : 2,
          ease: "linear"
        }}
        src={coding} className="h-60 w-30 mt-6"  />
       </div>
    </div>
  </section>
  );
};

export default Home;
