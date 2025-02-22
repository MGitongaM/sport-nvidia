import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Image from "next/image";
import logo from "../../public/images/transparent-logo.png"
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
    <NavigationMenu className="bg-green-50 ">
      <NavigationMenuList>
        <div className="flex flex-wrap md:flex-nowrap w-screen justify-between items-center px-16">
          <NavigationMenuItem>
            <Link href="/">
              <Image
                src={logo}
                height={200}
                width={200}
                alt="logo"
                className="object-contain w-24"
              />
            </Link>
          </NavigationMenuItem>
          <div className="flex flex-wrap md:flex-nowrap gap-5 items-center justify-end w-full">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.id}>
                <ul>
                  <Link href={link.hrefLink}>
                    {/* <li className="hover:border-b-4 hover:border-b-green-300">{link.text}</li> */}
                    <li className="hover:text-green-500">{link.text}</li>
                  </Link>
                </ul>
              </NavigationMenuItem>
            ))}
          </div>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
