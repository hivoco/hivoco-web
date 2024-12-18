import Button from "@/elements/Button";
import { useRef } from "react";

interface props {
  handleScroll: () => void;
}

const Hero = ({ handleScroll }: props) => {
  return (
    <div
      className=" w-full bg-cover "
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #F8F8F8, #F8F8F8), url('/pngs/hero.png')",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex container flex-col justify-center items-center px-5 xl:px-20 py-28 gap-7 text-center">
        <h2 className="font-sf-pro-display-bold text-3xl xl:text-5xl font-bold">
          Leverage the power of Voice-AI,
          <br className="hidden md:block" />
          Video AI, Computer Vision &
          <br className="hidden md:block" />
          Interactive Content
        </h2>
        <p className="text-p-gray font-sf-pro-display-normal text-sm lg:text-lg">
          HiVoco Studio’s patent-published tech helps you to meaningfully
          <br className="hidden md:block" />
          engage with your users, solve business problems & drive
          <br className="hidden md:block" />
          profitable growth
        </p>

        <Button
          onClick={handleScroll}
          title={"Connect With Us"}
          className="w-48"
        />
      </div>
    </div>
  );
};

export default Hero;
