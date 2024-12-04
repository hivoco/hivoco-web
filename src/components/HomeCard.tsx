import Button from "@/elements/Button";
import Image from "next/image";

interface props {
  id?: string;
  isLeft?: Boolean;
  title: String;
  paragraph: String;
  image: String;
  buttontext?: String;
  buttonclass?: String;
  scheduleFunction?: () => void;
  buttonFunction?: () => void;
  issecondbutton?: Boolean;
  bgimage?: String;
  animation: String;
}

function HomeCard({
  id,
  title,
  paragraph,
  isLeft = false,
  image,
  buttontext = "Learn More",
  buttonclass = "w-40",
  scheduleFunction,
  buttonFunction,
  issecondbutton = true,
  bgimage,
  animation,
}: props) {
  return (
    <div id={id} className={`container px-5 xl:px-20 py-20 relative `}>
      <div
        className={`flex justify-between items-center  w-full flex-col z-40 gap-10 xl:gap-0  ${
          isLeft ? "xl:flex-row-reverse" : "xl:flex-row"
        }`}
      >
        <h2 className="font-bold font-sf-pro-display-bold text-4xl xl:text-5xl  uppercase z-40  cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700 transition-colors duration-300 ease-in-out">
          {title}
        </h2>

        <div data-aos={animation} className="relative">
          <Image
            src={`/bg/clipimg.png`}
            alt="example"
            width={500}
            height={300}
            className="object-cover h-[400px] md:h-auto md:w-[600px] w-auto xl:w-auto rounded-lg "
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 py-10 md:p-20 xl:p-6  ">
            <Image
              src={`/pngs/${image}.png`}
              alt="example"
              width={500}
              height={300}
              className="object-cover h-auto w-auto rounded-lg"
            />

            <p
              className="text-[#2C2C2C] font-sf-pro-display-normal text-sm lg:text-base  pb-6 z-40 "
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />

            <div className="flex items-center gap-7">
              <Button
                onClick={buttonFunction}
                title={`${buttontext}`}
                className={`${buttonclass} z-40`}
              />
              {issecondbutton && (
                <p
                  onClick={scheduleFunction}
                  className="text-p-gray font-sf-pro-display-normal text-sm lg:text-base py-[2px] underline cursor-pointer"
                >
                  Schedule Demo
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {bgimage && (
        <Image
          src={`/bg/${bgimage}.png`}
          alt="example"
          width={500}
          height={300}
          className={` absolute top-0 ${isLeft ? "right-0" : "left-0"}`}
        />
      )}
    </div>
  );
}

export default HomeCard;
