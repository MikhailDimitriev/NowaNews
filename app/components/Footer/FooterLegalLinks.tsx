import React, {type CSSProperties} from 'react';
import {Link} from "react-router";

const STATIC_LINKS = [
  {name: 'About us', href: '/about'},
  {name: 'Contacts', href: '/contacts'},
  {name: 'Advertisements', href: '/advert'},
  {name: 'Terms and Conditions', href: '/rigths'},
  {name: 'Privacy Policy', href: '/privacy-police'},
]

const FooterLegalLinks = ({ animations }: {animations?: CSSProperties}) => {
  return (
    <div
      className="flex flex-col gap-1 items-start"
      style={animations}
    >
      {STATIC_LINKS.map((link) => (
        <Link key={link.href} className="footer-link p-1" to={`/${link.href}`}>{link.name}</Link>
      ))}
    </div>
  );
};

export default FooterLegalLinks;