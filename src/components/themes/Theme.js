import React from "react";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import Fade from 'react-reveal/Fade';
import Modal from "./modal";
import "./Theme.css";
function Theme() {
  const onlyWidth = useWindowWidth();
  return (
    <div className="themes" id="theme">
      <div className="theme__header">
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
        <div className="theme__head">Themes</div>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
      </div>
      <div className="themes__inner" style={{ paddingTop: "50px" }}>
        <Fade left>
        </Fade>
        <Fade bottom>

        {/* <div className="theme__item">
          Assistive technology
        </div> */}
        {/* </Fade>
        <Fade right>
        <button className="theme__item">Automation</button> */}
{/* <Modal content="hello" title="Automation"/> */}
        </Fade>
      </div>
      {/* <div className="themes__inner">
        <div className="theme__item">EdTech</div>
        <div className="theme__item">IOT</div>
        <div className="theme__item">Blockchain</div>
      </div> */}
      {/* <div className="themes__inner">
        <div className="theme__item">AR/VR</div>
      </div> */}
     {/* <div className="container">
       <main className="grid">
         <articale>
           <div className="text">
             <h3>EdTech</h3>
             <p>Edtech, often refers to the industry that creates educational technology. In addition to practical educational experience, educational technology is based on theoretical knowledge from various disciplines such as communication, education, psychology, sociology, artificial intelligence, and computer science.It encompasses several domains including learning theory, computer-based training, online learning, and m-learning, where mobile technologies are used.</p>
           </div>
         </articale>
         <articale>
           <div className="text">
             <h3>IOT</h3>
             <p>The Internet of Things, or IoT, refers to the billions of physical devices around the world that are now connected to the internet, all collecting and sharing data. Thanks to the arrival of super-cheap computer chips and the ubiquity of wireless networks, it's possible to turn anything, from something as small as a pill to something as big as an airplane, into a part of the IoT. Connecting up all these different objects and adding sensors to them adds a level of digital intelligence to devices that would be otherwise dumb, enabling them to communicate real-time data without involving a human being. The Internet of Things is making the fabric of the world around us more smarter and more responsive, merging the digital and physical universes.</p>
           </div>
         </articale>
         <articale>
           <div className="text">
             <h3>Blockchain/ FinTech</h3>
             <p>A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.
</p>
           </div>
         </articale>
         <articale>
           <div className="text">
             <h3>AR/VR</h3>
             <p>Virtual Reality (VR) is a computer-generated environment with scenes and objects that appear to be real, making the user feel they are immersed in their surroundings. This environment is perceived through a device known as a Virtual Reality headset or helmet. VR allows us to immerse ourselves in video games as if we were one of the characters, learn how to perform heart surgery or improve the quality of sports training to maximize performance.</p>
           </div>
         </articale>
         <articale>
           <div className="text">
             <h3>Open Innovation</h3>
             <p>Open innovation is a term used to promote an information age mindset toward innovation that runs counter to the secrecy and silo mentality of traditional corporate research labs.
Open innovation is the part that is the backbone of the Research and Development (R&D) team of an organization. With the increase in competition due to the wide accessibility of knowledge in almost each and every domain. So open innovation is the most important tool required for survival in the market.
</p>
           </div>
         </articale>
         <articale>
           <div className="text">
             <h3>Assistive Technology/ Healthcare</h3>
             <p>Assistive technology is a technology used by individuals with disabilities in order to perform functions that might otherwise be difficult or impossible. Assistive technology can include mobility devices such as walkers and wheelchairs, as well as hardware, software. A tremendous variety of assistive technology is available today, providing the opportunity for nearly all people to access information technology (IT). However, an individual's having proper assistive technology is no guarantee of having access and peripherals that assist people with disabilities in accessing computers or other information technologies.</p>
           </div>
         </articale>
       </main>
     </div> */}

<div class="container">
            <div class="timeline">
                <div class="timeline-container primary">
                    
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">EdTech</span></h4>
                        <p>Edtech, often refers to the industry that creates educational technology. In addition to practical educational experience, educational technology is based on theoretical knowledge from various disciplines such as communication, education, psychology, sociology, artificial intelligence, and computer science.It encompasses several domains including learning theory, computer-based training, online learning, and m-learning, where mobile technologies are used.
</p>
                       
                    </div>
                </div>
                <div class="timeline-container danger">
                   
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">IOT</span></h4>
                        <p>The Internet of Things, or IoT, refers to the billions of physical devices around the world that are now connected to the internet, all collecting and sharing data. Thanks to the arrival of super-cheap computer chips and the ubiquity of wireless networks, it's possible to turn anything, from something as small as a pill to something as big as an airplane, into a part of the IoT. Connecting up all these different objects and adding sensors to them adds a level of digital intelligence to devices that would be otherwise dumb, enabling them to communicate real-time data without involving a human being. The Internet of Things is making the fabric of the world around us more smarter and more responsive, merging the digital and physical universes.</p>
                        
                    </div>
                </div>
                <div class="timeline-container success">
                    
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">Blockchain/ FinTech</span></h4>
                        <p>A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.
</p>
                        
                    </div>
                </div>
                <div class="timeline-container warning">
                    
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">AR/VR</span></h4>
                        <p>Virtual Reality (VR) is a computer-generated environment with scenes and objects that appear to be real, making the user feel they are immersed in their surroundings. This environment is perceived through a device known as a Virtual Reality headset or helmet. VR allows us to immerse ourselves in video games as if we were one of the characters, learn how to perform heart surgery or improve the quality of sports training to maximize performance.</p>
                        
                    </div>
                </div>
                <div class="timeline-container">
                    
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">Open Innovation</span></h4>
                        <p>Open innovation is a term used to promote an information age mindset toward innovation that runs counter to the secrecy and silo mentality of traditional corporate research labs.
Open innovation is the part that is the backbone of the Research and Development (R&D) team of an organization. With the increase in competition due to the wide accessibility of knowledge in almost each and every domain. So open innovation is the most important tool required for survival in the market.
</p>
                        
                    </div>
                </div>
                <div class="timeline-container info">
                   
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">Assistive Technology/ Healthcare
</span></h4>
                        <p>Assistive technology is a technology used by individuals with disabilities in order to perform functions that might otherwise be difficult or impossible. Assistive technology can include mobility devices such as walkers and wheelchairs, as well as hardware, software. A tremendous variety of assistive technology is available today, providing the opportunity for nearly all people to access information technology (IT). However, an individual's having proper assistive technology is no guarantee of having access and peripherals that assist people with disabilities in accessing computers or other information technologies.
</p>
                       
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Theme;
