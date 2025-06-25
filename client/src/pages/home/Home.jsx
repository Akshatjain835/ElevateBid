import { CategorySlider, Hero, Process, TopCollection, TopSeller, Trust } from "../../routes/common/AllRoutes";
import { ProductList } from "../../components/hero/ProductList";

const Home = () => {
  return (
    <>
      <Hero />
      <CategorySlider />
      <ProductList />
      <TopSeller />
      <Process />
      <Trust />
      <TopCollection />
    </>
  );
};

export default Home;