import React from 'react';
import Logo from "~/components/Logo";
import FooterSocialsList from "~/components/Footer/FooterSocialsList";

const FooterDescription = () => {
  return (
    <>
      <Logo />
      <p className="w-3/4">Daily entertainment news. Stay up to date with the most interesting stories!</p>
      <FooterSocialsList />
    </>
  );
};

export default FooterDescription;