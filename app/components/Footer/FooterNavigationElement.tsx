import React from 'react';
import FooterNavigationList, {
  type FooterLinkObjectStructure,
} from "~/components/Footer/FooterNavigationList";

const FooterNavigationElement = ({links, title}: {links: FooterLinkObjectStructure[], title: string}) => {
  return (
    <div>
      <h3 className="mb-2 font-semibold text-black text-[16px]">{title}</h3>
      <FooterNavigationList linksArray={links} />
    </div>
  );
};

export default FooterNavigationElement;