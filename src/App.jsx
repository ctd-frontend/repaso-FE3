import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import ListadoContactos from "./components/ListadoContactos";
import NuevoContacto from "./components/NuevoContacto";
import DetallesContacto from "./components/DetallesContacto";

function NotFound() {
  return (
    <div>
      <h1>Not found</h1>
      <Link to="/">Volver a inicio</Link>
    </div>
  );
}

function App() {
  return (
    <div className="container-fluid">
      <header className="headings">
        <h1>Galería de contactos</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contactos">Contactos</Link>
            </li>
            <li>
              <Link to="/crear-nuevo">Crear contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contactos"
          element={<ListadoContactos titulo={"Listado de contactos"} />}
        />
        <Route path="/contacto/:id" element={<DetallesContacto />} />
        <Route path="/crear-nuevo" element={<NuevoContacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
