import {ImageGallerySection, ProductInfo} from "@/components/products";
import PrivateRotes from "@/layouts/PrivateRotes";
import RootLayout from "@/layouts/RootLayout";
import {useGetProductDetailsQuery} from "@/rtk/features/api/productApi";
import styles from "@/styles/products/product_details.module.scss";
import {useParams} from "next/navigation";

const ProductDetails = () => {
  const params = useParams();
  const {isLoading, isError, data} = useGetProductDetailsQuery(params?.id);

  let content = null;
  if (!isLoading && isError) {
    content = "Something went wrong!";
  }
  if (!isLoading && !isError && data?.data?._id) {
    content = (
      <>
        <ImageGallerySection data={data?.data} />
        <ProductInfo data={data?.data} />
      </>
    );
  }

  return (
    <section className={`${styles.section} section_padding`}>{content}</section>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <RootLayout>
      <PrivateRotes>{page}</PrivateRotes>
    </RootLayout>
  );
};
