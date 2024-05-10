
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApiWhatsapp from "./Utils/ApiWhatsapp";
import RouteComponent from "./components/RouteComponents";
import ReactGA from "react-ga";
import React, { useEffect } from "react";

const App = () => {
  const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: document.location.pathname + window.location.search,
    });
  }, []);

  return (
      <>
        <ApiWhatsapp />

        <Header />

        <RouteComponent />

        <Footer />
      </>
  );
};

export default App;
