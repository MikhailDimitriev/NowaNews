import React from 'react';
import {Link} from "react-router";
import {SOCIALS_LINKS} from "~/config/navigationsLinks";

const FooterSocialsList = () => {
  return (
    <div className="flex gap-8 xl:gap-12">
      {SOCIALS_LINKS.map((socials) => (
        <Link key={socials.href} className="hover:opacity-80" to={socials.href} target={'_blank'}>{socials.svg}</Link>
      ))}
    </div>
  );
};

export default FooterSocialsList;