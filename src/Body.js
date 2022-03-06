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

function Body() {
  return (
    <div>
      <Navbar/>
     <Home/>
     <About/>
     <Theme/>
     <Sponsor/>
     <Timeline/>
     <Gallery/>
     <Team/>
     <Faqs/>
     <Footer/>
    </div>
  );
}

export default Body;
