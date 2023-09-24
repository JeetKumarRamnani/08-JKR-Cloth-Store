import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Gallery from "./Pages/Gallery";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <Router>
      <div className="Container w-full md:w-5/6 mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
