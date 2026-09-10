import React from 'react';
import {Link} from "react-router";
import {SOCIALS_LINKS} from "~/widgets/footer/model/constants/footerLinks";

const FooterSocialsList = () => {
  return (
    <div className="flex gap-8 xl:gap-12">
      {SOCIALS_LINKS.map((socials) => (
        <Link key={socials.href} className="hover:opacity-80" to={socials.href} target={'_blank'}>
          <img
            className="aspect-square"
            src={socials.svg}
            alt=""
            width="32"
            height="32"
          />
        </Link>
      ))}
    </div>
  );
};

export default FooterSocialsList;