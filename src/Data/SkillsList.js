import cpp from "../assets/C++.png";
import js from "../assets/JS.png";
import mysql from "../assets/MySQL.png";
import mongodb from "../assets/MongoDB.png";
import express from "../assets/Express.png";
import react from "../assets/React.png";
import node from "../assets/Node.js.png";
import docker from "../assets/Docker.png";
import html from "../assets/HTML5.png";
import css from "../assets/CSS3.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import postman from "../assets/postman.png";

const Languages = {
  name: "Languages",
  skills: [
    { idx: 1, name: "C++", img: cpp },
    { idx: 2, name: "JS", img: js },
    { idx: 3, name: "HTML", img: html },
    { idx: 4, name: "CSS", img: css },
  ],
};
const Databases = {
  name: "Databases",
  skills: [
    { idx: 5, name: "Mysql", img: mysql },
    { idx: 6, name: "mongoDB", img: mongodb },
  ],
};
const Frameworks = {
  name: "Frameworks",
  skills: [
    { idx: 7, name: "Express.js", img: express },
    { idx: 8, name: "React.js", img: react },
    { idx: 9, name: "node.js", img: node },
  ],
};
const Tools = {
  name: "Tools",
  skills: [
    { idx: 10, name: "docker", img: docker },
    { idx: 11, name: "github", img: github },
    { idx: 12, name: "git", img: git },
    { idx: 13, name: "postman", img: postman },
  ],
};

const obj = { Languages, Frameworks, Databases, Tools };

export default obj;
