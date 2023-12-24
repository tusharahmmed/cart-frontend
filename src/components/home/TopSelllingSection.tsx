import styles from "@/styles/home/top_selling.module.scss";
import ProductItem from "../ui/ProductItem";
import {useGetAllProductsQuery} from "@/rtk/features/api/productApi";
import {IProduct} from "@/types";

const TopSelllingSection = () => {
  const {data, isError, isLoading} = useGetAllProductsQuery(undefined);

  let content = null;
  if (!isLoading && isError) {
    content = "Something went wrong!";
  }
  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data.map((item: IProduct) => (
      <ProductItem data={item} key={item?._id} />
    ));
  }

  return (
    <section className={`${styles.section} section_padding`}>
      <h2>BROWSE TOP SELLING PRODUCTS</h2>
      <div className={styles.itemsWraper}>{content}</div>
    </section>
  );
};

export default TopSelllingSection;
