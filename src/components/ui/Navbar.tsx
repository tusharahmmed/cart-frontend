import React, {useEffect, useState} from "react";
import styles from "@/styles/ui/navbar.module.scss";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import {HiOutlineShoppingBag} from "react-icons/hi2";
import UDrawer from "./UDrawer";
import CartSection from "./CartSection";
import {getUserInfo, isLoggedIn, removeUserInfo} from "@/services/auth.service";
import {authKey} from "@/constants/storageKey";
import {useRouter} from "next/navigation";
import {useGetCartQuery} from "@/rtk/features/api/cartApi";
import {baseApi} from "@/rtk/features/api/baseApi";
import {useAppDispatch} from "@/rtk/hooks";
import {tagTypes} from "@/rtk/tag-types";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hasUser, setHasUser] = useState(false);
  const user: any = getUserInfo();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isLoggedInuser = isLoggedIn();

  useEffect(() => {
    setHasUser(isLoggedInuser);
  }, [isLoggedInuser]);

  let totalItems = 0;
  const {data} = useGetCartQuery(user?._id, {skip: !isLoggedInuser});
  if (data?.items?.length > 0) {
    totalItems = data?.items?.length;
  }
  const showCart = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const logout = () => {
    removeUserInfo(authKey);
    router.push("/login");
    const apiCollection = dispatch(baseApi.util.resetApiState());
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
                <span>{totalItems}</span>
              </div>
              Shoping Cart
            </li>
            {!hasUser && (
              <li>
                <Link href="/register">Register</Link>
              </li>
            )}
          </ul>
          {!hasUser && (
            <div className={styles.action}>
              <Link href="/login">
                <button>Login</button>
              </Link>
            </div>
          )}

          {hasUser ? (
            <div className={styles.action}>
              <button onClick={logout}>Log out</button>
            </div>
          ) : null}
        </div>
      </header>
      <UDrawer title="My Cart" open={open} onClose={onClose}>
        <CartSection />
      </UDrawer>
    </>
  );
};

export default Navbar;
