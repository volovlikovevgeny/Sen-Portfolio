import React, { lazy, Suspense } from 'react';

import './App.css';


const Home = lazy(() => import('./components/home/home.component'));

const Navigation = lazy(() => import('./components/navigation/navigation.component'));

const About = lazy(() => import('./components/navigation/navigation.component'));
const Services = lazy(() => import('./components/services/services.component'));
const Skills = lazy(() => import('./components/skills/skills.component'));
const Contacts = lazy(() => import('./components/contact/contact.component'));
const Footer = lazy(() => import('./components/footer/footer.component'));
const ScrollBtn = lazy(() => import('./components/scroll-up-btn/scroll-up-btn'));

const Particles = lazy(() => import('react-particles-js'));



const particleOptions = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}

const App = () => (
  <div>
    <Suspense fallback={<div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem' }}>Loading</div>}>
      <Particles
        params={particleOptions} className='particles' />
      <Navigation />
      <Home />
      <About />
      <Services />
      <Skills />
      <Contacts />
      <Footer />
      <ScrollBtn />
    </Suspense>
  </div>
)

export default App