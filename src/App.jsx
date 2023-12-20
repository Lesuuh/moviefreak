import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Trending } from "./pages/Trending";
import { Discover } from "./pages/Discover";

function App() {
  return (
    <>
      <Router>
        <main className="bg-black ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/discover" element={<Discover />} />
          </Routes>

          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;
