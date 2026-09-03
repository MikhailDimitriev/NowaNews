import React, {useState} from 'react';
import FooterDescription from "~/components/Footer/FooterDescription";
import AccordionElement from "~/components/AccordionElement";
import FooterFormElement from "~/components/Footer/FooterFormElement";
import FooterNavigationList from "~/components/Footer/FooterNavigationList";
import {NAVIGATION_LINKS, STATIC_LINKS} from "~/config/navigationsLinks";

const FooterHiddenMobileAbove = () => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false)
  const [isOpenInformation, setIsOpenInformation] = useState(false)

  return (
    <div className="md:hidden flex flex-col gap-8">
      <FooterDescription />

      <AccordionElement
        title={"Navigation"}
        state={isOpenNavigation}
        setFunction={setIsOpenNavigation}
      >
        <FooterNavigationList linksArray={NAVIGATION_LINKS} />
      </AccordionElement>

      <AccordionElement
        title={"Information"}
        state={isOpenInformation}
        setFunction={setIsOpenInformation}
      >
        <FooterNavigationList linksArray={STATIC_LINKS} />
      </AccordionElement>

      <FooterFormElement />
    </div>
  );
};

export default FooterHiddenMobileAbove;