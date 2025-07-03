import React from "react";
import Register from "./register";
import Login from "./login";
import AddDetail from "./showDetail";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/show-detail" element={<AddDetail/>}/>
    </Routes>
  );
}

export default App;
