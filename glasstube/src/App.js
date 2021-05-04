import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import RecomendedVideos from "./Components/RecomendedVideos";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />

        <RecomendedVideos />
      </div>
    </div>
  );
}

export default App;
