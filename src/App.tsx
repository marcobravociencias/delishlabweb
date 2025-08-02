import React from 'react';
import './App.css';
import '../src/styles/extras.css';
import { Routes, Route } from "react-router-dom";
import WebPageComponent from "./Components/WebPageComponents/WebPageComponent";
import LoginComponent from "./Components/AppComponents/LoginComponent";
import DashViewComponent from "./Components/AppComponents/DashViewComponent";

function App() {
    return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<WebPageComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/dashboard" element={<DashViewComponent />} />
                </Routes>
            </div>
    );
}

export default App;
