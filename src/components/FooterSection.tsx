import React from "react";
import logo from "../../public/images/transparent-logo.png";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./NavigationSection";
export default function FooterSection() {
  return (
    <>
      <section className="min-h-[40vh]  bg-zinc-900 text-slate-200 w-full px-16">
        <div className="flex flex-wrap h-full items-end justify-between py-20">
          <Link href="/">
            <Image
              src={logo}
              height={200}
              width={200}
              alt="logo"
              className="object-contain w-64"
            />
          </Link>
        <p className="-mb-20 text-xs">Copyright @ 2025 by Nakuru Atheletics Club All Right Reserved.</p>
          <div className="mr-48">
            <p className="font-semibold ">Navigation Links</p>
            <ul className="flex flex-col gap-2 mt-4 text-sm">
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
