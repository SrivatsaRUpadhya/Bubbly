import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AmazonProductPage from "./pages/AmazonProductPage";
import Home from "./pages/Home";
import FlipkartProductPage from "./pages/FlipkartProductPage";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:asin" element={<AmazonProductPage />} />
        <Route path="/product/flipkart" element={<FlipkartProductPage />} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
