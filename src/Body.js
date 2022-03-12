import Home from './components/home/Home';
import "./Style.css"
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Theme from './components/themes/Theme';
import Team from './components/team/Team';
import Sponsor from './components/sponsors/Sponsor';
import Footer from './components/footer/footer';
import Gallery from './components/gallery/Gallery';
import Timeline from './components/timeline/Timeline';
import Faqs from './components/faqs/Faqs';
import CurrentSponsor from './components/currentSponsers/currentSponsor';

function Body() {
  return (
    <div>
      <Navbar/>
     <Home/>
     <About/>
     <Theme/>
     <CurrentSponsor/>
     <Sponsor/>
     <Timeline/>
     <Gallery/>
     <Team/>
     <Footer/>
    </div>
  );
}

export default Body;
