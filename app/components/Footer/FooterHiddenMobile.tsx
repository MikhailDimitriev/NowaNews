import React from 'react';
import FooterDescription from "~/components/Footer/FooterDescription";
import Navigation from "~/components/Navigation";
import FooterLegalLinks from "~/components/Footer/FooterLegalLinks";
import FooterFormElement from "~/components/Footer/FooterFormElement";

const FooterHiddenMobile = () => {
  return (
    <div className="hidden md:grid grid-cols-4 gap-4 lg:gap-8 ">
      <div className="flex flex-col gap-4 lg:gap-6 self-center">
        <FooterDescription />
      </div>

      <div>
        <h3 className="p-1 mb-2 font-semibold text-black text-[16px]">Navigation</h3>
        <Navigation
          position={'footer'}
        />
      </div>

      <div className="self-stretch">
        <h3 className="p-1 mb-2 font-semibold text-black text-[16px]">Information</h3>
        <FooterLegalLinks
          animations={undefined}
        />
      </div>

      <FooterFormElement />
    </div>
  );
};

export default FooterHiddenMobile;