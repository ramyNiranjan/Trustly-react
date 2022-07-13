import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col items-center justify-center w-full px-4 py-4 text-xs tracking-wide text-white font-normal bg-secondary  sm:flex-row sm:justify-between ">
      <span className="">Made with ❤</span>
      <span className="">&copy; Ramy Niranjan</span>
    </footer>
  );
};

export default Footer;
