import React from 'react';
import HeaderNavigation from "~/widgets/header/ui/HeaderNavigation";

interface HeaderMobileProps {
  state: boolean,
}

const HeaderMobile = ({ state }: HeaderMobileProps ) => {
  return (
    <div
      className="lg:hidden"
      style={{
        marginTop: state ? '12px' : '0',
        maxHeight: state ? '500px' : '0',
        transition: 'all 0.5s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease',
        overflow: 'hidden',
      }}
    >
      <HeaderNavigation position='burger-menu'/>
    </div>
  );
};

export default HeaderMobile;