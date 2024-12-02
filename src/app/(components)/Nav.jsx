import Link from "next/link";
import React from "react";

import { FaHome } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";


const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <div className="icon ">
            <FaHome />
          </div>
        </Link>
        <Link href="/">
          <div className="icon">
            <FaTicket />
          </div>
        </Link>
      </div>
      <div className="text-default-text">123@gmmail.com</div>
    </nav>
  );
};

export default Nav;
