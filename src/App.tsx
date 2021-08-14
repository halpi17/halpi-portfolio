import React from "react";
import Navbar from "./components/Navbar";
import MyAvatar from "./components/MyAvatar";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contacts from "./components/Contacts";
import ScrollUp from "./utils/ScrollUp";
import Waves from "./components/Waves";

import "./components/Header.css";

const App: React.FC = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      {/* Todo: MyAbatar, Aboutコンポーネント一つにまとめる */}
      <div className="header">
        <section>
          <MyAvatar />
        </section>
        <section id="about">
          <About />
          <Waves />
        </section>
      </div>
      <section id="skills">
        <Skills />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
      <ScrollUp />
    </>
  );
};

export default App;
