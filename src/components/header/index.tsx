import { NavLink } from "react-router-dom";

import logo from "../../assets/logo-base-white.png";

export function Header() {
  return (
    <header className="flex justify-between align-middle">
      <figure className="w-40">
        <NavLink to="/">
          <img src={logo} className="w-full object-cover" />
        </NavLink>
      </figure>
      <nav className="flex gap-5 items-center ">
        <NavLink className="hover:text-blue-500 transition-all" to="/">
          Home
        </NavLink>
        <NavLink className="hover:text-blue-500 transition-all" to="/category">
          Category
        </NavLink>
      </nav>
    </header>
  );
}
