import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Separator } from "./ui/separator";

interface MainNavProps {
  title: string;
}

const MainNav: React.FC<MainNavProps> = ({ title }) => {
  return (
    <>
      <nav className="flex items-center justify-between w-full px-9 py-6 border-b-2">
        <Link href="/" className="font-black text-5xl">
          {title}
        </Link>
        <ThemeToggle />
      </nav>
    </>
  );
};
export default MainNav;
