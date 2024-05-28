import Image from "next/image";
import Logo from "../assets/Logo.svg"


const Navbar = () => {
  return (
    <div className="w-full h-[90px] px-16 py-4 bg-white flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-[58px] h-[58px] flex justify-center items-center">
          <Image src={Logo} alt="pp"  height={32}
      width={32} />
        </div>
        <div className="text-black text-2xl font-medium">
        Pixel Perfect
        </div>
      </div>
      <div className="flex gap-12">
        <div className="text-neutral-900 text-lg font-normal tracking-wide">About us</div>
        <div className="text-neutral-900 text-lg font-normal tracking-wide">Testimonials</div>
        <div className="text-neutral-900 text-lg font-normal tracking-wide">Contact us</div>
        <div className="text-neutral-900 text-lg font-normal tracking-wide">Projects</div>
      </div>
    </div>
  );
};

export default Navbar;
