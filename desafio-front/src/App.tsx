import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/organisms/Header/Header";
import ListCats from "./components/molecules/ListCats/ListCats";
import { FormCadastro } from "./components/molecules/FormCadastro/FormCadastro";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ListCats />} />
          <Route path="/listadegatos" element={<ListCats />} />
          <Route path="/formulario" element={<FormCadastro />} />
        </Routes>
      </Router>
      {/* <FormCadastro /> */}
    </div>
  );
}

export default App;
