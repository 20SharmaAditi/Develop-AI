import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavAnimations,
  containerVars,
  menuVars,
  mobileLinkVars,
} from "../utils/motion";

import * as HiIcons from "react-icons/hi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/" },
  { title: "Features", href: "/" },
  { title: "Contact", href: "/" },
  { title: "Blog", href: "/" },
  { title: "Product", href: "/" },
];

export default function Navbar({  parts,promptData }) {
   const navs = parts?.navLinks;
     const logoo = promptData?.title;
  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <NavbarScroll
            isScrolling={isScrolling}
            parts={parts}
            promptData={promptData}
          />
        ) : (
          <NavbarFixed parts={parts} promptData={promptData} />
        )}
      </AnimatePresence>
    </>
  );
}

function NavbarFixed({  parts,promptData }) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const navs = parts?.navLinks;
   const logoo = promptData?.title;
  return (
    <header>
      <div className="fixed z-10 w-full h-[10vh] bg-[#F9F9F9] flex items-center font-clash">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="w-full flex justify-between items-center px-[5%]">
            <div className="flex gap-3 items-center">
              <h4 className=" font-bold uppercase">{logoo}</h4>
            </div>
            <nav className="sm:flex hidden gap-5 items-center  text-base font-medium">
              {navs &&
                navs.map((nav, index) => (
                  <div key={index}>
                    <Link className="text-black">{nav.title}</Link>
                  </div>
                ))}
            </nav>
            <div
              className="sm:hidden flex bg-black text-white p-2 rounded-[8px]"
              onClick={toggleMenu}
            >
              <IconContext.Provider value={{ size: "22px" }}>
                <HiIcons.HiMenuAlt4 />
              </IconContext.Provider>
            </div>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed left-0 top-0 w-full h-screen origin-top bg-yellow-400 text-black p-10"
              >
                <div className="flex h-full flex-col">
                  <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                      <h4 className="font-clash font-bold">
                        {promptData.title}
                      </h4>
                    </div>
                    <p
                      className="cursor-pointer text-md text-black"
                      onClick={toggleMenu}
                    >
                      Close
                    </p>
                  </div>
                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col h-full justify-center  items-center gap-4 "
                  >
                    {navs &&
                      navs.map((nav, index) => (
                        <div className="overflow-hidden" key={index}>
                          <MobileNavLink title={nav.title} href="/" />
                        </div>
                      ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

function NavbarScroll({ isScrolling,parts,promptData }) {
   const navs = parts?.navLinks;
    const logoo = promptData?.title;
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="fixed z-[999]  justify-between font-clash  bg-[#FFFFFF08] px-7 sm:py-4 py-1 rounded-[100px] ts-bg left-1/2 top-10"
    >
      <ul className="sm:flex hidden items-center sm:space-x-8 space-x-6 text-black font-medium text-base ">
        {navs &&
          navs.map((nav, index) => (
            <div key={index}>
              <li>{nav.title}</li>
            </div>
          ))}
       
      </ul>
    </motion.nav>
  );
}

const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
