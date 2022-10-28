import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Landing from "./sections/Landing";

enum PAGE_NUMBER {
  landing,
  work,
}

function App() {
  const [pageNumber, setPageNumber] = useState(PAGE_NUMBER.landing);

  React.useEffect(() => {
    const setWindowHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", setWindowHeight);
    setWindowHeight();

    return () => {
      window.removeEventListener("resize", setWindowHeight);
    };
  });

  return (
    <div className="App">
      <Landing />
      <Nav />
    </div>
  );
}

export default App;
