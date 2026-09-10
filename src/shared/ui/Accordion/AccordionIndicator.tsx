import React from 'react';

const AccordionIndicator = ({state, children}: {state:boolean, children: React.ReactNode}) => {
  return (
    <span
      style={{
        rotate: state ? '180deg' : '0deg',
        transition: 'rotate 0.3s cubic-bezier(0.65, 0, 0.35, 1)',
      }}>
      {children}
    </span>
  );
};

export default AccordionIndicator;