import styles from "@/styles/home/why4u.module.scss";
import truck from "@/assets/images/home/truck.png";
import Image from "next/image";

const Why4u = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <div className={styles.content}>
        <div>
          <h1>DENIM ?</h1>
          <h3>Leave the logistics to us</h3>
          <p>
            We love what we are doing. We value those with whom we work - our
            customers, drivers, employees, and receive the same return from
            them. Therefore, the most important thing for us is to do everything
            at the highest level and with pleasure <span>FOR YOU</span>.
          </p>
          <button>About us</button>
        </div>
      </div>
      <div className={styles.imageWraper}>
        <Image
          layout="responsive"
          width={629}
          height={423}
          src={truck}
          alt="truck"
        />
      </div>
    </section>
  );
};

export default Why4u;
