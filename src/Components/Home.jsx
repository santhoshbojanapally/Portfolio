import photo from "../assets/Photo.png";
import "../stylesheets/Home.css";

import Typewriter from "typewriter-effect";
function Home() {
  return (
    <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
      <div className="home" id="Home">
        <img className="santhosh" src={photo} alt="Santhosh.png" />
        <div className="intro font-sans">
          <h3 style={{ width: "100%" }}>Hi, </h3>
          <h3 style={{ width: "100%" }}>
            <Typewriter
              options={{
                strings: [
                  "I'm Santhosh Kumar",
                  "I'm a Web-Developer",
                  "I'm a Programmer",
                  "I'm a Masters Student at ASU",
                  "I'm a Tech Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: "natural",
                cursor: "|",
              }}
            />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
