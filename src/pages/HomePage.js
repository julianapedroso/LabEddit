import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const ImageResponsive = styled.img`
  width: 50%;
  padding-top: 5rem;

  @media (min-width: 500px) and (max-width: 800px) {
    width: 70%;
  }
  @media (max-width: 499px) {
    width: 90%;
  }
`;

const HomePage = () => {
  return (
    <div align="center">
      <ImageResponsive
        src="https://icons8.com/preloaders/dist/media/hero-preloaders.svg"
        alt="Logo"
      />
      <Typography variant="h5">
        Faça login ou cadastre-se para aproveitar nosso feed :)
      </Typography>
    </div>
  );
};

export default HomePage;
