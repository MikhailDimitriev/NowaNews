import React, {useState} from 'react';
import AccordionElement from "~/shared/ui/Accordion";
import {
  NAVIGATION_LINKS,
  STATIC_LINKS
} from "~/widgets/footer/model/constants/footerLinks";
import FooterDescription from "~/widgets/footer/ui/FooterDescription";
import FooterNavigationList from "~/widgets/footer/ui/FooterNavigationList";
import FooterForm from "~/widgets/footer/ui/FooterForm";

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