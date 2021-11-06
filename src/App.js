import { Navigation } from "./components/exports";
import { GreetSection } from "./components/exports";
import { Links } from "./components/exports";
import { AboutMe } from "./components/exports";
import { Resume } from "./components/exports";
import { Projects } from "./components/exports";
import { Contacts } from "./components/exports";
import { Copyrights } from "./components/exports";

function App() {
  return (
    <>
      <Navigation />
      <GreetSection />
      <Links />
      <AboutMe />
      <Resume />
      <Projects />
      <Contacts />
      <Copyrights />
    </>
  );
}

export default App;
