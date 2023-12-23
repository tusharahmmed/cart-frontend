import React from "react";
import styles from "@/styles/ui/navbar.module.scss";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
