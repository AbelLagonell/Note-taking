import React from "react";
import * as ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
    <div>
        HEllo World
    </div>
);

function render() {
    const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<App/>);
}

render();