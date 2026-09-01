import React from 'react';
import FooterAccordionIndicator from "~/components/Footer/FooterAccordionIndicator";

const FooterAccordionElement = ({ title, children, state, setFunction }: { title: string, children: React.ReactNode, state: boolean, setFunction: (arg: boolean) => void }) => {

  return (
    <div className="flex justify-between items-start mb-2 w-full">
      <div className="w-full flex flex-col gap-4">
        <div
          onClick={() => setFunction(!state)}
          className="flex justify-between"
        >
          <h3>{title}</h3>
          <FooterAccordionIndicator
            state={state}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default FooterAccordionElement;