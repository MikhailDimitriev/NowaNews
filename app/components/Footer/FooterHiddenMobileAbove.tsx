import React, {useState} from 'react';
import FooterDescription from "~/components/Footer/FooterDescription";
import FooterAccordionElement from "~/components/Footer/FooterAccordionElement";
import Navigation from "~/components/Navigation";
import FooterLegalLinks from "~/components/Footer/FooterLegalLinks";
import FooterFormElement from "~/components/Footer/FooterFormElement";

const FooterHiddenMobileAbove = () => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false)
  const [isOpenInformation, setIsOpenInformation] = useState(false)

  const accordionNavigationAnimations = {
    maxHeight: isOpenNavigation ? '500px' : '0',
    opacity: isOpenNavigation ? 1 : 0,
    transition: 'max-height 0.3s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease',
    overflow: 'hidden',
  }
  const accordionInformationAnimations = {
    maxHeight: isOpenInformation ? '500px' : '0',
    opacity: isOpenInformation ? 1 : 0,
    transition: 'max-height 0.3s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease',
    overflow: 'hidden',
  }

  return (
    <div className="md:hidden flex flex-col gap-8">
      <div className="flex flex-col gap-4 mb-4">
        <FooterDescription />
      </div>

      <FooterAccordionElement
        title={"Navigation"}
        state={isOpenNavigation}
        setFunction={setIsOpenNavigation}
      >
        <div
          style={accordionNavigationAnimations}
        >
          <Navigation position="footer" />
        </div>
      </FooterAccordionElement>

      <FooterAccordionElement
        title={"Information"}
        state={isOpenInformation}
        setFunction={setIsOpenInformation}
      >
        <FooterLegalLinks animations={accordionInformationAnimations} />
      </FooterAccordionElement>

      <FooterFormElement />
    </div>
  );
};

export default FooterHiddenMobileAbove;