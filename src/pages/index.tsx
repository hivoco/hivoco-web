import Awards from "@/components/Awards";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import Bottom from "@/components/Bottom";
import CrouselCompany from "@/components/CrouselCompany";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HomeCard from "@/components/HomeCard";
import Button from "@/elements/Button";

function HomePage() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const changeRoute = (route: string) => {
    router.push(`/${route}`); // Return the Promise
  };
  const words = [
    "CREATIVE STUDIO",
    "Razor Sharp",
    "Bharat Bhasha.aI",
    "CREATIVE STUDIO",
    "Razor Sharp",
    "Bharat Bhasha.aI",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirstSection, setShowFirstSection] = useState(true);

  const handleFirstSectionClick = () => {
    setShowFirstSection(false);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  const getPosition = (index: Number) => {
    if (index === currentIndex) return "translate-y-0";
    if (index === (currentIndex - 1 + words.length) % words.length)
      return "-translate-y-[100px]";
    if (index === (currentIndex + 1) % words.length)
      return "translate-y-[300px]";
    return "translate-y-[300px] opacity-0";
  };

  const styles = {
    flex: "flex items-center",
    flexCol: "flex flex-col justify-center items-center",
    flexBetween: "flex justify-between item-center",
    flexCenter: "flex justify-center item-center",
    paragraph: "text-base font-normal text-black",
  };

  return (
    <Layout>
      <Header />
      <section
        className="w-screen "
        style={{ maxHeight: "calc(100vh - 90px)" }}
      >
        <Hero handleScroll={handleScroll} />
      </section>
      <section>
        <div className={`${styles.flexCol} mt-10`}>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-[60px] bg-[#FF512D80]"></div>
            <p className="text-p-gray font-sf-pro-display-normal font-semibold text-lg ">
              Trusted by
            </p>
            <div className="h-px w-[60px] bg-[#FF512D80]"></div>
          </div>
          <CrouselCompany />
        </div>
      </section>

      <>
        {showFirstSection ? (
          <section>
            <div className="relative  ">
              <div className=" container py-52 px-5 xl:px-20 flex flex-col justify-center items-center gap-4 ">
                <div className="relative h-[100px] w-full overflow-hidden  flex items-center justify-center  ">
                  {words.map((word, index) => (
                    <div
                      key={index}
                      className={`absolute w-full text-center  transition-transform duration-700 ease-in-out ${getPosition(
                        index
                      )} hover:text-transparent z-40 bg-clip-text bg-gradient-to-r from-red-700 to-blue-700 transition-colors duration-300 ease-in-out`}
                    >
                      <h2
                        onClick={handleFirstSectionClick}
                        className="font-bold md:text-6xl xl:text-8xl text-4xl uppercase tracking-wider  cursor-pointer font-sf-pro-display-bold"
                      >
                        {" "}
                        {word}
                      </h2>
                    </div>
                  ))}
                </div>
                <p
                  data-aos="fade-up"
                  className=" font-sf-pro-display-normal text-p-gray text-xl lg:text-lg font-light mt-5 z-40 "
                >
                  Click on keyword to view details
                </p>
              </div>
              <Image
                src={`/bg/Landing pg. BG.png`}
                alt="example"
                width={500}
                height={300}
                className="absolute -top-10 right-0   "
              />
            </div>
          </section>
        ) : (
          <section className="animate-expand transition-all duration-700 ease-in-out">
            <HomeCard
              id="bharat-bhasha"
              title={"Bharat Bhasha.aI"}
              paragraph={
                "AI tailored for India’s languages enhances telephonic sales <br class='hidden xl:block' />  with real-time, natural conversations  in 10+ languages, <br class='hidden xl:block' /> seamlessly integrating into systems to boost  engagement <br class='hidden xl:block' /> and conversion rates."
              }
              image={"BharatBhashaNew"}
              scheduleFunction={handleScroll}
              buttonFunction={() => changeRoute("/bharat-bhasha")}
              bgimage={"Bharat Bhasha.AI element"}
              animation={"fade-up"}
            />
            <HomeCard
              id="razor-sharp"
              title={"razor-sharp"}
              paragraph={
                "Turn your store's video and voice data into actionable <br class='hidden xl:block' /> insights. Razor Sharp helps you uncover hidden <br class='hidden xl:block' /> opportunities, optimise operations, and boost customer <br class='hidden xl:block' /> satisfaction through Insights and Real-time Actionable <br class='hidden xl:block' /> Notifications."
              }
              isLeft={true}
              image={"RazorSharpNew"}
              scheduleFunction={handleScroll}
              buttonFunction={() => changeRoute("/bharat-bhasha")}
              bgimage={"Razorsharp Element"}
              animation={"fade-up"}
            />

            <Carousel
              title={"Creative Studio"}
              paragraph={
                "Enhance Customer Engagement with AI-Driven Gamified <br class='hidden xl:block' /> Experiences. Transform simple packaging into an innovative <br class='hidden xl:block' /> marketing asset."
              }
              bgimage="Creative studio element"
            />
          </section>
        )}
      </>
      <section>
        <div className="relative  ">
          <div className=" container px-5 xl:px-20 py-10 z-40 ">
            <div
              data-aos="fade-up"
              className="text-center flex flex-col gap-5 justify-center items-center z-40 relative"
            >
              <p className="text-black font-sf-pro-display-normal text-sm lg:text-xl font-medium ">
                HiVoco Studio’s patent-published tech helps you to meaningfully
                engage <br className="hidden md:block" /> with your users, solve
                business problems & drive profitable growth.
              </p>
              <Button
                onClick={handleScroll}
                title={`Contact With Us`}
                className={`w-56 relative`}
              />
            </div>
          </div>

          <Image
            src={`/bg/Landing pg BG-2.png`}
            alt="example"
            width={500}
            height={300}
            className="absolute -top-10 right-0   "
          />
        </div>
      </section>
      <section data-aos="fade-up">
        <Awards />
      </section>
      <section
        className=" w-full bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #82A5F3, #6969AF), url('/pngs/Texture.png')",
          backgroundBlendMode: "overlay",
        }}
        ref={sectionRef}
        id="contact-us"
      >
        <Contact />
        <Bottom />
      </section>
    </Layout>
  );
}

export default HomePage;
