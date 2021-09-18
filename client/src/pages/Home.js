import React from "react";
import styled from "styled-components";
import { Jumbotron, Button } from "react-bootstrap";
import banner from "../assets/banner.jpg";

const Styles = styled.div`
  .jumbotron {
    text-align: center;
    background-color: transparent;
    max-width: 100%;
    height: auto;
  }
`;

function Home() {
  return (
    <Styles>
      <Jumbotron>
        <img src={banner} className="img-fluid shadow-4" />
        <h1 className="display-3">Fit-Forward</h1>
        <p className="lead">
          Your own personal fitness journal where you can track the foods and
          macronutrients you eat and the calories you burn from various
          activities.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">Sign up</Button>
        </p>
      </Jumbotron>
    </Styles>
  );
}

export default Home;
