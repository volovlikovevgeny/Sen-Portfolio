import React from 'react';

import Navigation from './components/navigation/navigation.component';
import Home from './components/home/home.component';
import About from './components/about/about.component';
import Services from './components/services/services.component';
import Skills from './components/skills/skills.component';
import Contacts from './components/contact/contact.component';
import Footer from './components/footer/footer.component';

import './App.css';

const App = () => (
  <div>
    <Navigation />
    <Home />
    <About />
    <Services />
    <Skills />
    <Contacts />
    <Footer />
  </div>
)

export default App