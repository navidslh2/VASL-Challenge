"use client"
import Image from "next/image";
import Typist from "react-typist-component";
import SocialMediaIcons from "../socialMedia/SocialMediaIcons";
import {motion} from 'framer-motion'

const Introduction = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-15  ">
      <motion.div
      initial={{opacity:0 , y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.7, ease:'easeInOut'}}
      viewport={{once:true}}
      >
        <Image
          src={"/images/logo.png"}
          width={250}
          height={250}
          alt="logo"
          className="rounded-full shadow-[0_0_30px_#4a521e] "
        />
      </motion.div>

      <div
        className="text-white h-[100px] text-4xl flex flex-col items-center justify-center gap-2 "
        dir="rtl"
      >
        <Typist typingDelay={100}>
          <div className="font-bold mb-3 bg-linear-to-l from-[#818f30] via-[#7aa596] to-[#80858a] bg-clip-text text-transparent text-shadow">
            نوید صالحی هستم
          </div>
          <div className="bg-amber-100 bg-clip-text text-transparent">
            برنامه نویس وب
          </div>
        </Typist>
      </div>
      <SocialMediaIcons />
    </div>
  );
};

export default Introduction;
