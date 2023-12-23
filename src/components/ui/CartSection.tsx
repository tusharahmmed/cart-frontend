import styles from "@/styles/ui/cart_sections.module.scss";
import CartItem from "./CartItem";

const CartSection = () => {
  return (
    <div className={styles.cartSection}>
      <div className={styles.cartTable}>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Size</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <CartItem />
            <CartItem />
            <CartItem />
          </tbody>
        </table>
      </div>
      <div className={styles.totalCost}>
        <h6>
          Total <span>$99.90</span>
        </h6>
      </div>
    </div>
  );
};

export default CartSection;
