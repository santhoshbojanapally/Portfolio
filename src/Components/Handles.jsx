import Leetcode from "../assets/Leetcode.png";
import github from "../assets/github.png";
import Codingprofile from "./Codingprofile";
const Profiles = [
  {
    name: "Leetcode",
    Link: "https://leetcode.com/u/santhoshbojanapally/",
    img: Leetcode,
    Description: "LeetCode (Knight | 1100+ Problems Solved | Top 6% Globally).",
  },
  //   {
  //     name: "Github",
  //     img: github,
  //     Link: "https://github.com/santhoshbojanapally",
  //     Description:
  //       "MS CS @ ASU | Backend-focused engineer passionate about distributed systems, scalable APIs, and clean architecture.",
  //   },
];

const Handles = () => {
  return (
    <div id="Coding-Profiles">
      <h2 className="section text-4xl font-semibold text-center mt-40">
        Coding Profiles
      </h2>
      <h2 style={{ fontSize: "1rem", opacity: 0.6 }} className="text-center">
        Credentials & Achievements
      </h2>
      <div className="profiles">
        {Profiles.map(({ name, Link, img, Description }) => (
          <Codingprofile
            name={name}
            Link={Link}
            img={img}
            Description={Description}
          />
        ))}
      </div>
    </div>
  );
};

export default Handles;
