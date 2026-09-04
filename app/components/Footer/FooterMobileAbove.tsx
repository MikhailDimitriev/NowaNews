import React from 'react';
import FooterDescription from "~/components/Footer/FooterDescription";
import FooterForm from "~/components/Footer/FooterForm";
import FooterNavigation
  from "~/components/Footer/FooterNavigation";
import {NAVIGATION_LINKS, STATIC_LINKS} from "~/config/navigationsLinks";

const FooterMobileAbove = () => {
  return (
    <div className="hidden md:grid grid-cols-4 gap-4 lg:gap-8 ">
      <FooterDescription />

      <FooterNavigation links={NAVIGATION_LINKS} title={'Navigation'} />

      <FooterNavigation links={STATIC_LINKS} title={'Information'} />

      <FooterForm />
    </div>
  );
};

export default FooterMobileAbove;