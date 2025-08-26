import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navItems = [
    { name: "About", path: "/#" },
    { name: "Programs", path: "/#" },
    { name: "Get Involved", path: "/#" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/#" },
  ];

  return (
    <>
    <div>
   <nav className="w-full fixed top-0 left-0 bg-[#E8F9FF] text-[#707070] px-8 py-4 flex items-center shadow z-50">
  {/* Logo */}
  <h3 className="text-black font-bold text-xl">REFORM</h3>

  {/* Links in Center */}
  <ul className="flex gap-6 mx-auto">
    {navItems.map((item, index) => (
      <li key={index} >
       <NavLink
  to={item.path}
  className={({ isActive }) =>
    `no-underline text-[#707070] hover:text-black transition ${
      isActive ? "font-semibold" : ""
    }`
  }
>
  {item.name}
</NavLink>

  
      </li>
    ))}
  </ul>

<button className="appearance-none border border-gray-400 bg-[#E8F9FF] rounded-full px-4 py-2">
  Join the Movement
</button>
</nav>

    </div>
    
    </>
  );
}

export default Header;
