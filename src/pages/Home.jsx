import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Toprated } from "../components/Toprated";
import { TrendingSeries } from "../components/TrendingSeries";
import { TrendingToday } from "../components/TrendingToday";
import { Upcoming } from "../components/Upcoming";


export const Home = () => {
  return (
    <div>
      <Hero />
      <TrendingToday />
      <Upcoming />
      <Toprated />
      <TrendingSeries />
      <Footer />
    </div>
  );
};
