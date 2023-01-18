import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope, faEnvelopeSquare
} from "@fortawesome/free-solid-svg-icons";
import "./social.css";

export default function SocialFollow() {
  return (
    <div className="social-container">
    
      <a
        href="https://www.facebook.com/hacknsut"
        className="iconColor facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/_techweek" className="iconColor twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/_techweek/"
        className="iconColor instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/company/techweek-ieeensut/"
        className="iconColor instagram social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="mailto:ieee@nsut.ac.in"
        className="iconColor instagram social"
      >
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
  );
}
