import "../stylesheets/About.css";
import Button from "./Button";

function About() {
  return (
    <div className="about section mb-40" id="About">
      <h1 className="font-bold text-4xl">About Me</h1>
      <br />
      <p className="text-md">
        Hi, I’m Santhosh Kumar Bojanapally, and I’m currently pursuing a
        Master’s in Computer Science at Arizona State University. I earned my
        Bachelor’s degree in Computer Science and Engineering from the National
        Institute of Technology Raipur. I have a strong foundation in data
        structures and algorithms, along with hands-on experience in web
        development, including building MERN stack projects. I recently achieved
        the Knight rank on LeetCode (top 5% site-wide, take a look at my
        profile:{" "}
        <a href="https://leetcode.com/u/santhoshbojanapally/" target="_blank">
          <img
            style={{
              fontSize: "20px",
              height: "18px",
              display: "inline-block",
            }}
            src="https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000"
            alt="leetcode"
          />
        </a>
        ).
        <br />
        <br />
        My course work at Arizona State University include : Software project
        process quality management, knowledge representation and reasoning,
        Information assurance and security, Data processing at scale, Mobile
        computing, Engineering block chain applications.
        <br />
        <br />
        <b>
          I’m currently looking for SDE Internships where I can ship meaningful
          features, learn from strong teams, and keep improving the quality and
          scalability of what I build.
        </b>
      </p>
      <button className="cursor-pointer resume">
        <a
          className="btn text-decoration-none text-white"
          target="_blank"
          href="https://drive.google.com/file/d/1AUqhi_oowEdMpniXMB89C8Wv5mnxlGed/view?usp=sharing"
        >
          Download Resume
        </a>
      </button>
    </div>
  );
}

export default About;
