import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

const Hero = () => (
  <section id='hero' className="h-screen p-8 flex items-center justify-center bg-custom-green">
    <div className="w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-center mx-auto">
      <div className="order-2 md:order-1 text-center md:text-left md:w-3/4">
        <h2 className="text-custom-white text-xl font-semibold mt-4 md:mt-0">
          Hello <img src='https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png' className='inline w-10' alt='wave' />
        </h2>
        <h1 className="text-custom-blue text-5xl my-4 font-extrabold">Omprakash Yamavaram</h1>
        <p className="text-custom-white text-lg font-normal">I'm a FullStack Developer</p>
        <div className="flex items-center justify-center gap-4 md:justify-start mt-6">
          <a href='https://www.linkedin.com/in/omprakash-yamavaram/' target="_blank" rel="noopener noreferrer" className="mr-2">
            <IconBrandLinkedin className='text-custom-simple-white w-10 h-10 bg-custom-blue p-2 rounded-full transition-transform hover:scale-110  hover:text-custom-lt-green' />
          </a>
          <a href='https://github.com/YOmprakash?tab=repositories' target="_blank" rel="noopener noreferrer">
            <IconBrandGithub className='text-custom-simple-white w-10 h-10 bg-custom-blue p-2 rounded-full transition-transform hover:scale-110 hover:text-custom-lt-green' />
          </a>
        </div>
      </div>
     
      <img className='order-1 md:order-2 mt-10 md:mt-0 w-full max-w-[220px] md:max-w-[300px] rounded-full md:rounded-md bg-custom-white' src="https://i.postimg.cc/RFwRPvPb/cropped-image.png" alt="Person" />
    </div>
  </section>
);

export default Hero;
