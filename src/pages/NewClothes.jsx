import Advantages from "../components/newClothesPage/Advantages";
import Banner1 from "../components/newClothesPage/Banner1";
import CompanyInfo from "../components/newClothesPage/CompanyInfo";
import ContactUs from "../components/newClothesPage/ContactUs";
import Products from "../components/newClothesPage/Products";
import ServiceProcess from "../components/newClothesPage/ServiceProcess";

const NewClothes = () => {
  return (
    <div className="pt-20 lg:pt-32">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center mt-5">New Clothes</h1>
      <Banner1 />
      <Products />
      <CompanyInfo />
      <Advantages />
      <ServiceProcess />
      <ContactUs />
    </div>
  );
};

export default NewClothes;
