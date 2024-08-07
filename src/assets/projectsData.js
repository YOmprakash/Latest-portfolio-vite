
import house from '../assets/house6.jpeg';
import Rental from '../assets/Rental.png';
import Restaura from '../assets/restaura.png';
import BMI from '../assets/BMI.png';
import Gemini from '../assets/Gemini.png';
import Nxtwave  from '../assets/Nxtwave.png';
import crud     from '../assets/crud.png';
import Instashare  from '../assets/Instashare.png';
import NxtTrendz from  '../assets/NxtTrendz.png';
import Portfolio  from '../assets/Portfolio.png'
import Todo  from '../assets/Todo.png'

const projectsData = [
    {
      id: 1,
      title: 'BMI Calculator',
      img: BMI,
      description: 'The BMI (Body Mass Index) Calculator is a simple tool designed to help individuals determine their body mass index. BMI is a widely used measure to classify underweight, normal weight, overweight, and obesity in adults. It is calculated based on an individuals weight and height and provides a numerical value that falls within specific ranges indicating different weight categories',
      techStack: ['React', 'Tailwind CSS'],
      gitLink: 'https://github.com/YOmprakash/bmi-calculator.git',
      deployLink: 'https://bmi-calculator-woad-one.vercel.app/',
      category: 'frontend',
    },
    {
      id: 2,
      title: 'Restaura',
      img: Restaura,
      description:'Welcome to our restaurants website, a digital showcase of our culinary delights. Built with React.js, Tailwind CSS, and Framer Motion, our website offers a clean and visually pleasing interface. Explore our menu, learn about our mission and expertise, read reviews, and get in touch with us—all in one place.',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      gitLink: 'https://github.com/YOmprakash/restora-website.git',
      deployLink: 'https://restora-website-om.vercel.app/',
      category: 'frontend',
    },
    {
      id: 3,
      title: 'Portfolio',
      img: Portfolio,
      description: 'Welcome to my portfolio! This website is a showcase of my skills, projects, and professional journey. Built with React.js and styled with Tailwind CSS, the portfolio highlights my expertise in frontend development, UI/UX design, and animation using Framer Motion.',
      techStack: ['React.js', 'Tailwind CSS,Framer Motion'],
      gitLink: 'https://github.com/YOmprakash/Latest-portfolio-vite.git',
      deployLink: 'https://latest-portfolio-vite-7brg.vercel.app/',
      category: 'frontend',
    },
    {
      id: 4,
      title: 'Nxtwave Clone',
     img: Nxtwave,
      description: 'I have built a clone of the NxtWave website using React.js and CSS. This project showcases my ability to replicate a professional website and stands out due to its attention to detail and functionality, closely mirroring the original NxtWave website.',
      techStack: ['React','CSS',],
      gitLink: 'https://github.com/YOmprakash/Nxtwave-clone.git',
      deployLink: 'https://omprakash-nxtwave-clone.vercel.app/',
      category: 'frontend',
    },

    {
      id: 5,
      title: 'Rental Website',
      img: Rental,
      description: 'This project is a property rental platform developed using React, Tailwind CSS, and Redux. The platform allows users to browse property listings, manage bookings, and complete the checkout process. The design is responsive, ensuring a seamless user experience on both desktop and mobile devices.',
      techStack: ['React', 'Tailwind CSS', 'Redux'],
      gitLink: 'https://github.com/YOmprakash/-totality-frontend-challenge-.git',
      deployLink: 'https://totality-frontend-challenge-two.vercel.app/',
      category: 'frontend',
    },
    
    
    
    {
      id: 6,
      title: 'Todo Website',
      img: Todo,
      description: 'TThis Basic To-Do List Application is designed to help users manage their daily tasks efficiently. The application is built using React for the frontend and Node.js with Express and MongoDB for the backend. Tailwind CSS is used for styling the frontend, providing a clean and responsive user interface.',
      techStack: ["ReactJS,  Tailwind CSS,  Node.js,  Express,  MongoDB"],
      gitLink: 'https://github.com/YOmprakash/todo-full-stock.git',
      deployLink: 'https://todo-frontend-gold-one.vercel.app/',
      category: 'fullstack',
    },
    
  ];
  
  export default projectsData;
  