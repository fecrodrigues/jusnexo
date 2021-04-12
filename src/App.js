import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

// Layout
import Header from "./components/patterns/Header";
import Footer from "./components/patterns/Footer";

// Styles
import "./styles/index.scss";

function App() {
  return (
    <BrowserRouter >
      <Header></Header>
      <Routes></Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
