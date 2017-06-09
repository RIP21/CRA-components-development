import React from "react";
import ReactDOM from "react-dom";
import App from "./Demo";
import registerServiceWorker from "./demo/registerServiceWorker";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
