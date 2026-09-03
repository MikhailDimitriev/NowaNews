import { Link, useLocation } from "react-router";
import {NAVIGATION_LINKS} from "~/config/navigationsLinks";

const HeaderNavigation = ({ position }: { position: 'header' | 'burger-menu'} ) => {

  const location = useLocation()
  const currentPath = location.pathname

  function classDefinitionByLocation(path: string) {
    if (position === 'header') {
      return `header-link ${currentPath === path ? `is-active` : ``}`
    } else {
      return
    }
  }

  return (
    <nav className={`${position === 'header' ?
      `text-[clamp(1rem,1.07vw,1.25rem)] font-semibold hidden lg:flex flex-row gap-8` :
      `flex flex-col items-center gap-6`}`}
    >
      {NAVIGATION_LINKS.map((link) => (
        <Link key={link.href} className={`p-1 ${classDefinitionByLocation(link.href)}`} to={link.href}>{link.title}</Link>
      ))}
    </nav>
  );
};

export default HeaderNavigation;