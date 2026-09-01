import FooterHiddenMobile from "~/components/Footer/FooterHiddenMobile";
import FooterHiddenMobileAbove from "~/components/Footer/FooterHiddenMobileAbove";

const Footer = () => {

  return (
    <footer className="p-[1.5rem_1.5rem_0.5rem] lg:p-[2rem_3.5rem_0.5rem] xl:p-[3rem_6rem_0.5rem] text-gray-500 flex flex-col items-center text-[14px]">
      <FooterHiddenMobile />

      <FooterHiddenMobileAbove />

      <div className="mt-4">©2026 NowaNews. All rights reserved.</div>
    </footer>
  );
};

export default Footer;