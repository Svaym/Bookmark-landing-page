import NavLinks from "./NavLinks"
export default function DesktopMenu() {
  return(
    <header className="py-3 md:hidden">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <a href="#" className="transition duration-200 ease-linear hover:hue-rotate-60 active:hue-rotate-90">
              <img src="../assets/logo-bookmark.svg" alt="Logo" />
            </a>
          </div>
          <div className="flex gap-x-7 items-center">
            <NavLinks />
            <button className="text-white bg-rose-500 uppercase px-4 py-2 rounded-md border-2 border-rose-500 transition-colors duration-200 ease-linear hover:text-rose-500 hover:bg-white active:text-rose-700 active:border-rose-700">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}