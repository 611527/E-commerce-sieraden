import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//history
import { history } from "./helpers/history";

import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Login";

//Redirect to the home page
//history.push("/");

//Routeguard gaan we hier gebruiken door <RouteGuard exact path..../> te gebruiken
//kan je zien als middleware
function CustomRoutes() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default CustomRoutes;
