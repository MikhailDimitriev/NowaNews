import React from 'react';
import {Link} from "react-router";

export interface FooterLinkObjectStructure {
  title: string;
  href: string;
}

const FooterNavigationList = ({linksArray}: {linksArray: FooterLinkObjectStructure[]}) => {
  return (
    <nav className="flex flex-col gap-2">
      {linksArray.map((link) => (
        <Link key={link.href} to={link.href}>{link.title}</Link>
      ))}
    </nav>
  );
};

export default FooterNavigationList;