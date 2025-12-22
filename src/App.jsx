import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Navbar, Welcome, Home } from "#components";
import { Finder, Resume, Safari, Terminal, Text, Contact } from "#windows/";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Contact />

      <Home />
    </main>
  );
};

export default App;
