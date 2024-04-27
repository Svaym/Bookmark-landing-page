import { MdOutlineMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
export default function MobileMenu({isActive}) {
  function Menu() {
    setClick(!click)
  }
  const [click, setClick] = useState(false)
  const Hamburger = <MdOutlineMenu className="cursor-pointer brightness-200 right-[2%] absolute h-9 w-9 text-slate-700" onClick={Menu}/>
  const Close = <MdClose isActive={Menu} className="{isActive ? cursor-pointer right-[2%] absolute h-9 w-9 text-white : cursor-pointer right-[2%] absolute h-9 w-9 text-slate-700}" onClick={() => setClick(!click)} />
  return(
    <header style={{ backgroundColor:click ? "#1e293b" : "white"}} className="hidden md:block md:py-3 md:px-3 bg-slate-800 w-full fixed top-0 z-20 left-0 p-5 opacity-[0.95]">
      <div className="container">
        <div className='flex items-center justify-between'>
          <a href="#" className="brightness-200 transition duration-200 ease-linear hover:hue-rotate-60 active:hue-rotate-90">
            <img src="../assets/logo-bookmark.svg" alt="Logo" className="pointer-events-none" />
          </a>
          { click ? Close : Hamburger }
        </div>
        { click &&
        <div className="">
          <nav>
            <ul className='flex flex-col gap-y-3 mt-16'>
              <hr />
              <li><a href="#" className=' uppercase transition-colors duration-200 ease-in hover:text-zinc-300 active:text-zinc-200' onClick={Menu}>Features</a></li>
              <hr />
              <li><a href="#" className=' uppercase transition-colors duration-200 ease-in hover:text-zinc-300 active:text-zinc-200 ' onClick={Menu}>Pricing</a></li>
              <hr />
              <li><a href="#" className=' uppercase transition-colors duration-200 ease-in hover:text-zinc-300 active:text-zinc-200 ' onClick={Menu}>Contact</a></li>
              <hr />
              <button className="uppercase w-full py-3 mt-6 border-white text-white border-2 rounded-sm transition-colors duration-200 ease-linear hover:text-gray-200 hover:border-gray-200 active:text-gray-400 active:border-gray-400" onClick={Menu}>
                Login
              </button>
              <div className='mt-[11rem] flex gap-x-5 items-center mx-auto'>
                <a href="#" className='' onClick={Menu}>
                  <img src="../assets/icon-facebook.svg" alt="Facebook" />
                </a>
                <a href="#" className='' onClick={Menu}>
                  <img src="../assets/icon-twitter.svg" alt="Twitter" />
                </a>
              </div>
            </ul>
          </nav>
        </div>}
      </div>
    </header>
  )
}