import { motion } from "framer-motion";

const About = () => (
  <section
    id="about"
    className="flex flex-col items-center justify-center bg-custom-white h-screen w-full my-6"
  >
    <h3 className="text-custom-blue border-b-2 border-custom-blue text-3xl font-extrabold uppercase text-center mb-12">
      About Me
    </h3>
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.img
        initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-md rounded-lg shadow-lg mb-8 md:mb-0"
          src="https://i.postimg.cc/HnhdnrjK/dc.webp"
          alt="about"
        />
        <div className="flex flex-col text-left max-w-md ">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-custom-green text-3xl font-bold mb-4"
          >
            A Dedicated Developer
          </motion.h1>
          <motion.p 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }} className="text-custom-lt-green text-base font-normal mb-6">
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
          className=" text-custom-blue border-2 border-custom-blue rounded-md py-3 px-6 font-medium transition-all duration-300 hover:bg-custom-blue hover:text-custom-green self-start">
            Resume
          </motion.button>
        </div>
      </div>
    </div>
  </section>
);

export default About;
