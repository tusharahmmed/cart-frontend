import {useForm} from "react-hook-form";

import styles from "@/styles/products/product_info.module.scss";
import {IProduct} from "@/types";
import {message} from "antd";
import {getUserInfo} from "@/services/auth.service";
import {useAddtoCartMutation} from "@/rtk/features/api/cartApi";

const ProductInfo = ({data}: {data: IProduct}) => {
  const {register, handleSubmit, reset} = useForm();

  const user = getUserInfo() as any;
  const colors = data?.color.split(",");
  const sizes = data?.size.split(",");

  const [addtoCart] = useAddtoCartMutation();

  const onSubmit = async (formData: any) => {
    // some validation
    if (!formData?.items[0]?.size) {
      message.info("Select Size to continue");
      return;
    }
    if (!formData?.items[0]?.color) {
      message.info("Select Color to continue");
      return;
    }
    if (formData?.items[0]?.quantity <= 0) {
      message.info("Quantity must be at least 1");
      return;
    }

    // prepare body
    formData.userId = user._id;
    formData.items[0].productId = data?._id;

    message.loading("adding to cart.....");
    try {
      const res: any = await addtoCart(formData);
      if (res?.data) {
        message.success("cart added successfully");
      }
      if (res?.error) {
        message.error(res.error?.data?.message);
        // console.log(res);
      }
    } catch (err: any) {
      // console.error(err);
      // message.error(err.message);
    }
  };

  return (
    <div>
      <div className={styles.textWraper}>
        <h2>{data?.title}</h2>
        <h3>${data?.price}.00</h3>
        <h4>
          Available: <span>In Stock</span>
        </h4>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.sizeWraper}>
          <p>SIZE</p>
          <div className={styles.sizes}>
            {sizes?.map((size, i) => {
              return (
                <div key={i} className={styles.radioWraper}>
                  <input
                    type="radio"
                    value={size}
                    {...register("items[0].size")}
                    id={size}
                  />
                  <label htmlFor={size}>{size}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.colorWraper}>
          <p>Color Available</p>
          <div className={styles.colors}>
            {colors.map((color, index) => (
              <div key={index} className={styles.colorInputWraper}>
                <input
                  type="radio"
                  value={color}
                  {...register("items[0].color")}
                  id={color}
                />
                <label style={{background: color}} htmlFor={color}>
                  <span style={{background: color}}></span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.quantity}>
          <p>QUANTITY</p>
          <div className={styles.quantityWraper}>
            <input
              type="number"
              defaultValue={1}
              {...register("items[0].quantity")}
              id=""
            />
          </div>
        </div>
        <button type="submit" className={styles.shop}>
          Shop
        </button>
      </form>
    </div>
  );
};

export default ProductInfo;
