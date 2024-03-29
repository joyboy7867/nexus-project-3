"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font=Poppins({
  subsets:["latin"],
  weight:["800"]
})
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="fixed w-full z-20 ">
        <nav className="w-full bg-[#DCF2F1] text-black shadow">
          <div className="justify-between px-4  lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-2 ">
                <a href="#">
                  <h2 className={cn("text-2xl text-black font-extrabold",font.className)}>Techy</h2>
                  <p className=" text-black font-bold" >Software</p>
                </a>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={` lg:relative left-52 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
                // style={{transition:'height 0.3s ease-in-out'}}
              >
                <ul className="items-center justify-center  space-y-8 md:flex md:space-x-6 md:space-y-0">
                <Link href="/">
                  <li className="text-black  hover:bg-slate-600 hover:text-white p-3">
                    
                      <span className="hover:font-semibold">Home</span>
                  
                  </li>
                  </Link>
                  <Link href="/products">
                  <li className="text-black   hover:bg-slate-600 hover:text-white p-3">
                    
                      <span className="hover:font-semibold">Products/Services</span>
                   
                  </li>
                  </Link>
                  <Link href="/about">
                  <li className="text-black  hover:bg-slate-600 hover:text-white p-3">
                    
                      <span className="hover:font-semibold">About US</span>
                   
                  </li>
                  </Link>
                  <Link href="/contact">
                  <li className="text-black  hover:bg-slate-600 hover:text-white p-3">
                    
                      <span className="hover:font-semibold">Contact US</span>
                   
                  </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
