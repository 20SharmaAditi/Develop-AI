

import React, { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/buttons/Button";
import Logo from "../logo/Logo";
import logo from "../../assets/logo.png"
import { NavAnimations } from "../../utils/motion";
import { IoClose } from "react-icons/io5";
import { useForm } from "../../../../context/store";
import { Link } from "react-router-dom";

export default function Navbar({ parts, promptData }) {
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

function NavbarFixed({ parts, promptData }) {
  const [toggle, setToggle] = useState(false);
    const navs = parts?.navLinks;
    const logoo = promptData?.title;
  return (
    <header className=" sm:h-[12vh] h-[10vh] bg-[#010415] flex items-center ">
      <div className="w-full fixed z-10   ">
        <div className="max-w-[1440px] mx-auto">
          <nav className=" sm:px-[4%] px-[6%] ">
            <div className="w-full flex flex-row justify-between items-center">
              {/* <Logo /> */}
              {/* <img src={logo} className="sm:w-[173px] w-[140px]" alt="logo"/> */}
              <h4 className="text-white font-semibold text-3xl uppercase">
                {logoo}
              </h4>
              <nav className="sm:flex hidden border border-[#303030] bg-[#FFFFFF08] px-7 py-4 rounded-[100px]">
                <ul className="flex items-center space-x-8 text-white font-extrabold text-xl">
                  {navs &&
                    navs.map((nav, index) => (
                      <div key={index}>
                        <Link className="text-white">{nav.title}</Link>
                      </div>
                    ))}
                </ul>
              </nav>

              {/* <div className="sm:hidden flex">
                <IconContext.Provider value={{ color: "white", size: "30px" }}>
                  <HiOutlineMenu />
                </IconContext.Provider>
              </div> */}
              <div className="sm:flex hidden">
                <Button variant={"anime"}>Launch App</Button>
              </div>
              <div
                className="sm:hidden flex"
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? (
                  <IoClose className="text-white text-[30px]" />
                ) : (
                  <HiOutlineMenu className="text-white text-[30px]" />
                )}
              </div>

              <div
                className={`${
                  toggle ? "flex" : "hidden"
                } p-6 bg-[#B44201] absolute top-10 right-0 mx-4 my-2 min-w-[170px] rounded-xl sidebar z-10`}
              >
                <ul className="list-none flex flex-col text-white font-medium gap-4 justify-end items-center flex-1">
                  {navs &&
                    navs.map((nav, index) => (
                      <div key={index}>
                        <Link className="text-black">{nav.title}</Link>
                      </div>
                    ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavbarScroll({ isScrolling,parts,promptData } ) {
  const navs = parts?.navLinks;
    const logoo = promptData?.title;
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="fixed z-[999]  justify-between  bg-[#FFFFFF08] px-7 sm:py-5 py-1 rounded-[100px] ts-bg left-1/2 top-10"
    >
      <ul className="sm:flex hidden items-center sm:space-x-8 space-x-6 text-white font-extrabold text-[15px] sm:text-xl">
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

