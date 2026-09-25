import React from 'react';
import {Link} from "react-router";
import type {FooterLink} from "~/widgets/footer/model/FooterLink";

const FooterNavigationList = ({linksArray}: {linksArray: FooterLink[]}) => {
  return (
    <nav className="flex flex-col gap-2">
      {linksArray.map((link) => (
        <Link className="hover:opacity-70" key={link.href} to={link.href}>{link.title}</Link>
      ))}
    </nav>
  );
};

export default FooterNavigationList;