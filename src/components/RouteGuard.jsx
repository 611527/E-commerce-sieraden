import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

const RouteGuard = ({ component: Component, ...rest }) => {
  //deze methode kijkt of de localstorage een JWT heeft of niet.
  function hasJWT() {
    //kijken of user jwt token heeft
    return !!Cookies.get("token");
  }

  return (
    //als ie jwt heeft dan naar homepage, en anders weer login scherm
    <Route
      {...rest}
      render={(props) =>
        hasJWT() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};
//source: https://www.permify.co/post/jwt-authentication-in-react/
export default RouteGuard;
