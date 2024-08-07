import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  console.log("base -> " + process.env.REACT_APP_BASE_URL_DEVLOPMENT);
  const router = createBrowserRouter(routes);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
