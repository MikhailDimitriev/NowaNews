import React from 'react';
import AccordionIndicator from "~/components/AccordionIndicator";

const AccordionElement = ({ title, children, state, setFunction }: { title: string, children: React.ReactNode, state: boolean, setFunction: (arg: boolean) => void }) => {

  const accordionAnimations = {
    transition: 'max-height 0.3s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease',
    overflow: 'hidden',
    maxHeight: state ? '500px' : '0',
    opacity: state ? 1 : 0,
  }

  return (
    <div
      className="flex flex-col gap-4 justify-between items-start mb-2"
    >
      <div
        onClick={() => setFunction(!state)}
        className="flex justify-between w-full"
      >
        <h3>{title}</h3>
        <AccordionIndicator state={state} />
      </div>
      <div style={accordionAnimations}>
        {children}
      </div>
    </div>
  );
};

export default AccordionElement;