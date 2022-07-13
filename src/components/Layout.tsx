import React, { ReactNode } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow flex flex-col justify-end items-start md:justify-center bg-hero bg-cover bg-no-repeat bg-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
