import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Trending } from "./pages/Trending";
import { Discover } from "./pages/Discover";
import { MovieDetails } from "./pages/MovieDetails";
import { SearchPage } from "./pages/SearchPage";

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
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/search/:query" element={<SearchPage />} />
          </Routes>

          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;
