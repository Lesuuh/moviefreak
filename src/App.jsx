import { useEffect, useState } from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { TrendingToday } from "./components/TrendingToday";
import { Upcoming } from "./components/Upcoming";
import { Toprated } from "./components/Toprated";
import { TrendingSeries } from "./components/TrendingSeries";
import { Footer } from "./components/Footer";

function App() {
  const [popular, setPopular] = useState([]);


  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODQ5NWE4NDBlNGNmOWZhNTQxN2Y2OTE0OWQxOWI1NCIsInN1YiI6IjY1NzYwNDc2NGJmYTU0MDBmZTdlYzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tn-mplgaCBdxChn8mKdQ-ufW73SMrQL3Qqkq3bUxsz4",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setPopular(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <main className="bg-black ">
        <Navbar />
        <Hero popular={popular} />
        <TrendingToday />
        <Upcoming />
        <Toprated />
        <TrendingSeries />
        <Footer />
      </main>
    </>
  );
}

export default App;
