import Button from "@/elements/Button";
import Image from "next/image";
import { useRouter } from "next/router";

function Bottom() {
  const router = useRouter();
  const changeRoute = (route: string) => {
    router.push(route);
  };

  const handleRedirect = (url: String) => {
    window.open(`${url}`, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="border-t-[0.5px] border-t-blue-200">
      <div className="container   px-5 xl:px-20 pt-20 pb-14   ">
        <div className="flex justify-between items-start  w-full text-white">
          <Image
            onClick={() => changeRoute("/")}
            src={"svgs/footer-logo.svg"}
            alt={`Slide`}
            width={95}
            height={102}
            className="cursor-pointer"
          />
          <div className="flex flex-col gap-3">
            <strong className="font-sf-pro-display-bold font-medium cursor-pointer text-lg">
              Products
            </strong>
            <small
              onClick={() => changeRoute("/bharat-bhasha")}
              className=" cursor-pointer font-sf-pro-display-bold font-normal text-base"
            >
              Bharat Bhasha.AI
            </small>
            <small
              onClick={() => changeRoute("/razor-sharp")}
              className=" cursor-pointer font-sf-pro-display-bold font-normal text-base"
            >
              RazorSharp
            </small>
            <small
              onClick={() => changeRoute("/talking-brochures")}
              className=" cursor-pointer font-sf-pro-display-bold font-normal text-base"
            >
              Talking Brochure
            </small>
          </div>
          <div className="flex flex-col gap-3">
            <strong
              onClick={() => changeRoute("/get-in-touch")}
              className="font-sf-pro-display-bold font-medium cursor-pointer text-lg"
            >
              Contact Us
            </strong>
          </div>
          <div className="flex justify-between gap-9 cursor-pointer flex-col md:flex-row">
            <Image
              onClick={() =>
                handleRedirect("https://www.youtube.com/@hivocostudios")
              }
              src={"svgs/Vector (11).svg"}
              alt={`Slide`}
              width={25}
              height={25}
            />
            <Image
              onClick={() =>
                handleRedirect(
                  "https://www.linkedin.com/company/hivocostudios/posts/?feedView=all"
                )
              }
              src={"/svgs/Vector (12).svg"}
              alt={`Slide`}
              width={25}
              height={25}
            />
            <Image
              onClick={() =>
                handleRedirect(
                  "https://www.instagram.com/hivoco.studios?igsh=MWJtdjY0cmpnenpuMw=="
                )
              }
              src={"/svgs/Vector (13).svg"}
              alt={`Slide`}
              width={25}
              height={25}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5">
          {/* <div className="flex gap-5">
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
          </div> */}
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
