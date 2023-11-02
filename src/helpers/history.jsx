//History library is om de browser geschiedenis the managen
//createbrowserhistory wordt gebruikt om een history object te maken
//en ervoor te zorgen dat je kan communiceren met de browser's history API

//om te kunnen gebruiken: npm install history
import { createBrowserHistory } from "history";

//source: https://www.permify.co/post/jwt-authentication-in-react/
export const history = createBrowserHistory();

//addition info:
//the history object is crucial for enabling
//client-side navigation in a React application.
//It allows you to change the URL and route users to different views
//within your single-page application without the need for full page reloads.
