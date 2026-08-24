import Navigation from "~/components/Navigation";
import Logo from "~/components/Logo";
import {Link} from "react-router";
import {useState} from "react";

const Footer = () => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false)
  const [isOpenInformation, setIsOpenInformation] = useState(false)

  return (
    <footer className="p-[1.5rem_1.5rem_0.5rem] lg:p-[2rem_3.5rem_0.5rem] xl:p-[3rem_6rem_0.5rem] text-gray-500 flex flex-col items-center text-[14px]">
      <div className="hidden md:grid grid-cols-4 gap-4 lg:gap-8 ">
        <div className="flex flex-col gap-4 lg:gap-6 self-center">
          <Logo />
          <p className="w-3/4">Daily entertainment news. Stay up to date with the most interesting stories!</p>
          <div className="flex gap-8 xl:gap-12">
            <a className="hover:opacity-80" href="https://reddit.com">1</a>
            <a className="hover:opacity-80" href="https://twitter.com">2</a>
            <a className="hover:opacity-80" href="https://tiktok.com">3</a>
            <a className="hover:opacity-80" href="https://youtube.com">4</a>
          </div>
        </div>
        <div>
          <h3 className="p-1 mb-2 font-semibold text-black text-[16px]">Navigation</h3>
          <Navigation
            position={'footer'}
          />
        </div>
        <div className="self-stretch">
          <h3 className="p-1 mb-2 font-semibold text-black text-[16px]">Information</h3>
          <ul className="flex flex-col gap-1 items-start">
            <Link className="footer-link p-1" to={'/about'}>About us</Link>
            <Link className="footer-link p-1" to={'/contacts'}>Contacts</Link>
            <Link className="footer-link p-1" to={'/advert'}>Advertisements</Link>
            <Link className="footer-link p-1" to={'/rigths'}>Terms and Conditions</Link>
            <Link className="footer-link p-1" to={'/privacy-police'}>Privacy Policy</Link>
          </ul>
        </div>
        <form className="p-1 flex flex-col gap-4 items-start">
          <h3 className="font-semibold text-black text-[16px]">Subscribe to news</h3>
          <label className="w-3/4" htmlFor={"subscription-input"}>Subscribe to receive the most interesting news via email!</label>
          <input
            className="p-3 border-2 border-gray-400 rounded-xl self-stretch"
            id="subscription-input"
            type="email"
            name="subscription-email"
            placeholder="Enter your email"
          />
          <button
            className="bg-pink-400 p-3 rounded-2xl text-white w-3/4 hover:opacity-70 hover:bg-pink-600"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="md:hidden flex flex-col gap-8">
        <div className="flex flex-col gap-4 mb-4">
          <Logo />
          <p className="w-3/4">Daily entertainment news. Stay up to date with the most interesting stories!</p>
          <div className="flex gap-8 xl:gap-12">
            <a className="hover:opacity-80" href="https://reddit.com">1</a>
            <a className="hover:opacity-80" href="https://twitter.com">2</a>
            <a className="hover:opacity-80" href="https://tiktok.com">3</a>
            <a className="hover:opacity-80" href="https://youtube.com">4</a>
          </div>
        </div>

        <div className="flex justify-between items-start mb-2 w-full">

          <div className="w-full flex flex-col gap-4 dur">
            <div
              onClick={() => setIsOpenNavigation(!isOpenNavigation)}
              className="flex justify-between"
            >
              <h3>Navigation</h3>
              <span
                style={{
                  rotate: isOpenNavigation ? '180deg' : '0deg',
                  transition: 'rotate 0.3s cubic-bezier(0.65, 0, 0.35, 1)',
                }}
              >
                ▼
              </span>
            </div>
            <div
              style={{
                maxHeight: isOpenNavigation ? '500px' : '0',
                opacity: isOpenNavigation ? 1 : 0,
                transition: 'max-height 0.3s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease',
                overflow: 'hidden',
              }}
            >
              <Navigation position="footer" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-start mb-2 w-full">
          <div className="w-full flex flex-col gap-4">
            <div
              onClick={() => setIsOpenInformation(!isOpenInformation)}
              className="flex justify-between"
            >
              <h3>Information</h3>
              <span
                style={{
                  rotate: isOpenInformation ? '180deg' : '0deg',
                  transition: 'rotate 0.3s cubic-bezier(0.65, 0, 0.35, 1)',
                }}>
                ▼
              </span>
            </div>
            <ul
              className="flex flex-col gap-1 items-start"
              style={{
                maxHeight: isOpenInformation ? '500px' : '0',
                opacity: isOpenInformation ? 1 : 0,
                transition: 'max-height 0.3s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease',
                overflow: 'hidden',
              }}>
                <Link className="footer-link p-1" to={'/about'}>About us</Link>
                <Link className="footer-link p-1" to={'/contacts'}>Contacts</Link>
                <Link className="footer-link p-1" to={'/advert'}>Advertisements</Link>
                <Link className="footer-link p-1" to={'/rigths'}>Terms and Conditions</Link>
                <Link className="footer-link p-1" to={'/privacy-police'}>Privacy Policy</Link>
            </ul>
          </div>
        </div>

        <form className="flex flex-col gap-4 items-start">
          <h3 className="font-semibold text-black text-[16px]">Subscribe to news</h3>
          <label className="w-3/4" htmlFor={"subscription-input"}>Subscribe to receive the most interesting news via email!</label>
          <input
            className="p-3 border-2 border-gray-400 rounded-xl self-stretch"
            id="subscription-input"
            type="email"
            name="subscription-email"
            placeholder="Enter your email"
          />
          <button
            className="bg-pink-400 p-3 rounded-2xl text-white w-1/2 hover:opacity-70 hover:bg-pink-600 self-center"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="mt-4">©2026 NowaNews. All rights reserved.</div>
    </footer>
  );
};

export default Footer;