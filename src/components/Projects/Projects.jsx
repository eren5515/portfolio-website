import "@/components/Projects/Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <div id="projects" className="projects-container">
      <h1>My Projects</h1>

      <div className="project-div">
        <img
          src="https://cdn.discordapp.com/attachments/336171716126572548/1200202912345890896/image.png?ex=65c55310&is=65b2de10&hm=31908462e78ca98fb6468cdb1e0010af44b8f6ac6c10074703e9328c1fe177f6&"
          alt=""
        />
        <div className="project-info-div">
          <h2>Social App</h2>
          <p>
            SocialApp is a full-stack social media website with features like
            registering, editing your profile, following people, sharing posts
            with images, chatting and more.
          </p>
          <div className="project-info-tech">
            <h3>ReactJS/NextJS</h3>
            <h3>Tailwind</h3>
            <h3>SCSS</h3>
            <h3>Supabase</h3>
          </div>
          <div className="project-links">
            <a href="https://github.com/eren5515/social-app" target="_blank">
              <div className="flex justify-center items-center">
                <h4>Code</h4>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "rgb(49, 48, 48)" }}
                />
              </div>
            </a>

            <a href="https://social-app-gorcc.vercel.app" target="_blank">
              <div className="flex justify-center items-center">
                <h4>Live Demo</h4>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: "rgb(49, 48, 48)" }}
                />{" "}
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="project-div">
        <div className="project-info-div">
          <h2>Car Rental</h2>
          <p>
            This project is a fully responsive car rental website that allows
            users to rent cars for personal or business use. The website
            provides an easy-to-use interface for searching, comparing, and
            reserving cars from a wide selection of vehicles that vary in make,
            model, size, and price.
          </p>
          <div className="project-info-tech">
            <h3>ReactJS/NextJS</h3>
            <h3>Tailwind</h3>
            <h3>SCSS</h3>
          </div>
          <div className="project-links">
            <a href="https://github.com/eren5515/RentalCar/" target="_blank">
              <div className="flex justify-center items-center">
                <h4>Code</h4>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "rgb(49, 48, 48)" }}
                />
              </div>
            </a>

            <a href="https://rental-car-eren5515.vercel.app" target="_blank">
              <div className="flex justify-center items-center">
                <h4>Live Demo</h4>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: "rgb(49, 48, 48)" }}
                />{" "}
              </div>
            </a>
          </div>
        </div>
        <img
          src="https://cdn.discordapp.com/attachments/336171716126572548/1200202469511286864/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3333363137313731363132363537323534382f313138353639333336333331363437333931382f696d6167652e706e673f65783d36353930383966652669733d36353.png?ex=65c552a7&is=65b2dda7&hm=e38ad9418bc00a880886fb3aa991ea4128db7a9734cd7febfee0ea2d5558ae2b&"
          alt=""
        />
      </div>

      <div className="project-div">
        <img
          src="https://cdn.discordapp.com/attachments/336171716126572548/1200203632310755468/image.png?ex=65c553bc&is=65b2debc&hm=2c02f6a60e8d2522dabe346d98c0d6d7d9a9a7f747503384fe54df55f31474eb&"
          alt=""
        />
        <div className="project-info-div">
          <h2>Calculator</h2>
          <p>This is a simple calculator app built with ReactJS.</p>
          <div className="project-info-tech">
            <h3>ReactJS</h3>
          </div>
          <div className="project-links">
            <a href="https://github.com/eren5515/Calculator" target="_blank">
              <div className="flex justify-center items-center">
                <h4>Code</h4>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "rgb(49, 48, 48)" }}
                />
              </div>
            </a>

            <a href="https://calculator-gilt-pi.vercel.app" target="_blank">
              <div className="flex justify-center items-center">
                <h4>Live Demo</h4>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: "rgb(49, 48, 48)" }}
                />{" "}
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="project-div">
        <div className="project-info-div">
          <h2>Shopping</h2>
          <p>
          This is a simple responsive shopping site built with React. You can filter items by available sizes and add items to the cart.
          </p>
          <div className="project-info-tech">
            <h3>ReactJS</h3>
           
          </div>
          <div className="project-links">
            <a href="https://github.com/eren5515/shoppingSite" target="_blank">
              <div className="flex justify-center items-center">
                <h4>Code</h4>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "rgb(49, 48, 48)" }}
                />
              </div>
            </a>

            <a href="https://shopping-site-azure.vercel.app" target="_blank">
              <div className="flex justify-center items-center">
                <h4>Live Demo</h4>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: "rgb(49, 48, 48)" }}
                />{" "}
              </div>
            </a>
          </div>
        </div>
        <img
          src="https://cdn.discordapp.com/attachments/336171716126572548/1200204505984278559/image.png?ex=65c5548c&is=65b2df8c&hm=aaed2bfc79e397603048658ecbd860583a1a30d8c5e2a36f11b0163447ddcf43&"
          alt=""
        />
      </div>
    </div>
  );
}
