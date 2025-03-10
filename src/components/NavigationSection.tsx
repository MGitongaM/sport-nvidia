import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { MenuIcon } from "lucide-react";
export const navLinks = [
  {
    id: 1,
    hrefLink: "/",
    text: "Home",
  },
  {
    id: 2,
    hrefLink: "/about",
    text: "About Us",
  },
  {
    id: 3,
    hrefLink: "/membership",
    text: "Membership",
  },
  {
    id: 4,
    hrefLink: "/events",
    text: "Tournaments",
  },
  {
    id: 5,
    hrefLink: "/news-and-updates",
    text: "News and Updates",
  },
  {
    id: 6,
    hrefLink: "/contact",
    text: "Contact Us",
  },
  // {
  //   id: 2,
  //   hrefLink: "/#golf-courses",
  //   text: "Sports & Activities",
  // },
  // {
  //   id: 3,
  //   hrefLink: "/#tournaments",
  //   text: "Tournaments",
  // },
  // {
  //   id: 4,
  //   hrefLink: "/#news-&-updates",
  //   text: "News & Updates",
  // },
];
export default function NavigationSection() {
  return (
    <>
      {/* Desktop Navigation  */}
      <div className="hidden md:block fixed z-10">
        <NavigationMenu className="bg-black/30 backdrop-blur-xl text-white overflow-hidden">
          <NavigationMenuList>
            <div className="flex flex-wrap md:flex-nowrap w-screen justify-between items-center px-16">
              <NavigationMenuItem >
                <Link href="/" className=" flex items-center gap-2 md:w-[20rem]">
                  <Image
                    src={logo}
                    height={200}
                    width={200}
                    alt="logo"
                    className="object-cover w-16"
                  />
                  <span className="font-semibold text-slate-200">
                    Nakuru Athletic Club{" "}
                  </span>
                </Link>
              </NavigationMenuItem>
              <div className="flex flex-wrap md:flex-nowrap gap-5 items-center justify-end w-full">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.id}>
                    <ul>
                      <Link href={link.hrefLink}>
                        <li className="hover:text-blue-500 font-semibold text-sm">
                          {link.text}
                        </li>
                      </Link>
                    </ul>
                  </NavigationMenuItem>
                ))}
              </div>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Mobile Navigation */}
      <div className="flex justify-between px-4 bg-black md:hidden">
        <Link href="/" className=" flex items-center gap-2 w-[20rem]">
          <Image
            src={logo}
            height={200}
            width={200}
            alt="logo"
            className="object-cover w-16"
          />
          <span className="font-semibold text-slate-200">
                    Nakuru Athletic Club{" "}
                  </span>
        </Link>
        <Sheet>
          <SheetTrigger>
            <MenuIcon className=" text-blue-300" />
          </SheetTrigger>
          <SheetContent className="bg-zinc-700">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <NavigationMenu className="">
              <NavigationMenuList>
                <div className="flex flex-col mt-10 gap-5 items-start justify-end w-full text-slate-300">
                  {navLinks.map((link) => (
                    <NavigationMenuItem key={link.id}>
                      <ul>
                        <Link href={link.hrefLink}>
                          <SheetClose asChild>
                            <li className=" hover:text-green-500 font-semibold text-sm ">
                              {link.text}
                            </li>
                          </SheetClose>
                        </Link>
                      </ul>
                    </NavigationMenuItem>
                  ))}
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
