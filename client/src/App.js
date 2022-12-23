import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:page" element={<ProductPage />} />

      </Routes>
      <Footer/>

    </>
  );
}

export default App;
