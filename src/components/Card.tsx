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
}

function Card({
  id,
  title,
  paragraph,
  isLeft,
  image,
  buttontext = "Learn More",
  buttonclass = "w-40",
  scheduleFunction,
  buttonFunction,
  issecondbutton = true,
}: props) {
  return (
    <div
      id={id}
      className={`container flex  flex-col-reverse ${
        isLeft ? "xl:flex-row-reverse" : "xl:flex-row"
      } xl:justify-between justify-center items-center px-5 xl:px-20 py-20`}
    >
      <div className="flex flex-col ">
        <div className="relative mt-6 xl:mt-0">
          <Image
            src={`/pngs/${title}.png`}
            alt="example"
            width={500}
            height={300}
            className="object-cover h-auto w-auto rounded-lg"
          />
          <p
            className="text-p-gray font-sf-pro-display-normal text-sm lg:text-base pt-4 pb-6"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        </div>
        <div className="flex items-center gap-7">
          <Button
            onClick={buttonFunction}
            title={`${buttontext}`}
            className={`${buttonclass}`}
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

      <div className="relative ">
        <Image
          src={`/pngs/${image}.png`}
          alt="example"
          width={500}
          height={300}
          className="object-cover h-auto w-auto  "
        />
      </div>
    </div>
  );
}

export default Card;
