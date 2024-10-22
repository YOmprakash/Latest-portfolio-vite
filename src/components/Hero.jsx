import { motion } from "framer-motion";
import person from '../assets/prakash.png';
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

const Hero = () => (
  <section
    id="hero"
    className="flex items-center justify-center h-screen p-8 bg-custom-green"
  >
    <div className="flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto md:flex-row">
      <div className="order-2 text-center md:order-1 md:text-left md:w-3/4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
          className="mt-4 text-xl font-semibold text-custom-white md:mt-0"
        >
          Hello{" "}
          <img
            src="https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png"
            className="inline w-10"
            alt="wave"
          />
        </motion.h2>
        <motion.h1 initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 , delay: 0.4 }} className="my-4 text-5xl font-extrabold text-custom-blue">
          Omprakash Yamavaram
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 , delay: 0.5 }} className="text-lg font-normal text-custom-white">
          I'm a FullStack Developer
        </motion.p>
        <motion.div  initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 , delay: 0.6 }}
        className="flex items-center justify-center gap-4 mt-6 md:justify-start">
          <motion.a
          initial={{scale:1}}
          whileHover={{scale:1.2}}
            href="https://www.linkedin.com/in/omprakash-yamavaram/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <IconBrandLinkedin className="w-10 h-10 p-2 transition-transform rounded-full text-custom-simple-white bg-custom-blue hover:text-custom-blue hover:bg-custom-white" />
          </motion.a>
          <motion.a
          initial={{scale:1}}
          whileHover={{scale:1.2}}
            href="https://github.com/YOmprakash?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub className="w-10 h-10 p-2 transition-transform rounded-full text-custom-simple-white bg-custom-blue hover:text-custom-blue hover:bg-custom-white" />
          </motion.a>
        </motion.div>
      </div>

      <motion.img
      
      initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{  duration: 0.8, delay: 0.3 }}

        className="order-1 md:order-2 mt-10 md:mt-0 w-full max-w-[220px] md:max-w-[300px]  rounded-full  bg-custom-white"
        src={person}
        alt="Person"
      />
    </div>
  </section>
);

export default Hero;
