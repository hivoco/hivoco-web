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
      <div className="flex container flex-col justify-center items-center py-28 gap-7 text-center">
        <h2 className="font-sf-pro-display-bold text-3xl xl:text-5xl font-bold">
          Lorem ipsum dolor sit <br /> amet consectetur.
        </h2>
        <p className="text-p-gray font-sf-pro-display-normal text-sm lg:text-lg">
          Lorem ipsum dolor sit amet consectetur. Sed <br /> pulvinar id leo eu
          imperdiet platea dui. Lorem <br /> ipsum dolor sit amet consectetur.
        </p>
        <Button onClick={handleScroll} title={"Explore"} className="w-48" />
      </div>
    </div>
  );
};

export default Hero;
