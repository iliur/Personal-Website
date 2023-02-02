import React from "react";
import "./App.scss";
import grappleImage from './grapple.png';
import portfolioImage from './portfolioImage.png';
import connectShots from './connectShots.png';
import choreMatch from './choreMatch.png';
import hiphip from './hiphip.png';
import spaceShooter from './Spaceship1.png';
import overwatch from './overwatchIcon.png';
import flappybird from './flappybird.jpg';




function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Rui Li</h1>
      </header>
      <main className="main-content">
        <p className="description">Currently a CS/Finance Double Major student at UWaterloo</p>
      </main>
      <section className="about-me-section">
        <div className="about-me">
          
          <h2 className="about-me-title">About Me</h2>
          
          <p className="about-me-content">
            I am an aspiring software developer with a passion for doing all things software related.
            I have a wide background ranging from game dev, web dev, and data analytics
          </p>

          <p className="about-me-content2">
            For more information about me, <a href="#contact-id"> contact me! </a>
          </p>

          <p className="about-me-content3">
            Check out my portfolio below!
          </p>
          
        </div>
      </section>

      
      <section className="portfolio">
        <h2 className="portfolio-title">Portfolio</h2>
        <ul className="portfolio-items">

          <li className="portfolio-item">
            <h3 className="item-title"> <a href="https://github.com/iliur/financial-portfolio-generator/blob/main/Automated%20Financial%20Portfolio%20Generator.ipynb">Financial Portfolio Generator</a> </h3>
            <p className="item-description">
              This program generates a stock portfolio that optimizes overall volatility
            </p>
            <div>
              <img src={portfolioImage} alt="portfolio" width="300" height="200" />
            </div>
          </li>

          <li className="portfolio-item">
            <h3 className="item-title"><a href="https://play.google.com/store/apps/details?id=com.EcxLStudios.GrappleBallkour&pli=1">Grapple Ballkour</a></h3>
            <p className="item-description">
              2D game made with physics deployed onto the Google Playstore
            </p>
            <div>
              <img src={grappleImage} alt="grapple" width="300" height="200" />
            </div>
          </li>

          <li className="portfolio-item">
            <h3 className="item-title"><a href="https://itch.io/jam/gmtk-2021/rate/1085534">Connect the Shots</a></h3>
            <p className="item-description">
              2D desktop app made in 48hrs for the GMTK 2021 Game Jam
            </p>
            <div>
              <img src={connectShots} alt="connecttheshots" width="300" height="200" />
            </div>
          </li>

          <li className="portfolio-item">
            <h3 className="item-title"><a href="https://github.com/iliur/Flappy-Bird-AI">Flappy Bird AI</a></h3>
            <p className="item-description">
              An attempt at making an AI that can play flappybird by itself
            </p>
            <div>
              <img src={flappybird} alt="flappybird" width="300" height="200" />
            </div>
          </li>

          <li className="portfolio-item">
            <h3 className="item-title"><a href="https://github.com/iliur/Space-Shooter">Space Shooter</a></h3>
            <p className="item-description">
              A mobile game of the space shooting genre with joystick controls
            </p>
            <div>
              <img src={spaceShooter} alt="spaceShooter" width="300" height="200" />
            </div>
          </li>

          <li className="portfolio-item">
            <h3 className="item-title"><a href="https://github.com/iliur/TierList">Overwatch 2 Tierlist</a></h3>
            <p className="item-description">
              A frontend React web app where you can create your own tierlist for Overwatch 2
            </p>
            <div>
              <img src={overwatch} alt="overwatch" width="300" height="200" />
            </div>
          </li>

          <li className="portfolio-item">
            <h3 className="item-title"><a href="https://devpost.com/rui-li-student?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">Chore Matcher - Hackathon</a></h3>
            <p className="item-description">
              Web application that allows users to find volunteer opportunities
            </p>
            <div>
              <img src={choreMatch} alt="grapple" width="300" height="200" />
            </div>
          </li>

          <li className="portfolio-item">
            <h3 className="item-title"><a href="https://devpost.com/rui-li-student?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">Hip Hip Zoo-Ray! - Hackathon</a></h3>
            <p className="item-description">
              Web application focused on teaching children mental health early on
            </p>
            <div>
              <img src={hiphip} alt="grapple" width="300" height="200" />
            </div>
          </li>

        </ul>

        <h2>To check out more of my projects, go to my Github!</h2>
      </section>

      <div className = "contact-info" id="contact-id">
      <h3 className = "contact-info-title">Contact Information</h3>
      <h4 className = "contact-info-items">
        <a href="https://github.com/iliur">Github</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://linkedin.com/in/rui1">LinkedIn</a> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        rui.li1@uwaterloo.ca
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        647-835-1688
      </h4>
      
      </div>

      <footer className="footer">
        <p className="copyright">
          Copyright &copy; {new Date().getFullYear()} Rui Li
        </p>
      </footer>
    </div>
  );
}

export default App;
