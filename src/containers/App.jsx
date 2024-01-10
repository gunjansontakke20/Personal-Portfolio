import React from "react";
import {About, Contact, Header, Home, ParticlesContainer, Projects, ServiceCount, Skills} from './'
import { AnimatePresence } from "framer-motion";
import { Socials } from "../utils/helper";
import { HeroTypeWritter, HomeSocialLinks } from "../components";

const App = () => {
  return (
    <div className="w-full xl:w-[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
        {/* Particles container */}
          <ParticlesContainer/>
        {/* header */}
         <Header/>
           
        {/* home container */}
         <Home/>

        {/* services count cards */}
          <ServiceCount/>

         {/* about Container */}
           <About/>
         {/* skills container */}
         <Skills/>

         {/* Project container */}
         <Projects/>

         {/* contact container */}
         <Contact/>

          {/* footer container */}
          <footer/>
          <div className="w-full flex flex-col items-center justify-start mt-24 mb-12">
               <p className="text-3xl tracking-wide text-texlight">Gunjan Sontakke</p>
              <div className="flex items-center justify-center gap-16 mt-16">
              <AnimatePresence>
              {Socials && Socials.map((item, index) => (
               <HomeSocialLinks key={index} data={item} index={index}/>
              ))}
            </AnimatePresence>
              </div>
              <div className="w-full flex flex-col items-center justify-start mt-24 mb-12">
                
              </div>
          </div>
    </div>
  );
};

export default App;
