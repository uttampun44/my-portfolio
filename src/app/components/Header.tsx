"use client";

import Link from "next/link";
import React from "react";
import Links from "@/components/Links";


function Header() {
  return (
    <>
      <div className="header bg-bg-primary">
        <div className="headerContainer max-w-[1440px] mx-auto py-11 px-12">
          <div className="headerRow flex justify-between items-center">
            <div className="headerTitle">
              <h1 className="text-white text-[40px] font-heading-font">
                Uttam
              </h1>
            </div>
            <div className="navLink">
              <nav>
                <ul className="flex gap-x-4">
                  <li>
                    <Links href={"/"} name="Home" className="font-poppins text-xl text-white"  />
                  </li>
                  <li>
                    <Links href={"/portfolio"} name="Portfolio" className="font-poppins text-xl text-white" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
