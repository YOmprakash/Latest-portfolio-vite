import { motion } from "framer-motion";

const About = () => (
  <section
    id="about"
    className="flex flex-col items-center justify-center w-full h-full py-12 my-6 bg-custom-white"
  >
    <h3 className="mb-12 text-3xl font-extrabold text-center uppercase border-b-2 text-custom-blue border-custom-blue">
      About Me
    </h3>
    <div className="flex flex-col items-center justify-center max-w-5xl px-6 py-12 mx-auto md:px-4">
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
        <motion.img
        initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-md mb-8 rounded-lg shadow-lg md:mb-0"
          src="https://i.postimg.cc/HnhdnrjK/dc.webp"
          alt="about"
        />
        <div className="flex flex-col max-w-md text-left ">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-4 text-3xl font-bold text-custom-green"
          >
            A Dedicated Developer
          </motion.h1>
          <motion.p 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }} className="mb-6 text-base font-normal text-custom-lt-green">
            At NxtWave’s CCBP 4.0 Intensive, I’m currently learning fullstack
            development with a specialization in 4.0 technologies. In love with
            the coding challenges and hands-on projects. With Industry’s first
            ever IRC 4.0, getting ready to take on new challenges in the tech
            world.
          </motion.p>
          <motion.button initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            onClick={() => window.open('https://drive.google.com/file/d/13NtKjbLkuLf8xEoCoYqrQHrdg39YaN7n/view?usp=sharing', '_blank')}
          className="self-start px-6 py-3 font-medium transition-all duration-300 border-2 rounded-md text-custom-blue border-custom-blue hover:bg-custom-blue hover:text-custom-green">
            Resume
          </motion.button>
        </div>
      </div>
    </div>
  </section>
);

export default About;
