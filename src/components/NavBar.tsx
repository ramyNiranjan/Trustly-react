import React from "react";
import logo from "../assets/Trustly_Logotype.png";

type Props = {};

function NavBar(props: Props) {
  return (
    <header className="flex justify-center sm:justify-start w-screen">
      <div className="w-36">
        <img
          src={logo}
          alt="header-logo"
          className="max-w-full h-auto border-none"
        />
      </div>
    </header>
  );
}

export default NavBar;
