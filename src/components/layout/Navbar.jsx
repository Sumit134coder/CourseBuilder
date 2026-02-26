import Image from "next/image";
import Link from "next/link";
import HeroIconDark from "@/assets/images/heroIcon_dark.svg";
import AuthActions from "./AuthActions";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blogs" },
  { name: "About Us", path: "/about" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full bg-white z-100 shadow">
      <nav
        className="flex items-center justify-between px-31.5 py-4"
        aria-label="Primary navigation"
      >
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={HeroIconDark}
            alt="Course Builder"
            width={144}
            height={83}
            className="max-h-[83px]"
            priority
          />
        </Link>

        <div className="flex items-center gap-10">
          <ul className="flex items-center gap-[80px] text-dark-600">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link className="link" href={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <AuthActions />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
