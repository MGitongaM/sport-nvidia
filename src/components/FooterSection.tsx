import React from "react";
import logo from "../../public/images/transparent-logo.png";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./NavigationSection";
export default function FooterSection() {
  return (
    <>
      <section className="min-h-[40vh]  bg-green-700 w-screen px-16">
        <div className="flex h-full items-end justify-between py-20">
          <Link href="/">
            <Image
              src={logo}
              height={200}
              width={200}
              alt="logo"
              className="object-contain w-64"
            />
          </Link>

          <div className="mr-48">
            <p className="font-semibold ">Navigation Links</p>
            <ul className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <Link href={link.hrefLink} key={link.id}>
                  <li className="hover:text-green-400">
                    {link.text}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
