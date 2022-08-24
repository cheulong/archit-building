// @ts-ignore
import { navLink, MenuItem } from '@/constants/menu-items.ts';
import type { NextPage } from 'next';
import logo from '/public/assets/images/triangular-logo.svg';
import close from '/public/assets/icons/close.svg';
import menu from '/public/assets/icons/menu.svg';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const Navbar: NextPage = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="w-5/6 mx-auto py-6 absolute w-full">
      <div className="flex justify-between items-center md:w-4/5  md:mx-auto mx-4">
        <Link href="/">
          <div className="items-center flex">
            <Image src={logo} height={30} width={30} alt="logo" />
            <span className="pl-2  text-mainColor font-medium text-lg">
              Archit.
            </span>
          </div>
        </Link>
        <div>
          <ul className="sm:flex hidden space-x-8">
            {navLink.map((item: MenuItem) => (
              <li key={item.id}>
                <Link href={item.to}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <Image
              src={toggleMenu ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
            <div
              className={`${
                !toggleMenu ? 'hidden' : 'flex'
              } p-6 absolute top-10 right-0 ml-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="flex space-y-4 flex-col items-end">
                {navLink.map((item: MenuItem) => (
                  <li key={item.id}>
                    <Link href={item.to}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
