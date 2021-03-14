import React, { useState } from "react";
import "./App.css";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Routers from "./routes/Routers";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function App() {
  const token = localStorage.getItem("token")
  const [handleButton, setHandleButton] = useState(token ? <ExitToAppIcon style={{ fontSize: 40 }}/> : <AccountCircleIcon style={{ fontSize: 40 }}/>);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header handleButton={handleButton} setHandleButton={setHandleButton} />
        <Routers setHandleButton={setHandleButton}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
