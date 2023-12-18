import React from "react";
import * as ReactDOM from "react-dom/client";
import TitleBar from "./react/titlebar";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
    <div>
        <TitleBar/>
    </div>
);

function render() {
    const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<TitleBar/>);
}

render();