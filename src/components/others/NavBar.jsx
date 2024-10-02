import React from 'react'
import Link from 'next/link'
const NavBar = () => {

  return (
    <>
      <nav className='flex bg-primary-blue p-5 justify-between  ' >
        <div className=" "> img</div>
        <div className="">
          <ul className=' hidden md:flex md:gap-10 ' >
            <li> <Link href={'/service'} > service</Link> </li>
            <li>Home</li>
            <li>Contact us</li>
            <li>ckhasc</li>
          </ul>
        </div>
        <div className="space-x-10 ">
          <button className=' hidden md:bg-black text-white  py-3 px-2 rounded-full transition-transform hover:bg-red-500  hover:scale-105 ' >Contact</button>
          <button className='bg-black text-white py-3 px-2 rounded-full transition-transform hover:bg-red-500  hover:scale-105 ' >International</button>
        </div>
      </nav>
    </>
  )
}

export default NavBar