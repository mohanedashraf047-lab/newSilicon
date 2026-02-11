import SecondHandShoes from "../components/usedClothesPage/SecondHandShoes";
import ProductGrid from "../components/usedClothesPage/ProductGrid";
import WhyChooseUs from "../components/usedClothesPage/WhyChooseUs";
import CategoryBrowser from "../components/usedClothesPage/CategoryBrowser";
import Banner2 from "../components/usedClothesPage/Banner2";
import CustomerFeedback from "../components/usedClothesPage/CustomerFeedback";
import ComparisonSection from "../components/usedClothesPage/ComparisonSection";
import ContactSection from "../components/usedClothesPage/ContactSection";
import { PAGE_DATA } from "../constants/pageData";

const data = PAGE_DATA.usedClothes;

const UsedClothes = () => {
  return (
    <div className="pt-20 lg:pt-32">
      <SecondHandShoes
        title={data.hero.title}
        highlightWord={data.hero.highlightWord}
        content={data.content}
      />
      <ProductGrid products={data.products} />
      <WhyChooseUs
        title={data.whyChoose.title}
        highlightWord={data.whyChoose.highlightWord}
        subtitle={data.whyChoose.subtitle}
        features={data.whyChoose.features}
      />
      <CategoryBrowser
        title={data.categories.title}
        banner={data.categories.banner}
        groups={data.categories.groups}
      />
      <Banner2
        badge={data.banner2.badge}
        heading={data.banner2.heading}
        headingHighlight={data.banner2.headingHighlight}
        paragraphs={data.banner2.paragraphs}
        cards={data.banner2.cards}
      />
      <CustomerFeedback
        title={data.feedback.title}
        highlightWord={data.feedback.highlightWord}
        trustText={data.feedback.trustText}
        testimonials={data.feedback.testimonials}
      />
      <ComparisonSection />
      <ContactSection />
    </div>
  );
};

export default UsedClothes;
