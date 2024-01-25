import "@/components/Footer/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="footer-div">
      <h1>Copyright © 2024. All rights are reserved</h1>

      <div className="github-linkedin">
        <a
          href="https://www.linkedin.com/in/mehmet-eren-kılıç-82a5781ba/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "white" }}
          />
        </a>
        <a href="https://github.com/eren5515" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "white" }}
          />
        </a>
      </div>
    </div>
  );
}
