import React from "react";
import Logo from "./components/Logo";
import Home from "./pages/Home";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faGithub, faLinkedin);

function App() {
  return (
    <>
      <Logo />
      <Home />
    </>
  );
}

export default App;
