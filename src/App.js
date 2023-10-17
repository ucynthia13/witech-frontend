import Bio from './components/Bio';
import BioTwo from './components/BioTwo';
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
    </div>
  );
}

export default App;
