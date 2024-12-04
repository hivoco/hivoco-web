import Image from "next/image";
import ImageCarousel from "./ImageCarousel";

interface props {
  title: String;
  paragraph: String;
  bgimage: String;
}

export default function Carousel({ title, paragraph, bgimage }: props) {
  return (
    <div
      className={`container flex  flex-col-reverse xl:flex-row xl:justify-between justify-center items-center px-5 xl:px-20 py-20 relative `}
    >
      <div className="flex flex-col items-center xl:items-start z-40 ">
        <div data-aos="fade-right" className="relative mt-6 p-6 xl:p-0 xl:mt-0">
          <h2 className="font-bold font-sf-pro-display-bold text-4xl xl:text-5xl uppercase z-40 ">
            {title}
          </h2>
          <p
            className="text-[#2C2C2C] font-sf-pro-display-normal text-sm lg:text-base pt-4 pb-6"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        </div>
      </div>

      <ImageCarousel />
      <Image
        src={`/bg/${bgimage}.png`}
        alt="example"
        width={500}
        height={300}
        className={` absolute top-0 `}
      />
    </div>
  );
}
