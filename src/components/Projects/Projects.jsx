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
          src="https://github.com/eren5515/asd/blob/main/resim_2024-02-26_153454553.png?raw=true"
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
      <img
          src="https://camo.githubusercontent.com/dae809189fbbe10c0169c2e21701d4ae634fe5d94b32fdaa2145d387d7eb6aa2/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3333363137313731363132363537323534382f313138353639333336333331363437333931382f696d6167652e706e673f65783d36353930383966652669733d363537653134666526686d3d3765353266346661363764616235653433613630643134323863356431333030646266336166626135323436313162356434666166303331643934333237363326"
          alt=""
        />
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
   
      </div>

      <div className="project-div">
      <img
          src="https://github.com/eren5515/asd/blob/main/resim_2024-02-26_152959753.png?raw=true"
          alt=""
        />
        <div className="project-info-div">
          <h2>Crypto Website</h2>
          <p>
            This is a website that allows users to search for information about
            various crypto currencies in real-time. The website is designed to
            provide users with accurate and up-to-date information about the
            price, market cap, trading volume, and other key metrics of
            cryptocurrencies.
          </p>
          <div className="project-info-tech">
            <h3>ReactJS</h3>
            <h3>Tailwind</h3>
            <h3>SCSS</h3>
            <h3>CoinGecko API</h3>

          </div>
          <div className="project-links">
            <a href="https://github.com/eren5515/Crypto-Website" target="_blank">
              <div className="flex justify-center items-center">
                <h4>Code</h4>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "rgb(49, 48, 48)" }}
                />
              </div>
            </a>

            <a href="https://crypto-website-silk.vercel.app/" target="_blank">
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
      <img
          src="https://github.com/eren5515/asd/blob/main/resim_2024-02-26_153312162.png?raw=true"
          alt=""
        />
        <div className="project-info-div">
          <h2>Shopping Site</h2>
          <p>
            This is a simple responsive shopping site built with React. You can
            filter items by available sizes and add items to the cart.
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
      
      </div>
    </div>
  );
}
