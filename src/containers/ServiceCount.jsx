import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return <div className="w-full py-6 lg:py-24 mt-24 flex items-center justify-center flex-wrap gap-8">
    <ServiceCard count={"10+"} text={" WEB PROJECT"}/>
    <ServiceCard count={"15+"} text={" ANIMATION PROJECT"}/>
    <ServiceCard count={"10+"} text={" PUBLIC PROJECT"}/>

    </div>;
};

export default ServiceCount;
