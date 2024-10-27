import ImageCarousel from "./ImageCarousel";

interface props {
  title: String;
  paragraph: String;
}

export default function Carousel({ title, paragraph }: props) {
  return (
    <div
      className={`container flex  flex-col-reverse xl:flex-row xl:justify-between justify-center items-center px-20 py-20`}
    >
      <div className="flex flex-col items-center xl:items-start">
        <div className="relative mt-6 xl:mt-0">
          <h2 className="font-sf-pro-display-bold text-3xl md:text-4xl lg:text-5xl font-bold">
            {title}
          </h2>
          <p
            className="text-p-gray font-sf-pro-display-normal text-sm lg:text-lg pt-4 pb-6"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        </div>
      </div>

      <ImageCarousel />
    </div>
  );
}
