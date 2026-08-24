import Navigation from "~/components/Navigation";
import Logo from "~/components/Logo";
import {useState} from "react";

const Header = () => {
  const [burgerMenuClick, setBurgerMenuClick] = useState(false)

  return (
    <header className={`dark-mode-bg-alt bg-white shadow-sm px-12 py-4 xl:py-2`}>
      <div className="flex justify-between items-center gap-4">
        <Logo />
        <Navigation position='header' />
        <div className="hidden lg:flex flex-row gap-6">
          <button
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className="fill-current">
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </button>
          {/*<button*/}
          {/*  type="button"*/}
          {/*>*/}
          {/*  <svg*/}
          {/*    width="24"*/}
          {/*    height="24"*/}
          {/*    viewBox="0 0 100 100"*/}
          {/*    fill="none"*/}
          {/*    xmlns="http://www.w3.org/2000/svg"*/}
          {/*  >*/}
          {/*    <path*/}
          {/*      d="M78 10*/}
          {/*       C52 16 36 31 36 50*/}
          {/*       C36 69 52 90 92 90*/}
          {/*       C64 82 57 68 57 50*/}
          {/*       C57 32 64 20 92 10Z"*/}
          {/*      stroke="currentColor"*/}
          {/*      stroke-width="4"*/}
          {/*      stroke-linejoin="round"*/}
          {/*    />*/}
          {/*  </svg>*/}
          {/*</button>*/}
        </div>

        <button
          className="lg:hidden text-3xl"
          type="button"
          onClick={() => setBurgerMenuClick(!burgerMenuClick)}
        >
          ≡
        </button>
      </div>

      <div
        className="lg:hidden"
        style={{
          maxHeight: burgerMenuClick ? '500px' : '0',
          transition: 'max-height 0.5s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease',
          overflow: 'hidden',
        }}
      >
        <Navigation position='burger-menu' />
      </div>
    </header>
  );
};

export default Header;