import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as HiIcons from "react-icons/hi";
import {
  NavAnimations,
  containerVars,
  menuVars,
  mobileLinkVars,
} from "../../utils/motion";

import { AnimatePresence, motion } from "framer-motion";
import { IconContext } from "react-icons";
const navLinks = [{ title: "Home", href: "/https://innovateai.dev" }];

export default function Navbar() {
   
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
      setOpen((prevOpen) => !prevOpen);
    };
    const closeMenu = () => {
      setOpen(false);
    };
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full text-white font-clash">
      <div className=" fixed w-full sm:h-[10vh] h-[8vh] bg-black/40 z-10 flex items-center">
        <div className=" max-w-[1440px] mx-auto w-full">
          <div className="w-full flex justify-between items-center sm:px-[5%] px-[4%]">
            <Link to="/">
              {" "}
              <h4 className="text-white font-bold text-2xl">DEVELOP AI</h4>
            </Link>

            <div className="sm:flex hidden gap-6  items-center">
              {/* <button>Login</button> */}
              <button
                className="bg-white text-black px-8 py-2 rounded-[20px]"
                onClick={() =>
                  (window.location.href = "https://innovateai.dev")
                }
              >
                Home
              </button>
            </div>
            <div
              className="sm:hidden flex rounded-[8px] bg-white p-2 text-black"
              onClick={toggleMenu}
            >
              <IconContext.Provider value={{ size: "22px" }}>
                <HiIcons.HiMenuAlt4 />
              </IconContext.Provider>
            </div>
          </div>
          <div>
            <AnimatePresence>
              {open && (
                <motion.div
                  variants={menuVars}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="fixed left-0 top-0 h-screen w-full origin-top bg-black text-white p-10 "
                >
                  <div className="flex h-full flex-col">
                    <div className="flex justify-between">
                      <Link href="/">
                        {" "}
                        <div>
                          <h4 className="text-white font-bold text-2xl">
                            DEVELOP AI
                          </h4>
                        </div>
                      </Link>
                      <p
                        className="text-md cursor-pointer "
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
                      className="flex h-full flex-col items-center justify-center gap-4"
                    >
                      <motion.div
                        variants={mobileLinkVars}
                        className="text-5xl uppercase "
                      >
                        <Link
                          onClick={() =>
                            (window.location.href = "https://innovateai.dev")
                          }
                        >
                      Home
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}


