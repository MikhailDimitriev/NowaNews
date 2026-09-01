import React from 'react';
import {Link} from "react-router";

const SOCIALS = [
  {svg: 123, href: 'https://reddit.com'},
  {svg: 123, href: 'https://twitter.com'},
  {svg: 123, href: 'https://tiktok.com'},
  {svg: 123, href: 'https://youtube.com'},
]

const FooterSocialsList = () => {
  return (
    <div className="flex gap-8 xl:gap-12">
      {SOCIALS.map((socials) => (
        <Link key={socials.href} className="hover:opacity-80" to={socials.href} target={'_blank'}>{socials.svg}</Link>
      ))}
    </div>
  );
};

export default FooterSocialsList;