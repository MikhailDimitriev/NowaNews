import React from 'react';
import HeaderNavigation from "~/components/HeaderNavigation";

const HeaderHiddenMobileAbove = ({state}: {state: boolean} ) => {
  return (
    <div
      className="lg:hidden"
      style={{
        maxHeight: state ? '500px' : '0',
        transition: 'max-height 0.5s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease',
        overflow: 'hidden',
      }}
    >
      <HeaderNavigation position='burger-menu' />
    </div>
  );
};

export default HeaderHiddenMobileAbove;