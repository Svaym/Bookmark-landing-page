import { useState } from "react";
export default function Form() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [emptyInput, setEmptyInput] = useState(true);
  function handleEmail(event) {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    const isValid = /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(inputEmail);
    setIsValid(isValid);
    setEmptyInput(inputEmail === '')
  };
  const submitForm = (event) => {
    event.preventDefault();
    if (isValid){
      setEmail('');
      setEmptyInput(true);
      alert('Form is valid!')
    } else {
      alert('Form is not valid!')
    }
  }
  return(
    <section className="bg-indigo-500 text-white mt-16 text-sm">
      <div className="container">
        <h4 className="text-center pt-16 tracking-[.4em] uppercase">
          35,000+ already joined
        </h4>
        <h2 className="text-center text-2xl font-medium mx-auto w-1/4 mt-8 xl:w-2/5 md:w-2/3 xxs:w-3/4">
          Stay up-to-date with what we’re doing
        </h2>
        <form className="flex items-center gap-x-4 justify-center mt-8 pb-16 xs:flex-col xs:gap-x-0 xs:gap-y-6 xs:items-stretch" action="" onSubmit={submitForm}>
          <label htmlFor="email">
            <input type="text" className={isValid==true ? 'relative text-zinc-400 px-8 py-3.5 rounded-md xs:flex-1 xs:px-0 xs:pl-4 xs:w-full' : 'relative text-zinc-400 px-8 py-3.5 border-rose-500 border-2 rounded-md xs:flex-1 xs:px-0 xs:pl-4 xs:w-full'} placeholder="Enter your email address" value={email} onChange={handleEmail} />
            <h5 className={ isValid ? "hidden" : "absolute bg-rose-500 rounded-md"}>Whoops, valid email required</h5>
          </label>
          <button type="submit" disabled={emptyInput} className="text-white bg-rose-500 uppercase px-4 py-3 rounded-md border-2 border-rose-500 transition-colors duration-200 ease-linear hover:text-rose-500 hover:bg-white active:text-rose-700 active:border-rose-700">Contact Us</button>
        </form>
      </div>
    </section>
  )
}
