import React, {useState} from "react";
import styles from "@/styles/ui/navbar.module.scss";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import {HiOutlineShoppingBag} from "react-icons/hi2";
import UDrawer from "./UDrawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showCart = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} section_padding`}>
        <div className="logo">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              // layout="responsive"
              height={32}
              width={164}
            />
          </Link>
        </div>
        <div className={styles.nav}>
          <button>Menu</button>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li onClick={showCart} className={styles.cart}>
              <div>
                <HiOutlineShoppingBag size={22} />
                <span>4</span>
              </div>
              Shoping Cart
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
          <div className={styles.action}>
            <Link href="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </header>
      <UDrawer title="My Cart" open={open} onClose={onClose}>
        <h1>Welcome back</h1>
      </UDrawer>
    </>
  );
};

export default Navbar;
