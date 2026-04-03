import Categories from "../sections/home/Categories";
import Hero from "../sections/home/Hero";
import Recommendation from "../sections/home/Recommendation";
import YourProgress from "../sections/home/YourProgress";
import FeaturedCourses from "../sections/home/FeaturedCourses";

const Home = () => {
  return (
      <>
      <Hero />
      <Categories />
      <Recommendation />
      <YourProgress />
      <FeaturedCourses />
      </>
  );
};

export default Home;