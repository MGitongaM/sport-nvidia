import React from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

import {
  Facebook,
  Instagram,
  MailIcon,
  MapIcon,
  MapPinnedIcon,
  Music,
  PhoneCallIcon,
  X,
} from "lucide-react";
import { navLinks } from "@/StaticData/navigationLinks";
import * as motion from "motion/react-client";

export const socialLinks = [
  {
    id: 1,
    text: "Instagram",
    hrefLink: "https://www.instagram.com/nakuruathleticclub_nac/",
    icon: <Instagram className="size-4" />,
  },
  {
    id: 2,
    text: "Facebook",
    hrefLink:
      "https://www.facebook.com/people/Nakuru-Athletic-Club-NAC/61562796452343/",
    icon: <Facebook className="size-4" />,
  },
  {
    id: 3,
    text: "X",
    hrefLink:
      "https://x.com/search?q=Nakuru%20Athletic%20Club%20-NAC&src=typed_query&f=top",
    icon: <X className="size-4" />,
  },
  {
    id: 4,
    text: "Tiktok",
    hrefLink: "https://www.tiktok.com/@nakuru_athletic_club",
    icon: <Music className="size-4" />,
  },
];

export const contactLinks = [
  {
    id: 1,
    text: "oginga odinga, Nakuru, Kenya",
    icon: <MapIcon className="size-4" />,
  },
  {
    id: 2,
    text: "0702 827 771",
    icon: <PhoneCallIcon className="size-4" />,
  },
  {
    id: 3,
    text: "athleticsclubnakuru@gmail.com",
    icon: <MailIcon className="size-4" />,
  },
];

const currentYear = new Date().getFullYear();

export default function FooterSection() {
  return (
    <>
      <section className="min-h-[40vh]  bg-zinc-950/90 text-slate-200 w-full px-16 pb-4">
        <div className="flex flex-wrap h-full items-center md:items-start justify-center md:justify-evenly gap-y-8 py-20">
          <Link href="/">
            <Image
              src={logo}
              height={200}
              width={200}
              alt="logo"
              className="object-contain w-32 mx-10"
            />
          </Link>
          <div className="mr-0 w-full md:w-auto md:mr-48">
            <p className="font-semibold ">Nakuru Athletic Club</p>
            <ul className="flex flex-col gap-2 mt-4 text-sm">
              {navLinks.map((link) => (
                <Link href={link.hrefLink} key={link.id}>
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    className="hover:text-blue-500"
                  >
                    {link.text}
                  </motion.li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="mr-0 w-full md:w-auto md:mr-48">
            <p className="font-semibold ">Social</p>
            <ul className="flex flex-col gap-2 mt-4 text-sm">
              {socialLinks.map((link) => (
                <Link href={link.hrefLink} key={link.id} target="_blank">
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    className="hover:text-blue-400 flex items-center gap-2"
                  >
                    {link.icon}
                    {link.text}
                  </motion.li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="mr-0 w-full md:w-auto md:mr-48">
            <p className="font-semibold ">Contact</p>
            <ul className="flex flex-col gap-2 mt-4 text-sm space-y-1">
              {contactLinks.map((link) => (
                <motion.li
                  whileHover={{ scale: 0.9 }}
                  key={link.id}
                  className=" flex items-center gap-2"
                >
                  {link.icon}
                  {link.text}
                </motion.li>
              ))}
              <Link href="/contact#map" className="flex items-center gap-2 text-sm ">
              <MapPinnedIcon/>
              <li>Site Map</li>
              </Link>
            </ul>
          </div>
        </div>
        <p className="text-center  text-xs">
          {/* &#169; Copyright {currentYear} Nakuru Athletic Club */}
          Nakuru Athletic Club &#169; {currentYear} - Terms & Conditions - Privacy Policy 
        </p>
      </section>
    </>
  );
}
