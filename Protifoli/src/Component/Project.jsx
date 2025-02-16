import React, { useState, useEffect,useRef } from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import "../css/Project.css";

const projects = [
  {
    title: "E-Commerce Website",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhHJgl_nITeOTy-0Nf7K_XPzXyFisGffxRA&s",
    description: "A fully functional e-commerce platform with payment integration.",
    demoLink: "https://github.com/bipinsingh8052",
    githubLink: "https://github.com/bipinsingh8052",
  },
  {
    title: "Employee Mangment system",
    image: "https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2023/11/Employee-Management-System.png",
    description: "Employee Managment system useing backend node.js",
    demoLink: "classy-torrone-0bd9d0.netlify.app",
    githubLink: "https://github.com/bipinsingh8052/Dashboard-in-MongoDB-and-React-",
  },
  {
    title: "Instgram Home Page Clone ",
    image: "https://www.investopedia.com/thmb/osUOX4nP3Hw6mhEIX6IfZhaE8KQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/instagram-1789189_1920-f1e65b23a8694b028bf830ae05b8114e.jpg",
    description: "In this Project i Use database JSON to store a data .  delete comment and so story in that each person.",
    demoLink: "https://instragram-icon.vercel.app/",
    githubLink: "https://github.com/bipinsingh8052/Insta_website",
  },{
    title: "Login And SingUp ",
    image: "https://i.ytimg.com/vi/ROqsYIVCJ5Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCgqUlya94rVUvUdrJGZVFuvxvfIQ",
    description: "In this Project you can first signup and first match your input then login use it localstroge.",
    demoLink: "https://login-and-sign-up-page-murex.vercel.app/r",
    githubLink: "https://github.com/bipinsingh8052/Login_And_SignUp_page_",
  },{
    title: "Libaray Mangement System",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240711121009/Class-diagram-for-Library-Management-System-Design.webp",
    description: "In this Project i Use database JSON to store a data . in this you can Issune Book and Re-issue Book and Submit Book and soo that Student info.",
    demoLink: "https://library-mangement-tawny.vercel.app/",
    githubLink: "https://github.com/bipinsingh8052/library_mangement",
  },{
    title: "Todo App",
    image: "https://i.ytimg.com/vi/G0jO8kUrg-I/maxresdefault.jpg",
    description: "Todo list make by the React-redux/toolkit",
    demoLink: "https://prismatic-pastelito-4fc2ce.netlify.app/",
    githubLink: "https://github.com/bipinsingh8052/Create-ToDo-list-using-Redux-ToolKit",
  },{
    title: "Todo App",
    image: "https://images.ctfassets.net/lpvian6u6i39/GtD3qzHrBIgVZJNIJBlO0/8610e2883df2dec28305841aa1ddd2ae/todo-app.png",
    description: "Todo list make by the Usememo hook and Use Callback hook",
    demoLink: "keen-salmiakki-d02f82.netlify.app",
    githubLink: "https://github.com/bipinsingh8052/Todo-App-in-React",
  },{
    title: "Bipin Store Eco-",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbrUrUWTV74jD009EGoAIsf3iOgtdCeryhw&s",
    description: "You can Shop it ....",
    demoLink: "bipin-store.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/Bipin-Store",
  },{
    title: "Order-booking-R",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2GB93XrHMTVeBYYribr_PGc7fd5y2uu1Lg&s",
    description: "You can Book you Order in Restaurant",
    demoLink: "order-booking-in-restaurant.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/Order_Booking_in_Restaurant-",
  },
  {
    title: "Hotel Booking App",
    image: "https://guruvayoorlive.in/static/img/Hotel-Booking.png",
    description: "You can Book you Hotel and so Hotel details",
    demoLink: "hotel-booking-website-dun.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/Hotel-Booking-Website",
  },{
    title: "Stock Market website",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFWdf5qeFKm3MknPNtkPBGP7y7anXqJo0IQ&s",
    description: "This is single page website in this website we can create by the help of React",
    demoLink: "stock-market-eight-jade.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/Stock_market",
  },{
    title: "Vegetable E-com",
    image: "https://content.jdmagicbox.com/comp/def_content/vegetable-vendors/shutterstock-130707287-vegetable-vendors-3-bils7.jpg",
    description: "this is static website and also responise website also.",
    demoLink: "vegetable-e-commerce-website-multi-page.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/Vegetable-e-commerce-website-multi-page",
  },{
    title: "digital Clock",
    image: "https://velkart.com/cdn/shop/products/112DX-1000x1000.jpg?v=1612173957",
    description: "in this project first is digital clock its by help the HTML, JavaScript",
    demoLink: "https://github.com/bipinsingh8052/digital-clock-and-hide-and-seek-button",
    githubLink: "https://github.com/bipinsingh8052/digital-clock-and-hide-and-seek-button",
  },{
    title: "Car Amination",
    image: "https://media.istockphoto.com/id/1144268988/video/cartoon-isolated-red-car-flat-animation-side-view.jpg?s=640x640&k=20&c=gu_38_jWIo_kcUFXmBCekJbzZAXPP3pZD3JTAvQgaS8=",
    description: "my help of HTML and CSS property only",
    demoLink: "car-animation-lyart.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/Car_Animation",
  },{
    title: "Textutlis App ",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/221/528/datas/original.png",
    description: "you do it all think",
    demoLink: "text-utlis-app.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/Order_Booking_in_Restaurant-",
  },{
    title: "Order-booking-R",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/e3/c6/5a/beautiful-look-of-tabbar.jpg?w=600&h=-1&s=1",
    description: "You can Book you Order in Restaurant",
    demoLink: "order-booking-in-restaurant.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/TextUtlis_App",
  },{
    title: "Drag-Drop",
    image: "https://i.ytimg.com/vi/4AHot187Lj0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBarK28lQXZGtViWPU3wpN_e37Pew",
    description: "Drag- Drop Option",
    demoLink: "drag-and-drop-cyan.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/Drag-and-Drop-",
  },{
    title: "McDonald Website",
    image: "https://b.zmtcdn.com/data/menus/021/2600021/2cecbedfc196e22ffc3be95a4c538327.jpg",
    description: "I create a website Mc Donald only single page this is task",
    demoLink: "mc-donald-website.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/McDonald-website",
  },{
    title: "Calculator App",
    image: "https://help.apple.com/assets/6758C0F05C38883A170CE6F4/6758C0F55C38883A170CE700/en_US/ab0ca8cb557985c7eadf756325f491b5.png",
    description: "Calculator App do it Sum and all",
    demoLink: "https://charming-llama-06295e.netlify.app/",
    githubLink: "https://github.com/bipinsingh8052/Calculator-app",
  },{
    title: "Scholar clone",
    image: "https://img.freepik.com/premium-vector/scholar-student-success-logo-icon-illustration-brand-identity_7109-1054.jpg",
    description: "You can soo all thing as same in scholar",
    demoLink: "scholarwebsite-bipin-singhs-projects-254b2c79.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/Cloning-Scholar-",
  },{
    title: "Fake E-commere",
    image: "https://images.interestingengineering.com/img/iea/9lwjAzlK6E/amazon-hist-header.jpg",
    description: "You can  Order any item",
    demoLink: "fake-e-commerce-app.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/Fake-E-commerce-App",
  },{
    title: "Dice-Game",
    image: "https://particula-tech.com/cdn/shop/articles/Hero-image.jpg?v=1726142022",
    description: "You can play it game",
    demoLink: "dice-game-one-phi.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/Dice-Game",
  },{
    title: "Weather App",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*fbLb3jkm3V_m4Mo5bmYJMg.png",
    description: "You can see and where weather",
    demoLink: "weather-app-omega-lake-82.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/Weather-App",
  },{
    title: "Employe-M-S",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTznEVSGF0VjVgIFCHOacdgWN2Ux9f2tuLQ&s",
    description: "You can Employee-m-s add",
    demoLink: "employmangement.netlify.app",
    githubLink: "https://github.com/bipinsingh8052/Employee-mangment-system",
  },{
    title: "Stone-Papper-Scissors",
    image: "https://user-images.githubusercontent.com/67956852/205457548-322d8f32-5cd6-43ba-a6fe-b4f89c65f709.png",
    description: "You can play game with Computer ",
    demoLink: "https://github.com/bipinsingh8052/Stone-Papper-scissors",
    githubLink: "https://github.com/bipinsingh8052/Stone-Papper-scissors",
  },{
    title: "Quiz App",
    image: "https://i.pinimg.com/736x/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg",
    description: "that is the main work of javascript and html , css",
    demoLink: "https://vercel.com/bipin-singhs-projects-254b2c79/quiz-app",
    githubLink: "https://github.com/bipinsingh8052/Quiz-App",
  },{
    title: "QR- Generater",
    image: "https://www.joydeepdeb.com/images/qr-code.jpg",
    description: "Generater the QR any think using Api",
    demoLink: "qr-generater-pqv9fjc2q-bipin-singhs-projects-254b2c79.vercel.app",
    githubLink: "https://github.com/bipinsingh8052/QR-Generater",
  },{
    title: "NOtes-List-App",
    image: "https://images.sftcdn.net/images/t_app-icon-m/p/9273e4fe-9b29-11e6-8192-00163ec9f5fa/647946053/notes-maker-logo.png",
    description: "You can create your notes and task",
    demoLink: "notebook-app.netlify.app",
    githubLink: "https://github.com/bipinsingh8052/Notes-List-app",
  },{
    title: "OTP Genertor",
    image: "https://cdn.techjockey.com/blog/wp-content/uploads/2022/02/24125046/OTP-Bypass-Generator.jpg",
    description: "Random password Generator",
    demoLink: "https://github.com/bipinsingh8052/Random-Password-generater",
    githubLink: "https://github.com/bipinsingh8052/Random-Password-generater",
  },{
    title: "tac-tic-toc",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6tIrqyz0C3Quc9ohvlqK6DhvTXO2gJKQA&s",
    description: "You can play with Computer",
    demoLink: "https://github.com/bipinsingh8052/tac-tic-toc",
    githubLink: "https://github.com/bipinsingh8052/tac-tic-toc",
  },{
    title: "Currency Converter",
    image: "https://play-lh.googleusercontent.com/TuVhvDxhIz4sKtfAfUv5mh2RuTkd1Xa8hEQXlFGS95QNs9dVHt1_bFG6HP4qOCZY5W8=w240-h480-rw",
    description: "You can check the value you currency",
    demoLink: "https://github.com/bipinsingh8052/Currency-Converter",
    githubLink: "https://github.com/bipinsingh8052/Currency-Converter",
  }
];

