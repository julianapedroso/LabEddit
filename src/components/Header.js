import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { goToHomePage, goToLoginPage } from "../routes/Coordinators";
import { useHistory } from "react-router-dom";
import RedditIcon from '@material-ui/icons/Reddit';

const Header = ({handleButton, setHandleButton}) => {
  const token = localStorage.getItem("token")
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const handleButtonAction = () => {
    if (token) {
      logout();
      setHandleButton(<AccountCircleIcon style={{ fontSize: 40 }}/>);
      goToLoginPage(history);
    } else {
      goToLoginPage(history);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToHomePage(history)} color="inherit" width="100%">
          <RedditIcon style={{ fontSize: 60 }}/>
        </Button>

        <Button color="inherit" onClick={handleButtonAction} >
          {handleButton}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
