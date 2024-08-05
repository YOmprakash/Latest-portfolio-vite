const About = () => (
  <section id="about" className="flex flex-col items-center justify-center bg-[#E8F0F2] h-screen w-full">
   <h3 className="text-[#4831d4] border-b-2 border-[#4831d4] text-3xl font-extrabold uppercase text-center mb-12">
        About Me
      </h3>
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto py-12 px-4">
     
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <img
          className="w-full max-w-md rounded-lg shadow-lg mb-8 md:mb-0"
          src="https://i.postimg.cc/HnhdnrjK/dc.webp"
          alt="about"
        />
        <div className="flex flex-col text-left max-w-md ">
          <h1 className="text-[#4831d4] text-3xl font-bold mb-4">A Dedicated Developer</h1>
          <p className="text-[#3d155f] text-base font-normal mb-6">
            At NxtWave’s CCBP 4.0 Intensive, I’m currently learning fullstack development with a specialization in 4.0 technologies. In love with the coding challenges and hands-on projects. With Industry’s first ever IRC 4.0, getting ready to take on new challenges in the tech world.
          </p>
          <button className=" text-[#4831d4] border-2 border-[#4831d4] rounded-md py-3 px-6 font-medium transition-all duration-300 hover:bg-custom-blue hover:text-custom-green self-start">
             Resume
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default About;
