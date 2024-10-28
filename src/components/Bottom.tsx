import Button from "@/elements/Button";
import Image from "next/image";

function Bottom() {
  return (
    <div className="border-t-[0.5px] border-t-gray-200">
      <div className="container   px-5 xl:px-20 pt-20 pb-14   ">
        <div className="flex justify-between items-start  w-full text-white">
          <Image
            src={"svgs/footer-logo.svg"}
            alt={`Slide`}
            width={95}
            height={102}
          />
          <div className="flex flex-col gap-3">
            <strong className="font-sf-pro-display-bold font-medium cursor-pointer text-lg">
              Products
            </strong>
            <small className=" cursor-pointer font-sf-pro-display-bold font-normal text-base">
              Bharat Bhasha.AI
            </small>
            <small className=" cursor-pointer font-sf-pro-display-bold font-normal text-base">
              Razorsharp
            </small>
            <small className=" cursor-pointer font-sf-pro-display-bold font-normal text-base">
              Talking Brochure
            </small>
          </div>
          <div className="flex flex-col gap-3">
            <strong className="font-sf-pro-display-bold font-medium cursor-pointer text-lg">
              Contact Us
            </strong>
          </div>
          <div className="flex justify-between gap-5">
            <Image
              src={"svgs/Vector (11).svg"}
              alt={`Slide`}
              width={25}
              height={25}
            />
            <Image
              src={"/svgs/Vector (12).svg"}
              alt={`Slide`}
              width={25}
              height={25}
            />
            <Image
              src={"/svgs/Vector (13).svg"}
              alt={`Slide`}
              width={25}
              height={25}
            />
          </div>
        </div>
        <div className="flex flex-col mt-14">
          <div className="flex gap-5">
            <Image
              src={"/pngs/Ellipse 3.png"}
              alt={`Slide`}
              width={54}
              height={54}
            />
            <Image
              src={"/pngs/Ellipse 3.png"}
              alt={`Slide`}
              width={54}
              height={54}
            />
          </div>
          <div className="flex gap-5 text-white mt-8">
            <small className=" cursor-pointer font-sf-pro-display-bold font-normal text-base">
              © Hivoco Studios
            </small>
            <small className=" cursor-pointer font-sf-pro-display-bold font-normal text-base">
              All Rights Reserved
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
// background: linear-gradient(167.67deg, #82A5F3 0%, #6969AF 100%);
