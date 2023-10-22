import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-cointainer padding-cointainer relative z-30 py-5 px-2">
      <Link href="/">
        <Image src="/hilink-logo.svg" width={74} alt="Logo" height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((links) => (
          <Link
            href={links.href}
            key={links.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer transition-all pb-1.5 hover:font-bold"
          >
            {links.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Log In"
          icon="/user.svg"
          varient="btn_dark_green"
        />
      </div>
    </nav>
  );
};

export default Navbar;