const Project = () => { 
  // const controls = useAnimation();
  // const sectionRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsVisible(entry.isIntersecting);
  //       if (entry.isIntersecting) {
  //         controls.start("visible");
  //       } else {
  //         controls.start("hidden");
  //       }
  //     },
  //     { threshold: 0.2 }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, [controls]);

  return (
   
      <section id="project-section" className="project-section">
      <h2 className="text-center mb-4">
        My <span className="highlight">Projects</span>
      </h2>

      <div className="container_-fluid">
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="project-card ">
                <div className="project-card-inner">
                  {/* Front Side */}
                  <div className="project-card-front">
                    <img src={project.image} alt={project.title} className="img-fluid" />
                    <h4>{project.title}</h4>
                  </div>
                  {/* Back Side */}
                  <div className="project-card-back">
                    <p>{project.description}</p>
                    <div className="button-group">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-warning me-2">
                        Live Demo
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
  
};

export default Project;



// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/Project.css";

// const projects = Array.from({ length: 100 }, (_, index) => ({
//   title: `Project ${index + 1}`,
//   image: "https://via.placeholder.com/300",
//   description: `This is project ${index + 1} description.`,
//   demoLink: "#",
//   githubLink: "#",
// }));

// const Project = () => {
//   return (
//     <section id="project-section" className="project-section">
//       <h2 className="text-center mb-4">
//         My <span className="highlight">Projects</span>
//       </h2>

//       <div className="container_-fluid">
//         <div className="row">
//           {projects.map((project, index) => (
//             <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
//               <div className="project-card">
//                 <div className="project-card-inner">
//                   {/* Front Side */}
//                   <div className="project-card-front">
//                     <img src={project.image} alt={project.title} className="img-fluid" />
//                     <h4>{project.title}</h4>
//                   </div>
//                   {/* Back Side */}
//                   <div className="project-card-back">
//                     <p>{project.description}</p>
//                     <div className="button-group">
//                       <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-warning me-2">
//                         Go To
//                       </a>
//                       <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
//                         GitHub
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;
