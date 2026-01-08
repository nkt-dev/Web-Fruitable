import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      </div>
    </>
  );
}
export default App;
