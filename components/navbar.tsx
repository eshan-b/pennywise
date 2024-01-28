"use client";

// Next Imports
import Image from "next/image";
import Link from "next/link";

// NextUI
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

// Images
import PennywiseLogo from "../assets/pennywise_icon.svg";

// Logo Font
import { Irish_Grover } from "next/font/google";
const irish_grover = Irish_Grover({
  subsets: ["latin"],
  weight: "400",
});

export default function NavbarComponent() {
  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      className="border-b-1 border-light-pink"
    >
      <Link href="/">
        <NavbarBrand className="lg:mx-8 md:mx-8">
          <Image
            src={PennywiseLogo}
            alt={"Pennywise Logo"}
            width={42}
            height={42}
          />
          <p
            className={`${irish_grover.className} text-inherit mx-4 text-light-violet text-2xl`}
          >
            pennywise
          </p>
        </NavbarBrand>
      </Link>
      <NavbarContent justify="end" className="mx-8 gap-10">
        <NavbarItem className="hidden lg:flex md:flex">
          <Link
            href="/#search"
            className="text-black uppercase text-sm font-bold"
          >
            Search
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex md:flex">
          <Link
            href="/#trending"
            className="text-black uppercase text-sm font-bold"
          >
            Trending
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
