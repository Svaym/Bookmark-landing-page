export default function Intro() {
  return(
    <section className="relative">
      <div className="absolute bg-indigo-500 rounded-l-full w-[28%] h-[60%] top-44 -z-10 right-0 lg:top-36 lg:h-[70%] md:h-[45%] md:w-[65%] md:top-32 sm:h-[40%] sm:top-16 xs:top-14 xs:h-[35%] xxs:top-[5.5rem] xxs:h-[30%]"></div>
      <div className="container">
        <div className="flex mt-24 md:flex-col-reverse">
          <div>
            <h1 className="font-medium text-slate-800 text-4xl w-[60%] mt-24 xl:w-[55%] xl:text-3xl lg:text-xl md:text-3xl md:text-center md:mx-auto md:pt-5 sm:w-[70%] xxs:text-2xl xxs:w-[75%]">
              A Simple Bookmark Manager
            </h1>
            <p className="w-[60%] mt-5 xl:w-[70%] lg:w-[80%] lg:text-[15px] md:text-center md:mx-auto md:w-[80%] xxs:w-[90%]">
              A clean and simple interface to organize your favourite websites. Open a new
              browser tab and see your sites load instantly. Try it for free.
            </p>
            <div className="md:flex md:justify-center">
              <div className="flex gap-x-4 pt-7 md:mx-auto">
                <button type="button" className="bg-indigo-500 rounded-md border-2 shadow-lg text-white border-indigo-500  py-3 px-4 transition-colors duration-300 ease-linear hover:bg-white hover:text-indigo-500 active:border-indigo-800 active:text-indigo-800 xxs:py-2 xxs:px-3 xxs:text-[15px]">
                Get it on Chrome
                </button>
                <button type="button" className="bg-zinc-400 rounded-md border-2 shadow-lg text-slate-800 border-zinc-400  py-3 px-4 transition-colors duration-300 ease-linear hover:bg-white hover:text-zinc-500 active:border-zinc-600 active:text-zinc-600 xxs:py-2 xxs:px-3 xxs:text-[15px]">
                Get it on Firefox
                </button>
              </div>
            </div>
          </div>
            <img src="../assets/illustration-hero.svg" alt="illustration" className="w-[90%] pointer-events-none lg:w-[105%] md:w-[75%] md:mx-auto md:relative md:-z-[1] xs:w-[90%]" />
        </div>
      </div>
    </section>
  )
}