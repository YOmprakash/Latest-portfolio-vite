import { motion } from "framer-motion";

import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

const Hero = () => (
  <section
    id="hero"
    className="h-screen p-8 flex items-center justify-center bg-custom-green"
  >
    <div className="w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-center mx-auto">
      <div className="order-2 md:order-1 text-center md:text-left md:w-3/4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
          className="text-custom-white text-xl font-semibold mt-4 md:mt-0"
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
          transition={{ duration: 0.5 , delay: 0.4 }} className="text-custom-blue text-5xl my-4 font-extrabold">
          Omprakash Yamavaram
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 , delay: 0.5 }} className="text-custom-white text-lg font-normal">
          I'm a FullStack Developer
        </motion.p>
        <motion.div  initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 , delay: 0.6 }}
        className="flex items-center justify-center gap-4 md:justify-start mt-6">
          <a
            href="https://www.linkedin.com/in/omprakash-yamavaram/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <IconBrandLinkedin className="text-custom-simple-white w-10 h-10 bg-custom-blue p-2 rounded-full transition-transform hover:scale-110  hover:text-custom-lt-green" />
          </a>
          <a
            href="https://github.com/YOmprakash?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub className="text-custom-simple-white w-10 h-10 bg-custom-blue p-2 rounded-full transition-transform hover:scale-110 hover:text-custom-lt-green" />
          </a>
        </motion.div>
      </div>

      <motion.img
      
      initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{  duration: 0.8, delay: 0.3 }}

        className="order-1 md:order-2 mt-10 md:mt-0 w-full max-w-[220px] md:max-w-[300px] rounded-full md:rounded-md bg-custom-white"
        src="https://i.postimg.cc/RFwRPvPb/cropped-image.png"
        alt="Person"
      />
    </div>
  </section>
);

export default Hero;
