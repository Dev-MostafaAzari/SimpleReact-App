import Modal1 from "./components/modal";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Contact from "./pages/contact";
import CanvosContext from "./contexts/OffcanvasContext";
import Offcan from "./components/Offcanvas";

 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CanvosContext>
          <Navbar/>
          <Offcan/>
        </CanvosContext>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
