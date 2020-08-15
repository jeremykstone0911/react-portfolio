import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import PortfolioCards from "../components/PortfolioCards/PortfolioCards";
import "../assets/css/Portfolio.css";

export default function Portfolio() {
  return (
    <Container id="portfolio-container">
      <Segment raised centered="true" id="">
        <Header size="large" id="portfolio-header">
          Portfolio
        </Header>
        <Header sub>Here is some of my stuff</Header>
        <PortfolioCards />
      </Segment>
    </Container>
  );
}
