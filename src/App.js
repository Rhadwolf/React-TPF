
import { Home } from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContent from "./Components/CartContent/CartContent";
import { DataProvider } from "./Components/Context/DataContext";
import { Contacto } from "./Components/Contacto/Contacto";
import { Nosotros } from "./Components/Nosotros/Nosotros";
import { Servicios } from "./Components/Servicios/Servicios";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cart" element={<CartContent />}></Route>
          <Route path="/Nosotros" element={<Nosotros/>}></Route>
          <Route path="/Servicios" element={<Servicios/>}></Route>
          <Route path="/Contacto" element={<Contacto/>}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>

  );
}

export default App;
