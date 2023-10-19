import Bio from './components/Bio';
import BioTwo from './components/BioTwo';
import Blog from './components/Blog';
import Community from './components/Community';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Partners from './components/Partners';
import Services from './components/Services ';
import Stories from './components/Stories';
import Team from './components/Team';
import "@fontsource/poppins";
import 'animate.css';


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
      <Community />
      <Stories />
      <Contact />
     
      
    </div>
  );
}

export default App;
