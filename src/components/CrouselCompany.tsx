import Image from "next/image";

function CrouselCompany() {
  const logo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  // Duplicate the logos for infinite scrolling effect
  const infiniteLogos = [...logo, ...logo, ...logo, ...logo];

  return (
    <div className="overflow-hidden w-screen">
      <div className="flex animate-scroll py-10 px-3  gap-14 whitespace-nowrap">
        {infiniteLogos.map((l, index) => (
          <div key={index} className="inline-block flex-shrink-0 ">
            <Image
              src={`/brand/${l}.png`}
              alt="example"
              width={150}
              height={150}
              className="object-cover w-auto h-12 rounded-lg grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrouselCompany;
