import Advantages from "../components/newClothesPage/Advantages";
import Banner1 from "../components/newClothesPage/Banner1";
import CompanyInfo from "../components/newClothesPage/CompanyInfo";
import ContactUs from "../components/newClothesPage/ContactUs";
import ServiceProcess from "../components/newClothesPage/ServiceProcess";
import ProductGrid from "../components/usedClothesPage/ProductGrid";
import { PAGE_DATA } from "../constants/pageData";



const data = PAGE_DATA.newClothes;

const NewClothes = () => {
  return (
    <div className="pt-20 lg:pt-32">
      <Banner1/>
      <ProductGrid products={data.products} productsPage="newClothesImages"/>
      <CompanyInfo />
      <Advantages />
      <ServiceProcess />
      <ContactUs />
    </div>
  );
};

export default NewClothes;
