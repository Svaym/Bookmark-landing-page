import { cards } from './card';
function Add(props) {
  return(
    <div className="flex cursor-pointer flex-col items-center py-5 shadow-lg w-4/5 mx-auto transition duration-500 ease-in-out even:translate-y-12 last:translate-y-24 hover:scale-125 md:w-1/2 sm:w-3/4">
      <img src={props.image} alt="browser" className="h-24 mt-3 mx-auto" />
      <h3 className="text-center mt-4 font-medium text-slate-800 text-lg">{props.title}</h3>
      <h4 className="text-center mt-1">{props.version}</h4>
      <img className="mx-auto mt-14" src={props.dots} alt="dots" />
      <button className="bg-indigo-500 rounded-md border-2 shadow-lg mx-auto block mt-3 text-white border-indigo-500  py-3 px-5 transition-colors duration-300 ease-linear hover:bg-white hover:text-indigo-500 active:border-indigo-800 active:text-indigo-800 lg:text-[15px] lg:px-3 lg:py-2">
        Add & Install Extension
      </button>
    </div>
  )
}
export default function Extension() {
  return(
    <section>
      <div className="container">
        <h2 className="mt-40 font-medium text-slate-800 text-center text-2xl md:mt-28">
          Download the extension
        </h2>
        <p className="text-center mx-auto w-[45%] mt-6 md:w-2/3 sm:w-4/5 sm-text-[15px] xxs:w-[90%]">
          We’ve got more browsers in the pipeline. Please do let us know if you’ve
          got a favourite you’d like us to prioritize.
        </p>
        <div className="grid grid-rows-1 grid-cols-3 gap-x-2 mt-7 md:flex md:flex-col md:gap-x-0 md:gap-y-3">
          <Add image={cards[0].image} title={cards[0].title} version={cards[0].version} dots={cards[0].dots}/>
          <Add image={cards[1].image} title={cards[1].title} version={cards[1].version} dots={cards[1].dots}/>
          <Add image={cards[2].image} title={cards[2].title} version={cards[2].version} dots={cards[2].dots}/>
        </div>
      </div>
    </section>
  )
}
