import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FeedPage from "../pages/FeedPage";
import PostsDetailPage from "../pages/PostsDetailPage";
import ErrorPage from "../pages/ErrorPage";

const Routers = ({ setHandleButton }) => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/login">
        <LoginPage setHandleButton={setHandleButton} />
      </Route>

      <Route exact path="/register">
        <RegisterPage setHandleButton={setHandleButton} />
      </Route>

      <Route exact path="/feed">
        <FeedPage />
      </Route>

      <Route exact path="/detail/:id">
        <PostsDetailPage />
      </Route>

      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Routers;
