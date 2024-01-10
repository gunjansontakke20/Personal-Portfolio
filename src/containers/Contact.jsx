import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import {addDoc, collection} from "firebase/firestore"
import {db} from "../config/firebase.config"
import {Alert} from "./";



const Contact = () => {
  const [data, setdata] = useState({
    firstname : "",
    lastname : "",
    email : "",
    message : "",
  });
  const [alert, setAlert] = useState({
    isAlert :false,
    message:"",
    status : null,
  })
  const handelTextChange = (e) => {
    const {name,  value} = e.target;
    // update the state for the corresponding input value
    setdata((prevData) => ({... prevData, [name]:value}));
  };
  const sendMessage = async () => {
    if(data.email === "" || data.email === null){
      // throw an alert
      setAlert({
        isAlert : true, 
        message : "Required field can not be empty",
        status : "warning"});
      setInterval (() => {
        setAlert({
          isAlert : false, 
          message : "", 
          status : null,})
      },4000);
    }else{
      await addDoc(collection(db, "messages"), {...data})
      .then(() => {
        // throw that alert message
        setdata({firstname:"", lastname:"", email:"", message:""})
        setAlert({
          isAlert : true, 
          message : "Thanks for Contacting me",
          status : "success"});
        setInterval (() => {
          setAlert({
            isAlert : false, 
            message : "", 
            status : null,})
        },4000);
      })
      .catch((err) => {
        // throw that alert
        setAlert({
          isAlert : true, 
          message : `Error : ${err.message}`,
          status : "danger",
         });
        setInterval (() => {
          setAlert({
            isAlert : false, 
            message : "", 
            status : null,})
        },4000);
      })
    }
  }
  return (
    <section
    id="Contact"
    className="flex items-center justify-center flex-col gap-12 my-12">
      {/* toast alert notification */}
      <AnimatePresence>
        {alert.isAlert && (
          <Alert status={alert.status} message={alert.message}/>
        )}
      </AnimatePresence>
    {/* title */}
    <div className="w-full flex items-center justify-center py-24 ">
     <motion.div 
     initial={{opacity : 0, width:0}}
     animate={{opacity : 1, width: 200}}
     exit={{opacity : 0, width:0}}
     transition={{delay:0.4}}
     className="flex items-center justify-around w-52">
      <img src={Leaf1} className="w-6 h-auto object-contain" alt="leaf"/>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from from-primary to-secondary font-bold" >Contact me</p>
      <img src={Leaf2} className="w-6 h-auto object-contain" alt="leaf"/>

     </motion.div>
    </div>
    {/* main content */}
    <div  className=" w-full flex flex-col items-center justify-start gap-4 ">
       <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4 ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input type="text" name="firstname" value={data.firstname} onChange={handelTextChange} placeholder="First name" className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary "  />
          <input type="text" name="lastname" value={data.lastname} onChange={handelTextChange} placeholder="Last name" className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary"  />

        </div>
        {/* Email field */}
        <input type="email"  name="email" value={data.email} onChange={handelTextChange}placeholder="Email" className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary"  />
        <textarea name="message"
        value={data.message} onChange={handelTextChange}
        id="" cols="0" rows="10" className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary" placeholder="Message Here" >
          
        </textarea>
        <div className="w-full flex items-center justify-center lg:justify-end">
          <button className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md 
          w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary" onClick={sendMessage}>Send</button>
        </div>
       </div>
    </div>
    </section>
  )
};

export default Contact;
