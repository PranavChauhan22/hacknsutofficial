import React from "react";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import Fade from "react-reveal/Fade";
import Modal from "./modal";
import "./Theme.css";
function Theme() {
  const onlyWidth = useWindowWidth();
  return (
    <div className="themes" id="theme">
      <div className="theme__header">
        <div
          className="header_line"
          style={{ width: 50 < onlyWidth / 2 - 200 ? onlyWidth / 2 - 200 : 50 }}
        ></div>
        <div className="theme__head">Themes</div>
        <div
          className="header_line"
          style={{ width: 50 < onlyWidth / 2 - 200 ? onlyWidth / 2 - 200 : 50 }}
        ></div>
      </div>

      <div class="Container">
        <div class="Theme_Item">
          <div class="Theme_Title">EdTech</div>
          <div class="Tooltip">
            Edtech, often refers to the industry that creates educational
            technology. In addition to practical educational experience,
            educational technology is based on theoretical knowledge from
            various disciplines such as communication, education, psychology,
            sociology, artificial intelligence, and computer science. It
            encompasses several domains including learning theory,
            computer-based training, online learning, and m-learning, where
            mobile technologies are used.
          </div>
        </div>

        <div class="Theme_Item">
          <div class="Theme_Title">IOT</div>
          <div class="Tooltip">
            The Internet of Things, or IoT, refers to the billions of physical
            devices around the world that are now connected to the internet, all
            collecting and sharing data. Thanks to the arrival of super-cheap
            computer chips and the ubiquity of wireless networks, it's possible
            to turn anything, from something as small as a pill to something as
            big as an airplane, into a part of the IoT. Connecting up all these
            different objects and adding sensors to them adds a level of digital
            intelligence to devices that would be otherwise dumb, enabling them
            to communicate real-time data without involving a human being. The
            Internet of Things is making the fabric of the world around us more
            smarter and more responsive, merging the digital and physical
            universes.
          </div>
        </div>

        <div class="Theme_Item">
          <div class="Theme_Title">Game Development</div>
          <div class="Tooltip">
            Game development essentially involves the development, creation,
            design and release of video games. In recent times, big investments
            into this industry have led to a steady improvement in the gaming
            experience. With more sophisticated technology like AR and VR being
            used extensively these days, modern day games have done very well.
            However, this is a demanding career. It requires highly skilled
            workers who are experts in software systems, programming, design and
            many more fields since development of a game involves the knowledge
            of countless branches of technology.
          </div>
        </div>

        <div class="Theme_Item">
          <div class="Theme_Title">Blockchain/ FinTech</div>
          <div class="Tooltip Theme_Border">
            Blockchain is a distributed database that is shared among the nodes
            of a computer network. As a database, a blockchain stores
            information electronically in digital format. Blockchains are best
            known for their crucial role in cryptocurrency systems, such as
            Bitcoin, for maintaining a secure and decentralized record of
            transactions. The innovation with a blockchain is that it guarantees
            the fidelity and security of a record of data and generates trust
            without the need for a trusted third party.
          </div>
        </div>

        <div class="Theme_Item">
          <div class="Theme_Title">AR/VR</div>
          <div class="Tooltip">
            Virtual Reality (VR) is a computer-generated environment with scenes
            and objects that appear to be real, making the user feel they are
            immersed in their surroundings. This environment is perceived
            through a device known as a Virtual Reality headset or helmet. VR
            allows us to immerse ourselves in video games as if we were one of
            the characters, learn how to perform heart surgery or improve the
            quality of sports training to maximize performance.
          </div>
        </div>

        <div class="Theme_Item">
          <div class="Theme_Title">Open Innovation</div>
          <div class="Tooltip">
            Open innovation is a term used to promote an information age mindset
            toward innovation that runs counter to the secrecy and silo
            mentality of traditional corporate research labs. Open innovation is
            the part that is the backbone of the Research and Development (R&D)
            team of an organization. With the increase in competition due to the
            wide accessibility of knowledge in almost each and every domain. So
            open innovation is the most important tool required for survival in
            the market.
          </div>
        </div>

        <div class="Theme_Item">
          <div class="Theme_Title">Assistive Technology/ Healthcare</div>
          <div class="Tooltip Theme_Border">
            Assistive technology is a technology used by individuals with
            disabilities in order to perform functions that might otherwise be
            difficult or impossible. Assistive technology can include mobility
            devices such as walkers and wheelchairs, as well as hardware,
            software. A tremendous variety of assistive technology is available
            today, providing the opportunity for nearly all people to access
            information technology (IT). However, an individual's having proper
            assistive technology is no guarantee of having access and
            peripherals that assist people with disabilities in accessing
            computers or other information technologies.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
