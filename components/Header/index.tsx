import React, { useState, useEffect } from "react";
import Router from "next/router";
import { Menu, Affix } from "antd";
import css from "./index.module.sass";
import axios from "axios";
import servicePath from "@/config/api";
import Image from 'next/image'
import headerImg from "/public/static/images/header/v.jpg"
interface linkList {
  icon: string,
  typeName: string,
  route: string,
  id: string
}
const Header = () => {
  const [navArray, setNavArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getHeaderInfo).then((res) => {
        setNavArray(res.data.data);
        return res.data.data;
      });
      setNavArray(result);
    };
    fetchData();
  }, []);
  //跳转到列表页
  const handleClick = (item: linkList) => {
    Router.push(item.route);
  };
  return (
      <div className={css["header"]}>
        {/* <Image className={css["header-img"]}  src={headerImg} alt='' width={50} height={50} />  */}
        <div className={css["header-title"]} onClick={() => Router.push("/")}>
          <span className={css["header-logo"]}>Vzai</span>
          <span className={css["header-txt"]}>一只年轻程序猿</span>
        </div>

        <div className={css['header-menu']}>
          <Menu mode="horizontal">
            <Menu.Item key="/">
              <span
                className={`${css["menu-font"]}`}
                onClick={() => Router.push("/")}
              >
                首页
              </span>
            </Menu.Item>
            {navArray.map((item: linkList) => {
              return (
                <Menu.Item key={item.id} onClick={() => handleClick(item)}>
                  <span className={`${css["menu-font"]} ${item.icon}`}>
                    {" "}
                    {item.typeName}
                  </span>
                </Menu.Item>
              );
            })}
          </Menu>
        </div>
      </div>
  );
};
export default Header;
