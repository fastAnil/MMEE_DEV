import { useState } from "react";
import Header from "./components/Header/Header";
import StorySlider from "./components/StorySlider/StorySlider";
import SearchBar from "./components/SearchBar/SearchBar";
import SidePane from "./components/SidePane/SidePane";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  return (
    <>
      <Header />

      {/* MOBILE TOGGLE BAR */}
      <div className="mobile-toggle">
        <button onClick={() => setShowLeft(true)}>☰ Notifications</button>
        <button onClick={() => setShowRight(true)}>☰ Sponsors</button>
      </div>

      <main className="page-layout">
        {/* LEFT PANE */}
        <aside className={`pane left ${showLeft ? "open" : ""}`}>
          <button className="close" onClick={() => setShowLeft(false)}>✕</button>
          <SidePane title="Notifications" />
        </aside>

        {/* CENTER */}
        <section className="center">
          <StorySlider />
          <div className="center">
            <h2 className="title">Search the event you are looking for</h2>
          </div>  
          <SearchBar />
        </section>

        {/* RIGHT PANE */}
        <aside className={`pane right ${showRight ? "open" : ""}`}>
          <button className="close" onClick={() => setShowRight(false)}>✕</button>
          <SidePane title="Sponsors" />
        </aside>
      </main>

      <Footer />
    </>
  );
}
