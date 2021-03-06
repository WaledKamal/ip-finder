import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [ipAddress, setIP] = useState("");
  useEffect(() => {
    const response = axios
      .get(
        "https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0"
      )
      .then((response) => {
        setIP(response.data);
        return response;
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <img src={process.env.PUBLIC_URL + "/logo.png"}></img>
          <h1>What is My IP Address ? </h1>
        </div>
        <div className="ip-data">
          <div className="item_data">
            Your Country Code : {ipAddress.country_code ? ipAddress.country_code : "Not Found"}
          </div>
          <div className="item_data">Country : {ipAddress.country_name ? ipAddress.country_name : "Not Found"}</div>
          <div className="item_data">State Address is : {ipAddress.state ? ipAdrees.state : "Not Found"}</div>
          <div className="item_data">City : {ipAddress.city ? ipAddress.city : "Not Found"}</div>
          <div className="item_data">
            Postal : {ipAddress.postal ? ipAddress.postal : "Not Found"}
          <div className="item_data">Latitude : {ipAddress.Latitude ? ipAddress.Latitude : "Not Found"}</div>
          <div className="item_data">Longitude : {ipAddress.longitude ? ipAddress.longitude : "Not Found"}</div>
          <div className="item_data">IP Address (IPv4) : {ipAddress.IPv4 ? ipAddress.IPv4 : "IP NOT FOUND !"}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
