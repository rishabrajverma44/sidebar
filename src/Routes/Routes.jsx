import Home from "../Home";
import First from "../Components/First";
import Second from "../Components/Second";
import Third from "../Components/Third";
import Fourth from "../Components/Fourth";
import PrivateRoute from "./PrivateRoutes";
import Private from "../Components/Private";
import NotFound from "../Components/prebuiltComponent/NotFound";
import Captcha from "../Components/Captcha";
import Layout from "../Components/navBar/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "first", element: <First /> },
      { path: "second", element: <Second /> },
      { path: "third", element: <Third /> },
      { path: "four", element: <Fourth /> },
      { path: "captcha", element: <Captcha /> },
      {
        path: "private-route",
        element: (
          <PrivateRoute>
            <Private />
          </PrivateRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
