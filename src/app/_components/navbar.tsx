import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui";
import Image from "next/image";
import Logo from "~/public/img/logo.svg";
import { HamburgerIcon } from "@/components/icons";

const Navbar = () => {
  return (
    <header className="py-14">
      <nav className="wrapper flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Boldo Logo" />
          </Link>
        </div>
        <ul className="hidden sm:flex gap-10 items-center py-1.5 text-primary text-base leading-7">
          <li>
            <Link href="#" className="font-semibold">
              Product
            </Link>
          </li>
          <li>
            <Link href="#" className="font-semibold">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="font-semibold">
              About
            </Link>
          </li>
          <li>
            <Button variant="outline" className="w-[128px]">
              Login
            </Button>
          </li>
        </ul>
        <Button className="sm:hidden bg-transparent h-fit p-0">
          <HamburgerIcon className="w-12 h-12" />
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
