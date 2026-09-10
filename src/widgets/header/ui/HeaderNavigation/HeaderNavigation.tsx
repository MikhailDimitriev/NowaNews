import { NavLink } from "react-router";
import {
  NAVIGATION_LINKS
} from "~/widgets/header/model/constants/navigationsLinks";

const HeaderNavigation = ({ position }: { position: 'header' | 'burger-menu'} ) => {

  return (
    <nav className={`${position === 'header' ?
      `text-[clamp(1rem,1.07vw,1.25rem)] font-semibold hidden lg:flex flex-row gap-6 xl:gap-8` :
      `flex flex-col items-center gap-6`}`}
    >
      {NAVIGATION_LINKS.map((link) => (
        <NavLink
          className={({ isActive }) => `header-link  ${isActive ? `is-active` : ``}`}
          key={link.href} to={link.href}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default HeaderNavigation;