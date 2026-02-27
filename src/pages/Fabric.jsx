import ProductGrid from "../components/usedClothesPage/ProductGrid";
import SecondHandShoes from "../components/usedClothesPage/SecondHandShoes";
import WhyChooseUs from "../components/usedClothesPage/WhyChooseUs";
import CategoryBrowser from "../components/usedClothesPage/CategoryBrowser";
import { PAGE_DATA } from "../constants/pageData";
import Banner2 from "../components/usedClothesPage/Banner2";
import CustomerFeedback from "../components/usedClothesPage/CustomerFeedback";
import { useTranslation } from "react-i18next";

const Fabric = () => {
  const { t } = useTranslation(["fabric"]);

  return (
    <div className="pt-20 lg:pt-32">
      <SecondHandShoes
        title={t("hero.title")}
        highlightWord={t("hero.highlightWord")}
        content={t("content", { returnObjects: true }) || []}
      />
      <ProductGrid products={PAGE_DATA.fabric.products} productsPage="fabricImages"/>
      <WhyChooseUs
        title={t("whyChoose.title")}
        highlightWord={t("whyChoose.highlightWord")}
        subtitle={t("whyChoose.subtitle")}
        features={t("whyChoose.features", { returnObjects: true }) || []}
      />
      <CategoryBrowser
        title={t("categories.title")}
        banner={{
    ...t("categories.banner", { returnObjects: true }),
    image: PAGE_DATA.fabric.categories.banner.image,
  }}
        groups={t("categories.groups", { returnObjects: true }) || []}
      />
      <Banner2
        badge={t("banner2.badge")}
        heading={t("banner2.heading")}
        headingHighlight={t("banner2.headingHighlight")}
        paragraphs={t("banner2.paragraphs", { returnObjects: true }) || []}
        cards={t("banner2.cards", { returnObjects: true }) || []}
      />
      <CustomerFeedback
        title={t("feedback.title")}
        highlightWord={t("feedback.highlightWord")}
        trustText={t("feedback.trustText")}
        testimonials={t("feedback.testimonials", { returnObjects: true }) || []}
      />
    </div>
  );
};

export default Fabric;
