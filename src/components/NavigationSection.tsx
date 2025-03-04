import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Image from "next/image";
import logo from "../../public/images/transparent-logo.png";
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
    hrefLink: "/#golf-courses",
    text: "Golf Courses",
  },
  {
    id: 3,
    hrefLink: "/#tournaments",
    text: "Tournaments",
  },
  {
    id: 4,
    hrefLink: "/#news-&-updates",
    text: "News & Updates",
  },
];
export default function NavigationSection() {
  return (
    <>
      {/* Desktop Navigation  */}
      <div className="hidden md:block">
        <NavigationMenu className="bg-black text-white overflow-hidden">
          <NavigationMenuList>
            <div className="flex flex-wrap md:flex-nowrap w-screen justify-between items-center px-16">
              <NavigationMenuItem>
                <Link href="/">
                  <Image
                    src={logo}
                    height={200}
                    width={200}
                    alt="logo"
                    className="object-cover w-28"
                  />
                </Link>
              </NavigationMenuItem>
              <div className="flex flex-wrap md:flex-nowrap gap-5 items-center justify-end w-full">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.id}>
                    <ul>
                      <Link href={link.hrefLink}>
                        <li className="hover:text-green-500 font-semibold text-sm">
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
      <div className="flex justify-between px-4 bg-green-50 md:hidden">
        <Link href="/">
          <Image
            src={logo}
            height={200}
            width={200}
            alt="logo"
            className="object-cover w-28"
          />
        </Link>
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className="bg-green-50">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <NavigationMenu className="">
              <NavigationMenuList>
                <div className="flex flex-col mt-10 gap-5 items-start justify-end w-full">
                  {navLinks.map((link) => (
                    <NavigationMenuItem key={link.id}>
                      <ul>
                        <Link href={link.hrefLink}>
                          <SheetClose asChild>
                            <li className="hover:text-green-500 font-semibold text-sm ">
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
