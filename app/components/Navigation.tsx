import { Link, useLocation } from "react-router";

const Navigation = ( { position }: { position: 'header' | 'footer' | 'burger-menu'} ) => {

  const location = useLocation()

  const currentPath = location.pathname

  function classDefinitionByLocation(path: string) {
    if (position === 'header') {
      return `header-link ${currentPath === `/${path ? `category=${path}` : ''}` ? `is-active` : ``}`
    } else if (position === 'footer') {
      return `footer-link`
    } else {
      return
    }
  }

  return (
    <nav className={`${position === 'header' ? `text-[clamp(1rem,1.07vw,1.25rem)]` : ``}`}>
      <ul className={`${position === 'header' ? `font-semibold hidden lg:flex flex-row gap-8` :
        (position === 'footer' ? `flex flex-col gap-2` : `flex flex-col items-center gap-6`)}`}
      >
        <li className={classDefinitionByLocation('')}>
          <Link className='p-1' to="/">Homepage</Link>
        </li>
        <li className={classDefinitionByLocation('ai')}>
          <Link className='p-1' to="/category=ai">AI</Link>
        </li>
        <li className={classDefinitionByLocation('business')}>
          <Link className='p-1' to="/category=business">Business</Link>
        </li>
        <li className={classDefinitionByLocation('culture')}>
          <Link className='p-1' to="/category=culture">Culture</Link>
        </li>
        <li className={classDefinitionByLocation('entertainment')}>
          <Link className='p-1' to="/category=entertainment">Entertainment</Link>
        </li>
        <li className={classDefinitionByLocation('health')}>
          <Link className='p-1' to="/category=health">Health</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;