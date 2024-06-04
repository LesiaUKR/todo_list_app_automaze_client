"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { SidebarStyled } from "./Sidebar.styled";
import { useGlobalState } from "app/context/globalContextProvider";
import menu from "app/utils/menu";
import Link from "next/link";

function Sidebar() {
  const { theme } = useGlobalState();
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (link) => {
    router.push(link);
  };
  return (
    <SidebarStyled theme={theme}>
      <ul className="nav-items">
        {menu.map((item) => {
          const link = item.link;
          return (
            <li
              key={item.id}
              className={`nav-item ${pathname === link ? "active" : ""}`}
              onClick={() => {
                handleClick(link);
              }}
            >
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </SidebarStyled>
  );
}

export default Sidebar;
