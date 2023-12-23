import product from "@/assets/images/product/1.jpg";
import Image from "next/image";
import styles from "@/styles/ui/cart_item.module.scss";
import {AiOutlineDelete} from "react-icons/ai";

const CartItem = () => {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.product}>
        <Image height={50} width={50} src={product} alt="product" />
        <div className="pc-title">
          <h4>Animal Print Dress</h4>
          <p>$45.90</p>
        </div>
      </td>
      <td className={styles.quantity}>5</td>
      <td>
        <h4> M</h4>
      </td>
      <td>
        <h4>$45.90</h4>
      </td>
      <td>
        <h4>
          <AiOutlineDelete />
        </h4>
      </td>
    </tr>
  );
};

export default CartItem;
