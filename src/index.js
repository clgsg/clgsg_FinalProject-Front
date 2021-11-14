import React from "react";
import ReactDOM from 'react-dom';
import App from "../src/pages/App"
import TopHeader from "components/TopHeader"



ReactDOM.render(
  <React.StrictMode>
        <TopHeader/>
        <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

