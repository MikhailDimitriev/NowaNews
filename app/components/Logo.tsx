import {Link} from "react-router";

const Logo = () => {
  return (
    <div>
      <Link className="text-black dark:text-white py-2 font-bold text-[clamp(1.5rem,1.915vw,2.25rem)]" to="/">Nowa<span className="text-pink-400">News</span></Link>
    </div>
  );
};

export default Logo;