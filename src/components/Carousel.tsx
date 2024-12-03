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
        <div className="relative mt-6 xl:mt-0">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold ">
            {title}
          </h2>
          <p
            className="text-p-gray font-sf-pro-display-normal text-sm lg:text-base pt-4 pb-6"
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
