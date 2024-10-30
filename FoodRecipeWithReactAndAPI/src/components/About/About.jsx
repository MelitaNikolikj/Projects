import React from 'react';
import './About.css'; // Import CSS file
import lindsayandbjork from "../../images/couple-cooking-home_23-2148018390.jpg"
import lindsay from "../../images/lindsay.jpg"
import team from "../../images/team.jpg"
import community from "../../images/communitu.jpg"
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="about">
      {/* Header */}
      <div class="header">
        <div class="header-text">
          <h1>WE ARE HERE FOR LOVE</h1>
          <p>Explore your cooking journey with our positive chefs.</p>
        </div>
      </div>

      <section className="about-section welcome">
        <div className="about-content">
          <h2>Welcome to MN Recipes!</h2>
          <p>
            MN Recipes is a recipe site created by Lindsay and Bjork Ostrom. Since 2010, we've
            been publishing simple, tasty recipes and sharing food photography resources.
          </p>
        </div>
        <div className="about-img">
          <img
            src={lindsayandbjork}
            alt="Lindsay and Bjork Ostrom"
          />
        </div>
      </section>
      <section className="about-section story">
        <div className="about-img">
          <img
            src={lindsay}
            alt="About Pinch of Yum"
          />
        </div>
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Lindsay started MN Recipes as a hobby in 2010, and it has since grown into a
            full-time business with millions of readers worldwide. Our goal is to provide you
            with easy-to-follow recipes that are both approachable and delicious.
          </p>
        </div>
      </section>

      <section className="about-section team">
        <div className="about-content">
          <h2>Meet Our Team</h2>
          <p>
            Our team of recipe developers, photographers, and editors is dedicated to creating
            and sharing quality content with you. We're passionate about food and committed to
            helping you become a better cook.
          </p>
        </div>
        <div className="about-img">
          <img
            src={team}
            alt="Pinch of Yum Team"
          />
        </div>
      </section>

      <section className="about-section community">
        <div className="about-img">
          <img
            src={community}
            alt="Pinch of Yum Community"
          />
        </div>
        <div className="about-content">
          <h2>Join Our Community</h2>
          <p>
            We're grateful for our community of readers who inspire us every day. Join us on
            social media and share your cooking adventures with us! Together, let's celebrate
            good food and joyful moments.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;