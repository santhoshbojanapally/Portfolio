import Project from "./Project";
import "../stylesheets/Projects.css";
import Wanderlust from "../assets/Wanderlust.png";
import Weather from "../assets/Weather.png";
const projects = [
  {
    idx: 0,
    name: "Wanderlust",
    img: Wanderlust,
    Tech_Stack:
      "Node.js, Express, MongoDB (Mongoose), and EJS that enables users to create, browse, and manage property listings with end-to-end CRUD functionality.",
    Link: "https://wanderlust-ej9a.onrender.com",
    description:
      "Engineered a full-stack booking platform using the MVC Framework. Deployed using render. Implemented user authentication and session management using cookies and flash messages to enhance data security and UX consistency. Integrated JOI-based request schema validation and centralized error middleware, improving reliability and maintainability. Developed a dynamic templating system with EJS-Mate layouts, providing a responsive and clean UI similar to Airbnb’s property browsing experience. Applied Bootstrap styling and responsive design principles, achieving mobile-first compatibility across all devices",
  },
  {
    idx: 1,
    name: "Weather predictor",
    img: Weather,
    Tech_Stack: "HTML, CSS, and JavaScript ",
    Link: "https://tubular-seahorse-77f9a2.netlify.app",
    description:
      "Developed an interactive weather dashboard using HTML, CSS, and JavaScript that dynamically displays real-time weather conditions for any searched city.Integrated OpenWeatherMap API (or equivalent) to fetch live temperature, humidity, and forecast data with efficient asynchronous API calls. Designed a clean, responsive UI with intuitive search functionality and animated weather icons to enhance user experience.",
  },
];

const Projects = () => {
  return (
    <div id="Projects">
      <div className="flex flex-column items-center justify-center">
        <h2 className="section text-4xl font-semibold  text-center mt-40">
          My Projects
        </h2>
        <h1 style={{ fontSize: "1rem", opacity: 0.6 }}>past work</h1>
      </div>
      <div className="mygrid">
        {projects.map(({ idx, name, img, Tech_Stack, Link, description }) => (
          <Project
            name={name}
            img={img}
            Tech_Stack={Tech_Stack}
            Link={Link}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
