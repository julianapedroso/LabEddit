import React from "react";
import ImageErrorPage from "../img/404-error-not-found-page-lost.png";

const ErrorPage = () => {
  return (
    <div align="center">
      <img
        src={ImageErrorPage}
        width="50%"
        alt="Imagem de erro 404 - página não encontrada"
      />
    </div>
  );
};

export default ErrorPage;
