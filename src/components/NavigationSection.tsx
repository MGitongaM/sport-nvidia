"use client";
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
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { navLinks } from "@/StaticData/navigationLinks";

export default function NavigationSection() {
  const pathName = usePathname();
  return (
    <>
      {/* Desktop Navigation  */}
      <div className="hidden lg:block fixed z-50">
        <NavigationMenu className="bg-black/30 backdrop-blur-xl text-white overflow-hidden">
          <NavigationMenuList>
            <div className="flex flex-wrap md:flex-nowrap w-screen justify-between items-center px-16">
              <NavigationMenuItem>
                <Link
                  href="/"
                  className=" flex items-center gap-2 md:w-[20rem]"
                >
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
                        {/* <li className="hover:text-blue-500 font-semibold text-sm"> */}
                        <li
                          className={cn(
                            // pathName == link.hrefLink
                            // pathName.includes(link.hrefLink)
                            (link.hrefLink === "/" && pathName === "/") ||
                            (link.hrefLink !== "/" && pathName.includes(link.hrefLink))
                              ? "text-blue-500 font-semibold"
                              : "hover:text-blue-500 font-semibold text-slate-300"
                          )}
                        >
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
      <div className="flex justify-between px-4 bg-black lg:hidden">
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
