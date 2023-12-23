import {useForm, SubmitHandler} from "react-hook-form";

import styles from "@/styles/products/product_info.module.scss";

const ProductInfo = () => {
  const {register, handleSubmit} = useForm();
  // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  const onSubmit = async (data: any) => {
    console.log(data);

    // message.loading("Creating.....");
    // try {
    //   const res = addAcademicSemester(data);
    //   if (!!res) {
    //     message.success("Academic Semester Created successfully");
    //   }
    // } catch (err: any) {
    //   console.error(err.message);
    //   message.error(err.message);
    // }
  };

  const colors = ["#b01a1a", "#111"];

  return (
    <div>
      <div className={styles.textWraper}>
        <h2>WHITE PEPLUM TOP</h2>
        <h3>$39.90</h3>
        <h4>
          Available: <span>In Stock</span>
        </h4>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.sizeWraper}>
          <p>SIZE</p>
          <div className={styles.sizes}>
            <div className={styles.radioWraper}>
              <input
                type="radio"
                value={34}
                {...register("size")}
                id="s-size"
              />
              <label htmlFor="s-size">34</label>
            </div>
            <div className={styles.radioWraper}>
              <input
                type="radio"
                value={36}
                {...register("size")}
                id="m-size"
              />
              <label htmlFor="m-size">36</label>
            </div>
            <div className={`${styles.radioWraper} ${styles.disabled}`}>
              <input
                disabled
                type="radio"
                value={38}
                {...register("size")}
                id="z-size"
              />
              <label htmlFor="z-size">38</label>
            </div>
          </div>
        </div>
        <div className={styles.colorWraper}>
          <p>Colour Available</p>
          <div className={styles.colors}>
            {colors.map((color, index) => (
              <div className={styles.colorInputWraper}>
                <input
                  type="radio"
                  value={color}
                  {...register("color")}
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
              {...register("quantity")}
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
