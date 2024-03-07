import { Link } from "react-router-dom";

function NavMain() {
  return (
    <nav className=" flex gap-10 pl-4 mt-10 sm:mt-0">
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default NavMain;
