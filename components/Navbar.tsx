'use client';

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href='/'>
        <Image src="/hilink-logo.svg" alt="logo" width={74} height="29"/>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label} 
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setClick(prev => !prev)}
      />

      { click && 
        <div className="absolute bg-black right-0 top-16 px-5 py-3 mr-3 rounded-md shadow-xl">
          <ul className="flex flex-col h-full">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="regular-16 text-white flex-center cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label} 
              </Link>
            ))}
          </ul>
        </div>
      }
    </nav>
  )
}

export default Navbar