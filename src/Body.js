import Home from "./components/home/Home";
import "./Style.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Theme from "./components/themes/Theme";
import Team from "./components/team/Team";
import Sponsor from "./components/sponsors/Sponsor";
import Footer from "./components/footer/footer";
import Gallery from "./components/gallery/Gallery";
import Timeline from "./components/timeline/Timeline";
import Faqs from "./components/faqs/Faqs";
import CurrentSponsor from "./components/currentSponsers/currentSponsor";
import Loading from "./components/loading/Loading";
import react, { useState, useEffect } from "react";
import AboutIeee from "./components/about/aboutIeee";
function Body() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <AboutIeee />
          <Theme />
          <CurrentSponsor />
          <Sponsor />
          <Timeline />
          <Gallery />
          <Team />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Body;
