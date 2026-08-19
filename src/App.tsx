import { globalStyles } from "./styles";
import { useReveal }    from "./hooks/useReveal";

import { Nav        } from "./components/Nav";
import { Hero       } from "./components/Hero";
import { About      } from "./components/About";
import { Skills     } from "./components/Skills";
import { Projects   } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact    } from "./components/Contact";
import { Footer     } from "./components/Footer";

export default function App() {
  useReveal();

  return (
    <>
      <style>{globalStyles}</style>
      <Nav        />
      <Hero       />
      <About      />
      <Skills     />
      <Projects   />
      <Experience />
      <Contact    />
      <Footer     />
    </>
  );
}
