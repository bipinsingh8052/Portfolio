/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.services-section {
  text-align: center;
  background: linear-gradient(45deg, #0e0e0e, #121212, #1a1a1a);
  color: white;
  padding: 60px 20px;
  min-height: 100vh;
}

/* Title */
.services-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .highlight {
    color: orange;
  }
  
  /* Grid Layout */
  .services-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1000px;
    margin: auto;
    padding-top: 20px;
  }
  
  /* Flip Card Container */
  .service-card {
    perspective: 1000px;
    width: 100%;
    height: 200px;
    cursor: pointer;
  }
  
  .flip-card {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .flip-card-inner {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 0.6s ease-in-out;
  }
  
  /* Flip on hover */
  .service-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  /* Front & Back Side */
  .flip-card-front,
  .flip-card-back {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 15px rgba(255, 165, 0, 0.2);
    transition: 0.3s;
  }
  
  /* Front Side */
  .flip-card-front {
    background: #1a1a1a;
    color: white;
  }
  
  .service-icon {
    font-size: 32px;
    color: orange;
    margin-bottom: 10px;
  }
  
  /* Back Side */
  .flip-card-back {
    background: orange;
    color: white;
    transform: rotateY(180deg);
    padding: 20px;
    text-align: center;
  }
  
  /* Highlighted Card */
  .highlight-card .flip-card-front {
    background: orange;
    color: white;
  }
  
  .highlight-card .flip-card-back {
    background: #1a1a1a;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .services-container {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  } */
  