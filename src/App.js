import Bio from './components/bio/Bio';
import BioTwo from './components/bioTwo/BioTwo';
import Community from './components/community/Community';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';
import Hero from './components/hero/Hero';
import Navbar from './components/nav/Navbar'
import Partners from './components/partners/Partners';
import Services from './components/service/Services ';
import Stories from './components/stories/Stories';
import Team from './components/team/Team';
import 'typeface-poppins'
import 'animate.css';
import './assets/styles/App.css'
import { Route, Routes } from 'react-router-dom';
import Article from './components/article/article';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Bio />
      <BioTwo />
      <Team />
      <Gallery />
      <Stories />
      <Contact />
    </div>

  );
}

export default App;
