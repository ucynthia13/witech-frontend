import Bio from './components/Bio';
import BioTwo from './components/BioTwo';
import Community from './components/Community';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Partners from './components/Partners';
import Services from './components/Services ';
import Team from './components/Team';

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
    </div>
  );
}

export default App;
