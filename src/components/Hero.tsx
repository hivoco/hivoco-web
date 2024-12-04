import Button from "@/elements/Button";
import { useRef } from "react";

interface props {
  handleScroll: () => void;
}

const Hero = ({ handleScroll }: props) => {
  return (
    <div className=" w-full xl:h-[500px] bg-cover bg-no-repeat bg-hero-bg">
      <div className="flex container flex-col  px-5 xl:px-20 py-28 gap-5 text-left text-black">
        <h2 className="font-sf-pro-display-bold text-4xl xl:text-8xl font-bold">
          HIVOCO STUDIOS
        </h2>
        <p className=" font-sf-pro-display-normal text-2xl xl:text-4xl lg:text-lg font-bold">
          Leverage the power of Voice-AI, Video-AI,
          <br className="hidden md:block" />
          Computer Vision & Interactive Content
        </p>
      </div>
    </div>
  );
};

export default Hero;

// import Button from "@/elements/Button";
// import { useRef } from "react";

// interface props {
//   handleScroll: () => void;
// }

// const Hero = ({ handleScroll }: props) => {
//   return (
//     <div
//       className=" w-full bg-cover "
//       style={{
//         backgroundImage:
//           "linear-gradient(to bottom, #F8F8F8, #F8F8F8), url('/pngs/hero.png')",
//         backgroundBlendMode: "overlay",
//       }}
//     >
//       <div className="flex container flex-col justify-center items-center px-5 xl:px-20 py-28 gap-7 text-center">
//         <h2
//           data-aos="fade-left"
//           className="font-sf-pro-display-bold text-3xl xl:text-5xl font-bold"
//         >
//           Leverage the power of Voice-AI,
//           <br className="hidden md:block" />
//           Video AI, Computer Vision &
//           <br className="hidden md:block" />
//           Interactive Content
//         </h2>
//         <p
//           data-aos="fade-right"
//           className="text-p-gray font-sf-pro-display-normal text-sm lg:text-lg"
//         >
//           HiVoco Studio’s patent-published tech helps you to meaningfully
//           <br className="hidden md:block" />
//           engage with your users, solve business problems & drive
//           <br className="hidden md:block" />
//           profitable growth
//         </p>

//         <Button
//           onClick={handleScroll}
//           title={"Connect With Us"}
//           className="w-48"
//           dataaos="fade-up"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;
