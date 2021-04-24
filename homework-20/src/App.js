import React from "react";
import './App.css';
import Countdown from "./components/Countdown";

export default function App() {

    return (
        <div className="App">
            <Countdown initialSeconds={60} step={1}/>
            <Countdown initialSeconds={3600} step={2}/>
        </div>
    );
}