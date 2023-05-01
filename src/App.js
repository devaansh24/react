import React from "react";
import ReactDOM from "react-dom/client";


import Body from "./components/Body";
import Header from "./components/Header";
/**
 * Header
 *  -Logo
 *  -Nav Item
 * Body
 *  -Search
 *  -Restaurant Container
 *  -Image
 *  Name of Res,rating,Cuisines,Delivery time,offers
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
