
import { IconBrandGithub, IconBrandLinkedin, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react";

const Footer = () => (
  <footer className='bg-custom-blue py-8 w-full'>
    <div className="flex flex-col items-center mt-4">
      <div className="flex space-x-4">
        <a href='https://www.linkedin.com/in/omprakash-yamavaram/' target="_blank" rel="noopener noreferrer">
          <IconBrandLinkedin className='text-white bg-blue-700 p-2 rounded-full transition-transform transform hover:scale-110 hover:text-custom-blue hover:bg-custom-green' width={32} height={32} />
        </a>
        <a href='https://github.com/YOmprakash?tab=repositories' target="_blank" rel="noopener noreferrer">
          <IconBrandGithub className='text-white bg-blue-800 p-2 rounded-full transition-transform transform hover:scale-110  hover:text-custom-blue hover:bg-custom-green' width={32} height={32} />
        </a>
        <a href='https://www.youtube.com/channel/UCC7krjBHYyHqFi653A5uW1g' target="_blank" rel="noopener noreferrer">
          <IconBrandYoutube className='text-white bg-red-600 p-2 rounded-full transition-transform transform hover:scale-110  hover:text-custom-blue hover:bg-custom-green' width={32} height={32} />
        </a>
        <a href='https://www.instagram.com/yomprakash63/' target="_blank" rel="noopener noreferrer">
          <IconBrandInstagram className='text-white bg-pink-600 p-2 rounded-full transition-transform transform hover:scale-110  hover:text-custom-blue hover:bg-custom-green' width={32} height={32} />
        </a>
      </div>
      <h3 className='text-custom-white text-center mt-4'>
        Copyright © {new Date().getFullYear()}. Designed by <span className='text-custom-lt-green italic'>Omprakash</span>
      </h3>
    </div>
  </footer>
);

export default Footer;
