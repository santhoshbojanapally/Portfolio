import React from "react";
import asuLogo from "../assets/ASU.png";
import nitrrLogo from "../assets/NITRR.jpeg";
import narayanaLogo from "../assets/narayanaLogo.avif";
import "../stylesheets/Education.css";

// Put your logos in /public/images and use paths like "/images/asu.png"
const EDUCATION = [
  {
    school: "Arizona State University",
    degree: "M.S. in Computer Science",
    location: "Tempe, AZ, United States",
    dates: "Jan 2025 – Present",
    logo: asuLogo,
    highlights: [
      "Coursework: Software Project / Process / Quality Management",
      "Knowledge Representation, Engineering Blockchain Applications",
    ],
    cgpa: "3.8/4.0",
  },
  {
    school: "National Institute of Technology, Raipur",
    degree: "B.Tech in Computer Science & Engineering",
    location: "Raipur, Chhattisgarh, India",
    dates: "Jul 2020 – Jul 2024",
    logo: nitrrLogo,
    highlights: [
      "Core: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks",
      "software engineering, Quantum Computing",
    ],
    cgpa: "3.0/4.0",
  },
  {
    school: "Narayana Junior College",
    degree: "Class XII (MPC)",
    location: "Telangana, India",
    dates: "2018 – 2020",
    logo: narayanaLogo,
    highlights: ["Maths, Physics, Chemistry"],
    cgpa: "95.2%",
  },
];

export default function Education() {
  return (
    <section id="Education" className="eduSection section">
      <div className="eduContainer">
        <h2 className="eduTitle text-center text-4xl">Education</h2>
        <p className="eduSubtitle">
          A quick snapshot of my academic journey and key coursework.
        </p>

        <div className="eduList">
          {EDUCATION.map((item, idx) => (
            <article className="eduCard" key={`${item.school}-${idx}`}>
              <div className="eduLeft">
                <div className="eduLogoWrap" aria-hidden="true">
                  {item.logo ? (
                    <img
                      className="eduLogo"
                      src={item.logo}
                      alt={`${item.school} logo`}
                    />
                  ) : (
                    <div className="eduLogoFallback">{item.school[0]}</div>
                  )}
                </div>
              </div>

              <div className="eduRight">
                <div className="eduTopRow">
                  <div>
                    <h3 className="eduSchool">{item.school}</h3>
                    <div className="eduMeta">
                      <span className="eduDegree">{item.degree}</span>
                      <span className="eduDot">•</span>
                      <span className="eduLocation">{item.location}</span>
                    </div>
                  </div>

                  <div className="eduDates">{item.dates}</div>
                </div>

                {item.highlights?.length ? (
                  <ul className="eduHighlights">
                    {item.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                    <li>Cgpa: {item.cgpa}</li>
                  </ul>
                ) : null}
                <br />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
