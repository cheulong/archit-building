import type { NextPage } from 'next';
import { menus } from '@/constants/menu-items.ts';
import { MenuItem } from 'constants/menu-items';
import logo from '/public/assets/images/triangular-logo.svg';
import Link from 'next/link';
import Image from 'next/image';
const Navbar: NextPage = () => {
  return (
    <div className="w-5/6 mx-auto py-6">
      <div className="flex justify-between">
        <Link href="/">
          <div className="items-center flex">
            <Image src={logo} height={30} width={30} alt="logo" />
            <span className="pl-2  text-mainColor font-medium text-lg">
              Archit.
            </span>
          </div>
        </Link>
        <div>
          <ul className="flex space-x-8">
            {menus.map((item: MenuItem) => (
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
  );
};

export default Navbar;
