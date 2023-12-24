import styles from "@/styles/products/image_gallery_section.module.scss";

import Image from "next/image";
import {IProduct} from "@/types";

const ImageGallerySection = ({data}: {data: IProduct}) => {
  return (
    <div>
      <div className={styles.productPicWraper}>
        <Image
          src={data?.image}
          width={575}
          height={757}
          layout="responsive"
          alt={data?.title}
        />
      </div>
    </div>
  );
};

export default ImageGallerySection;
