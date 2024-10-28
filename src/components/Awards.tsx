import Image from "next/image";

function Awards() {
  const awards = ["AFAQS", "E4M", "IMC", "Min. of edu", "MMA", "BW"];
  return (
    <div className="container  py-12 flex flex-col  ">
      <div className="flex items-center justify-center space-x-4">
        <div className="h-px w-[60px] bg-[#FF512D80]"></div>
        <strong className="font-sf-pro-display-bold font-bold text-2xl">
          Our Awards
        </strong>
        <div className="h-px w-[60px] bg-[#FF512D80]"></div>
      </div>
      <div className="py-12 flex justify-between  px-20 flex-shrink-0 flex-wrap gap-4 xl:gap-0">
        {awards.map((a,index) => {
          return (
            <Image
            key={index}
              src={`/awards/${a}.png`}
              alt="example"
              width={150}
              height={150}
              className="object-cover w-auto h-10"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Awards;
