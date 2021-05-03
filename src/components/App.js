import React from "react";
import '../index.css';

import Header from "./Header.js";
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;