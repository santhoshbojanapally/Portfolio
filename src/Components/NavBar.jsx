import "../stylesheets/navbar.css";
import Button from "./Button.jsx";
import ButtonData from "../Data/ButtonData.js";
import { useState } from "react";
import { useEffect, useRef } from "react";

function NavBar() {
  let imageTag = <img src="" alt="Leetcode" />;
  let [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="mynavbar">
      <a class="navbar-brand" href="#">
        Santhosh Kumar Bojanapally
      </a>
      <ul class="nav nav2 nav-pills">
        {ButtonData.map((element) => {
          if (element.id === "6") {
            return (
              <li class="nav-item">
                <a target="_blank" class="nav-link" href={element.link}>
                  <img src={element.label.src} alt={element.label.alt} />
                </a>
              </li>
            );
          } else {
            return (
              <li class="nav-item">
                <Button label={element.label} link={element.link} />
              </li>
            );
          }
        })}
      </ul>
      {isOpen && (
        <div className="backdrop" onClick={() => setIsOpen(false)}></div>
      )}

      <aside ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#About" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#Skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#Projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#Contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
        <div>Made with &hearts; by Santhosh</div>
      </aside>
      <div class="menu-toggle" onClick={() => setIsOpen(true)}>
        &#9776;
      </div>
    </nav>
  );
}

export default NavBar;
