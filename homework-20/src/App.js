import React from "react";
import './App.css';
import Countdown from "./components/Countdown";

export default function App() {

    return (
        <div className="App">
            <Countdown seconds={15}/>
        </div>
    );
}