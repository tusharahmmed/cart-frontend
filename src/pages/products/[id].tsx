import {ImageGallerySection, ProductInfo} from "@/components/products";
import RootLayout from "@/layouts/RootLayout";
import styles from "@/styles/products/product_details.module.scss";

const ProductDetails = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <ImageGallerySection />
      <ProductInfo />
    </section>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
