
import SecondHandShoes from '../components/usedClothesPage/SecondHandShoes'
import ProductGrid from '../components/usedClothesPage/ProductGrid'
import WhyChooseUs from '../components/usedClothesPage/WhyChooseUs'
import CategoryBrowser from '../components/usedClothesPage/CategoryBrowser'
import Banner2 from '../components/usedClothesPage/Banner2'
import CustomerFeedback from '../components/usedClothesPage/CustomerFeedback'
import ComparisonSection from '../components/usedClothesPage/ComparisonSection'
import ContactSection from '../components/usedClothesPage/ContactSection'

const UsedClothes = () => {
  return (
    <div className="pt-20 lg:pt-32">
      {/* SecondHandShoes => is (Banner1) section */}
      <SecondHandShoes />
      <ProductGrid />
      <WhyChooseUs />
      <CategoryBrowser />
      {/* <Banner2 /> => is (The Second Hand Clothes Leading Exporter) section */}
      <Banner2 />
      {/* CustomerFeedback => is (Testimonials) section */}
      <CustomerFeedback />
      {/* ComparisonSection => is (Comparison) section */}
      <ComparisonSection />
      {/* ContactSection => is (Contact Us) section */}
      <ContactSection />

    </div>
  )
}

export default UsedClothes
