import styles from "@/styles/ui/cart_sections.module.scss";
import CartItem from "./CartItem";
import {useGetCartQuery} from "@/rtk/features/api/cartApi";
import {getUserInfo, isLoggedIn} from "@/services/auth.service";
import {IItemsList} from "@/types";

const CartSection = () => {
  const user: any = getUserInfo();
  const isUserLoggedIn = isLoggedIn();

  const {isLoading, isError, data} = useGetCartQuery(user?._id, {
    skip: !isUserLoggedIn,
  });

  // console.log(data);

  let total = 0;

  if (data?.items?.length > 0) {
    total = data.items.reduce((total: number, currentItem: IItemsList) => {
      return total + currentItem.quantity * currentItem.productId.price;
    }, 0);
  }

  let content = <div className="text-center pb-7">Login to see your cart!</div>;
  if (!isLoading && isError) {
    content = <div className="text-center pb-7">Something went wrong!</div>;
  }
  if (!isLoading && !isError && data?.items?.length == 0) {
    content = <div className="text-center pb-7">Empty Cart</div>;
  }
  if (!isLoading && !isError && data?.items?.length > 0) {
    content = (
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Size</th>
            <th>color</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.items?.map((item: IItemsList) => (
            <CartItem key={item?._id} data={item} />
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div className={styles.cartSection}>
      <div className={styles.cartTable}>{content}</div>
      {data?.items?.length > 0 && (
        <div className={styles.totalCost}>
          <h6>
            Total <span>${total}.00</span>
          </h6>
        </div>
      )}
    </div>
  );
};

export default CartSection;
