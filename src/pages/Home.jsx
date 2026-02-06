// pages/Home.jsx
// import { useNavigate } from "react-router-dom";

import HeroBanner from "../components/homePage/HeroBanner";
import ProductCategories from "../components/homePage/ProductCategories";
import CompanyVideo from "../components/homePage/CompanyVideo";
import WhySiliconValue from "../components/homePage/WhySiliconValue";

const Home = () => {
  // const navigate = useNavigate();

  return (
    <div className="pt-20 lg:pt-32">
      <HeroBanner />
      <ProductCategories />
      <CompanyVideo />
      <WhySiliconValue/>
    </div>
  );
};

export default Home;
