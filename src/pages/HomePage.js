import { Typography } from "@material-ui/core";
import React from "react";

const HomePage = () => {
  return (
    <div align="center">
      <img
        src="https://icons8.com/preloaders/dist/media/hero-preloaders.svg"
        alt="Logo"
        width="50%"
        style={{ paddingTop: 50 }}
      />
      <Typography variant="h5">
        Faça login ou cadastre-se para aproveitar nosso feed :)
      </Typography>
    </div>
  );
};

export default HomePage;
