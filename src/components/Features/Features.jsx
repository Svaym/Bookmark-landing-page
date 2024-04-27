import { useState } from "react";
import { tab } from './tabs'
export default function Features() {
  const [toggle, setToggle] = useState(1)
  function updateToggle(id) {
    setToggle(id)
  }
  return(
    <section className="relative">
      <div className="container">
        <h2 className="font-medium text-slate-800 text-center text-2xl mt-14">
          Features
        </h2>
        <p className="text-center mx-auto w-[45%] mt-6 md:w-2/3 sm:w-4/5 sm-text-[15px] xxs:w-[90%]">
        Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
        </p>
        <div className="relative grid grid-cols-3 grid-rows-1 justify-center mt-14 w-[50%] pb-6 mx-auto border-b-2 border-zinc-400 md:flex md:flex-col md:gap-y-3 md:border-b-0">
            <button className={toggle === 1 ? 'relative text-center transition duration-300 ease-in-out cursor-pointer after:absolute after:w-full after:bg-rose-400 after:h-1 after:-bottom-[26px] after:left-0 text-slate-950 lg:text-sm md:text-lg md:border-t-2 md:pt-3 xxs:text-base animate-fade md:after:-bottom-4' : 'text-center transition duration-300 ease-in-out cursor-pointer hover:text-slate-600 lg:text-sm md:text-lg md:border-t-2 md:border-zinc-400 md:pt-3 xxs:text-base'} onClick={() => updateToggle(1)}>Simple Bookmarking</button>
            <button className={toggle === 2 ? 'relative text-center transition duration-300 ease-in-out cursor-pointer after:absolute after:w-full after:bg-rose-400 after:h-1 after:-bottom-[26px] after:left-0 text-slate-950 lg:text-sm md:text-lg md:border-t-2 md:pt-3 xxs:text-base animate-fade md:after:-bottom-4' : 'text-center transition duration-300 ease-in-out cursor-pointer hover:text-slate-600 lg:text-sm md:text-lg md:border-t-2 md:border-zinc-400 md:pt-3 xxs:text-base'} onClick={() => updateToggle(2)}>Speedy Searching</button>
            <button className={toggle === 3 ? 'relative text-center transition duration-300 ease-in-out cursor-pointer after:absolute after:w-full after:bg-rose-400 after:h-1 after:-bottom-[26px] after:left-0 text-slate-950 lg:text-sm md:text-lg md:border-y-2 md:py-3 xxs:text-base animate-fade md:after:-bottom-1' : 'text-center transition duration-300 ease-in-out cursor-pointer hover:text-slate-600 lg:text-sm md:text-lg md:border-t-2 md:border-zinc-400 md:pt-3 xxs:text-base'} onClick={() => updateToggle(3)}>Easy Sharing</button>
        </div>
        <div className={toggle === 1 ? 'block flex items-center mt-12 animate-fade gap-x-28 lg:gap-x-10 md:flex-col md:gap-x-0' : 'hidden'}>
          <img className="w-[90%] ml-16 h-96 xl:w-[90%] xl:h-80 lg:w-full lg:h-72 lg:ml-18 md:w-[60%] md:h-80 md:mx-auto sm:w-[80%] sm:h-60 xxs:w-[95%]" src={tab[0].image} alt="image" />
          <div className="absolute bg-indigo-500 rounded-r-full top-[70%] -z-10 left-0 w-[30%] h-[40%] md:top-[63%] md:h-[22%] md:w-1/2 sm:w-[85%] sm:h-1/5 sm:top-[62%] xxs:top-[59%]"></div>
          <div>
            <h2 className="font-medium text-slate-800 text-2xl md:text-center md:mt-20">{tab[0].subtitle}</h2>
            <p className="w-[75%] mt-6 lg:w-[70%] md:text-center md:mx-auto md:mt-2 xxs:w-[90%]">{tab[0].description}</p>
            <button className="bg-indigo-500 py-3 px-4 mt-8 rounded-md text-white transition-colors duration-300 ease-in hover:bg-indigo-700 active:bg-indigo-900 md:hidden">{tab[0].button}</button>
          </div>
        </div>
        <div className={toggle === 2 ? 'block flex items-center mt-12 animate-fade  gap-x-28 lg:gap-x-10 md:flex-col md:gap-x-0' : 'hidden'}>
          <img className="w-[75%] ml-16 h-[26rem] xl:w-[90%] xl:h-96 lg:w-full lg:h-[21rem] lg:ml-18 md:w-[60%] md:h-[22rem] md:mx-auto sm:w-[80%] sm:h-68 xxs:w-[95%]" src={tab[1].image} alt="image" />
          <div className="absolute bg-indigo-500 rounded-r-full top-[67%] -z-10 left-0 w-[30%] h-[40%] md:top-[60%] md:h-[22%] md:w-1/2 sm:w-[85%] sm:h-1/5 sm:top-[59%]"></div>
          <div>
            <h2 className="font-medium text-slate-800 text-2xl md:text-center md:mt-20">{tab[1].subtitle}</h2>
            <p className="w-[75%] mt-6 lg:w-[70%] md:text-center md:mx-auto md:mt-2 xxs:w-[90%]">{tab[1].description}</p>
            <button className="bg-indigo-500 py-3 px-4 mt-8 rounded-md text-white transition-colors duration-300 ease-in hover:bg-indigo-700 active:bg-indigo-900 md:hidden">{tab[1].button}</button>
          </div>
        </div>
        <div className={toggle === 3 ? 'block flex items-center mt-12 animate-fade  gap-x-28 lg:gap-x-10 md:flex-col md:gap-x-0' : 'hidden'}>
          <img className="w-[75%] ml-16 h-[26rem] xl:w-[90%] xl:h-96 lg:w-full lg:h-[21rem] lg:ml-18 md:w-[60%] md:h-[22rem] md:mx-auto sm:w-[80%] sm:h-68 xxs:w-[95%]" src={tab[2].image} alt="image" />
          <div className="absolute bg-indigo-500 rounded-r-full top-[67%] -z-10 left-0 w-[30%] h-[40%] md:top-[60%] md:h-[22%] md:w-1/2 sm:w-[85%] sm:h-1/5 sm:top-[59%]"></div>
          <div>
            <h2 className="font-medium text-slate-800 text-2xl md:text-center md:mt-20">{tab[2].subtitle}</h2>
            <p className="w-[75%] mt-6 lg:w-[70%] md:text-center md:mx-auto md:mt-2 xxs:w-[90%]">{tab[2].description}</p>
            <button className="bg-indigo-500 py-3 px-4 mt-8 rounded-md text-white transition-colors duration-300 ease-in hover:bg-indigo-700 active:bg-indigo-900 md:hidden">{tab[2].button}</button>
          </div>
        </div>
      </div>
    </section>
  )
}