import styles from "@/styles/products/image_gallery_section.module.scss";
import product from "@/assets/images/single-product/1.jpg";
import thumb1 from "@/assets/images/single-product/thumb-1.jpg";
import thumb2 from "@/assets/images/single-product/thumb-2.jpg";
import thumb3 from "@/assets/images/single-product/thumb-3.jpg";
import thumb4 from "@/assets/images/single-product/thumb-4.jpg";
import Image from "next/image";

const ImageGallerySection = () => {
  return (
    <div>
      <div className={styles.productPicWraper}>
        <Image
          src={product}
          width={575}
          height={757}
          layout="responsive"
          alt="product"
        />
      </div>
      {/* <div className={styles.productThumbs}>
        <div className={styles.productThumbsTrack}>
          <div className={styles.pt} data-imgbigurl="img/single-product/1.jpg">
            <Image src={thumb1} width={116} height={116} alt="thumb" />
          </div>
          <div className={styles.pt} data-imgbigurl="img/single-product/2.jpg">
            <Image src={thumb2} width={116} height={116} alt="thumb" />
          </div>
          <div className={styles.pt} data-imgbigurl="img/single-product/3.jpg">
            <Image src={thumb3} width={116} height={116} alt="thumb" />
          </div>
          <div className={styles.pt} data-imgbigurl="img/single-product/4.jpg">
            <Image src={thumb4} width={116} height={116} alt="thumb" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ImageGallerySection;
