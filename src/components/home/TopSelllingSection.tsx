import styles from "@/styles/home/top_selling.module.scss";
import ProductItem from "../ui/ProductItem";

const TopSelllingSection = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <h2>BROWSE TOP SELLING PRODUCTS</h2>
      <div className={styles.itemsWraper}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>
  );
};

export default TopSelllingSection;
