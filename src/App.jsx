import React, { lazy, Suspense } from 'react';

import './App.css';


const Home = lazy(() => import('./components/home/home.component'));

const Navigation = lazy(() => import('./components/navigation/navigation.component'));

const About = lazy(() => import('./components/about/about.component'));
const Projects = lazy(() => import('./components/projects/projects.component'));
const Skills = lazy(() => import('./components/skills/skills.component'));
const Contacts = lazy(() => import('./components/contact/contact.component'));
const Footer = lazy(() => import('./components/footer/footer.component'));
const ScrollBtn = lazy(() => import('./components/scroll-up-btn/scroll-up-btn'));




const App = () => (
  <div>
    <Suspense fallback={<div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2rem'
    }}>Loading</div>}>
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
      <ScrollBtn />
    </Suspense>
  </div>
)

export default App