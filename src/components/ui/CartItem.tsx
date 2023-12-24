import Image from "next/image";
import styles from "@/styles/ui/cart_item.module.scss";
import {AiOutlineDelete} from "react-icons/ai";
import {IItemsList} from "@/types";
import {useRemoveFromCartMutation} from "@/rtk/features/api/cartApi";
import {message} from "antd";
import {getUserInfo} from "@/services/auth.service";

const CartItem = ({data}: {data: IItemsList}) => {
  const [removeFromCart] = useRemoveFromCartMutation();
  const user: any = getUserInfo();

  const handleRemoveItem = async () => {
    message.loading("removing.....");
    try {
      const res = await removeFromCart({
        userId: user?._id,
        data: {_id: data._id},
      }).unwrap();

      if (res?.accessToken) {
        message.success("Item removed successfully!");
      }

      // console.log(res);
    } catch (err: any) {
      message.error(err?.data?.message);
      // message.error(err.message);
    }
  };

  return (
    <tr className={styles.tableRow}>
      <td className={styles.product}>
        <Image
          height={50}
          width={50}
          src={data?.productId?.image}
          alt={data?.productId?.title}
        />
        <div className="pc-title">
          <h4>{data?.productId?.title}</h4>
          <p>${data?.productId?.price}.00</p>
        </div>
      </td>
      <td className={styles.quantity}>{data?.quantity}</td>
      <td>
        <h4> {data?.size}</h4>
      </td>
      <td>
        <div
          style={{background: data?.color}}
          className={`h-[20px] w-[20px]`}></div>
      </td>
      <td>
        <h4>${data?.quantity * data?.productId?.price}.00</h4>
      </td>
      <td>
        <h4>
          <AiOutlineDelete
            className="cursor-pointer"
            onClick={handleRemoveItem}
          />
        </h4>
      </td>
    </tr>
  );
};

export default CartItem;
