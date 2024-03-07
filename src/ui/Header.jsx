import { Link } from "react-router-dom";
import NavMain from "./NavMain";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex sm:justify-between items-center p-10 border-b border-red-600 flex-wrap bg-neutral-300">
      <Link to="/">
        <Logo />
      </Link>

      <NavMain />
    </header>
  );
}

export default Header;
