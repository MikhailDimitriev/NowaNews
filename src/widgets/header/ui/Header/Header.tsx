import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import Logo from "~/shared/ui/Logo";
import type {Categories} from "~/entities/article";
import Search from "~/widgets/search";
import HeaderNavigation from "~/widgets/header/ui/HeaderNavigation";
import HeaderMobile from "~/widgets/header/ui/HeaderMobile";

const Header = () => {
  const [burgerMenuClick, setBurgerMenuClick] = useState(false)

  const location = useLocation()
  const currentPath = location.pathname

  const category = currentPath.split('').slice(10).join('') as Categories

  useEffect(() => {
    setBurgerMenuClick(false)
  }, [currentPath]);

  return (
    <header className="inline-padding dark-mode-bg-alt bg-white shadow-sm py-4 xl:py-2 sticky top-0 z-1000">
      <div className="flex justify-between items-center gap-3 sm:gap-4">
        <Logo />
        <HeaderNavigation position='header' />
        <div className="flex flex-row items-center gap-3 sm:gap-6 md:gap-8">

          <Search category={category}/>

          <button
            className="lg:hidden text-[36px]"
            onClick={() => setBurgerMenuClick(!burgerMenuClick)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className="fill-current">
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          </button>
        </div>
      </div>

      <HeaderMobile state={burgerMenuClick} />
    </header>
  );
};

export default Header;