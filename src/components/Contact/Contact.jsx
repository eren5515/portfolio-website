import "@/components/Contact/Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {faMapLocationDot} from "@fortawesome/free-solid-svg-icons";

import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


export default function Contact() {
  return (
    <div id="contact" className="contact-div">
      <h1>Feel free to contact me! 👇</h1>

      <div className="github-linkedin">
        <a
          href="https://www.linkedin.com/in/mehmet-eren-kılıç-82a5781ba/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "rgb(49, 48, 48)" }}
          />
        </a>
        <a href="https://github.com/eren5515" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "rgb(49, 48, 48)" }}
          />
        </a>
      </div>
      <div className="mail-location-div">
        <div>
          <FontAwesomeIcon
            icon={faMapLocationDot}
            style={{ color: "#4831d4" }}
          />
          <div>
            
            <h3>Location</h3>
            <h4>Istanbul, Turkey</h4>
          </div>
        </div>

        <div>
        <FontAwesomeIcon icon={faEnvelope} style={{color: "#4831d4",}} />
          <div>
            
            <h3>E-Mail</h3>
            <h4>eren1256@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
