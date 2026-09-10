import React from 'react';
import type {FooterLink} from "~/widgets/footer/model/FooterLink";
import FooterNavigationList from "~/widgets/footer/ui/FooterNavigationList";

const FooterNavigation = ({links, title}: {links: FooterLink[], title: string}) => {
  return (
    <div>
      <h3 className="mb-2 font-semibold text-black text-[16px]">{title}</h3>
      <FooterNavigationList linksArray={links} />
    </div>
  );
};

export default FooterNavigation;