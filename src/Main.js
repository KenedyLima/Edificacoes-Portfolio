import "./App.css";
import Contatos from "./Contatos";
import Footer from "./Footer";
import Habilidades from "./Habilidades";
import Header from "./Header";
import Projetos from "./Projetos";
import Sobre from "./Sobre";

function App() {
  return (
    <>
      <Header />;
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contatos />
      <Footer />
    </>
  );
}

export default App;
