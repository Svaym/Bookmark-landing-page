import { useState } from "react";
import { que } from './data';
export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(null)
  function handleClick(id) {
    setActiveIndex(id === activeIndex ? null : id)
  }
  return(
    <section>
      <div className="container">
        <h2 className="mt-40 font-medium text-slate-800 text-center text-2xl md:mt-28">
          Frequently Asked Questions
        </h2>
        <p className="text-center mx-auto w-[45%] mt-6 md:w-2/3 sm:w-4/5 sm-text-[15px] xxs:w-[90%]">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
        <div className="flex flex-col gap-y-3">
          <hr className="w-1/2 mx-auto mt-12 md:w-4/5 xxs:w-[90%]"/>
            {que.map((item, id) => (
              <>
                <button key={item.question} className="flex items-center justify-between w-1/2 mx-auto text-slate-800 tracking-normal transition duration-500 ease-in-out hover:text-rose-500 active:text-rose-700 md:w-4/5 xs:text-sm xxs:w-[90%]" onClick={() => handleClick(id)}>
                  {item.question}
                  <img src="../assets/icon-arrow.svg" alt="arrow" />
                </button>
                {id === activeIndex && <p className="w-1/2 mx-auto animate-fade md:w-4/5 xs:text-sm xxs:w-[90%]">{item.answer}</p>}
                <hr className="w-1/2 mx-auto md:w-4/5 xxs:w-[90%]"/>
              </>
            ))}
        </div>
        <button className="bg-indigo-500 py-3 px-4 mt-8 rounded-md text-white mx-auto block transition-colors duration-300 ease-in hover:bg-indigo-700 active:bg-indigo-900">More Info</button>
      </div>
    </section>
  )
}
