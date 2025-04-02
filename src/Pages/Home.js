import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import WhyProDesign from '../components/WhyProDesign';
import Courses from '../components/Courses';
import Partners from '../components/Partners';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <div>
      <Hero id="hero" />
      <WhyProDesign id="why-prodesign" />
      <Courses id="courses" />
      <Partners id="partners" />
    </div>
  );
};

export default Home;