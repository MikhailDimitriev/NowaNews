import React from 'react';
import {
  NAVIGATION_LINKS,
  STATIC_LINKS
} from "~/widgets/footer/model/constants/footerLinks";
import FooterDescription from "~/widgets/footer/ui/FooterDescription";
import FooterNavigation from "~/widgets/footer/ui/FooterNavigation";
import FooterForm from "~/widgets/footer/ui/FooterForm";

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