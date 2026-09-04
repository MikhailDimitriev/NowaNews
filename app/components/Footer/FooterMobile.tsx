import React, {useState} from 'react';
import FooterDescription from "~/components/Footer/FooterDescription";
import AccordionElement from "~/components/AccordionElement";
import FooterForm from "~/components/Footer/FooterForm";
import FooterNavigationList from "~/components/Footer/FooterNavigationList";
import {NAVIGATION_LINKS, STATIC_LINKS} from "~/config/navigationsLinks";

const FooterMobile = () => {
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

      <FooterForm />
    </div>
  );
};

export default FooterMobile;