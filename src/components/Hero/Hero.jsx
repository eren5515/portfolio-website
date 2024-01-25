import "@/components/Hero/Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <div id="home" className="hero-div">
      <div className="hero-left">
        <h1>Software Developer.</h1>

        <h2>
          {" "}
          Hello, My name is <span>Mehmet Eren Kılıç</span>, I am a 4th year
          Electronics and Communication Engineering student at{" "}
          <span>Istanbul Technical University</span> who wants to pursue a
          sofware development career from <span>Istanbul, Turkey</span>.
        </h2>
        <div className="github-linkedin">
          <a
            href="https://www.linkedin.com/in/mehmet-eren-kılıç-82a5781ba/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ccf381" }} />
          </a>
          <a href="https://github.com/eren5515" target="_blank">
            <FontAwesomeIcon icon={faGithub} style={{ color: "#ccf381" }} />
          </a>
        </div>

        <div className="tech-div">
          <h3>Skills:</h3>{" "}
          <div className="tech-icons-div">
            <div className="icon-and-h4">
              <img src="https://skillicons.dev/icons?i=html" alt="" />
              <h4>HTML</h4>
            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=css" alt="" />
              <h4>CSS</h4>

            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=js" alt="" />
              <h4>JavaScript</h4>

            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=ts" alt="" />
              <h4>TypeScript</h4>

            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=react" alt="" />
              <h4>ReactJS</h4>

            </div>
            <div>
            <img src="https://skillicons.dev/icons?i=next" alt="" />
            <h4>NextJS</h4>

            </div>
            <div>
            <img src="https://skillicons.dev/icons?i=tailwind" alt="" />
            <h4>Tailwind</h4>

            </div>
            <div>
            <img src="https://skillicons.dev/icons?i=sass" alt="" />
            <h4>Sass</h4>

            </div>
            <div>
            <img src="https://skillicons.dev/icons?i=nodejs" alt="" />
            <h4>NodeJS</h4>

            </div>
            <div>
            <img src="https://skillicons.dev/icons?i=cs" alt="" />
            <h4>C#</h4>

            </div>
            <div>
            <img src="https://skillicons.dev/icons?i=python" alt="" />
            <h4>Python</h4>

            </div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://cdn.discordapp.com/attachments/1051487919258480765/1199865672621109410/image.png?ex=65c418fc&is=65b1a3fc&hm=edd2b350980408315bbe75b6dc4b5da12139bb47951ea2c01e279d02e8df8434&"
          alt=""
        />
        <div className="img-frame-div"></div>
      </div>
    </div>
  );
}
