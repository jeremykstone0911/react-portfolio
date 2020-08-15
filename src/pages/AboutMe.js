import React from "react";
import Container from "react-bootstrap/Container";
// import Jumbotron from "../components/Jumbotron/index.js";
// import Navbar from "src/components/Navbar/Navbar.js";
// import AboutBlurb from "../components/AboutMe/AboutMe";
import Image from "react-bootstrap/Image";
//import "./src/App.css";

export default function AboutMe() {
  return (
    <Container>
      <h1> About Me </h1>
      {/* <AboutBlurb /> */}
      <Image>src="./src/images/selfie.jpeg" size="medium" id=""</Image>
    </Container>
  );
}
