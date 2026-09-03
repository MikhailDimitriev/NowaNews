import React from 'react';
import Logo from "~/components/Logo";
import FooterSocialsList from "~/components/Footer/FooterSocialsList";

const FooterDescription = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 self-center">
      <Logo />
      <p className="w-4/5">Daily entertainment news. Stay up to date with the most interesting stories!</p>
      <FooterSocialsList />
    </div>
  );
};

export default FooterDescription;