import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:asin" element={<ProductPage />} />
        <Route path="/product/flipkart" element={<flipkartProductPage />} />

      </Routes>
      <Footer/>

    </>
  );
}

export default App;
