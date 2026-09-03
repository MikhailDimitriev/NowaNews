import React from 'react';
import FooterDescription from "~/components/Footer/FooterDescription";
import FooterFormElement from "~/components/Footer/FooterFormElement";
import FooterNavigationElement
  from "~/components/Footer/FooterNavigationElement";
import {NAVIGATION_LINKS, STATIC_LINKS} from "~/config/navigationsLinks";

const FooterHiddenMobile = () => {
  return (
    <div className="hidden md:grid grid-cols-4 gap-4 lg:gap-8 ">
      <FooterDescription />

      <FooterNavigationElement links={NAVIGATION_LINKS} title={'Navigation'} />

      <FooterNavigationElement links={STATIC_LINKS} title={'Information'} />

      <FooterFormElement />
    </div>
  );
};

export default FooterHiddenMobile;