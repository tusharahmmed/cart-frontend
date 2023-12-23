import styles from "@/styles/ui/product_item.module.scss";
import pic from "@/assets/images/product/4.jpg";
import Image from "next/image";
import {CiShoppingCart} from "react-icons/ci";
import {CiHeart} from "react-icons/ci";
import Link from "next/link";
import {useState} from "react";

const ProductItem = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.productItem}>
      <div className={styles.piPic}>
        <Image
          src={pic}
          alt={"product"}
          className="w-full"
          height={408}
          width={263}
        />
        <div className={styles.piLinks}>
          <Link href="/products/444" className={styles.addCard}>
            <CiShoppingCart size={20} />
            <span>View Details</span>
          </Link>
          <a
            onClick={() => setLiked(!liked)}
            style={{
              background: liked ? "#f51167" : "#fff",
            }}
            className="ml-2 cursor-pointer">
            <CiHeart color={liked ? "#fff" : "#000"} size={20} />
          </a>
        </div>
      </div>
      <div className={styles.piText}>
        <h6>$35,00</h6>
        <p>Flamboyant Pink Top </p>
      </div>
    </div>
  );
};

export default ProductItem;
