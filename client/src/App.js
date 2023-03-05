import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,

} from "react-router-dom";

const App = () => {
    let routes = useRoutes([
        { 	path: "/", element: <Home />},
    ]);
    return routes;
};

const AppWrapper = () => {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
};
  
export default AppWrapper;

export default function app () {
    return (
        <>
            <Router>
                    <div className="container">
                        <Route path="/" element = {<home/>}> </Route>
                    </div>
            </Router>
        </>
    )
}