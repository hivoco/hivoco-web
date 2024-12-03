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
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, [words.length]);

  const getPosition = (index: Number) => {
    if (index === currentIndex) return "translate-y-0"; // Current text at center
    if (index === (currentIndex - 1 + words.length) % words.length)
      return "-translate-y-[100px]"; // Previous text moves up
    if (index === (currentIndex + 1) % words.length)
      return "translate-y-[300px]"; // Next text comes from bottom
    return "translate-y-[300px] opacity-0"; // All other texts hidden below
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
          <>
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
                          className="font-bold md:text-6xl xl:text-8xl text-4xl uppercase tracking-wider  cursor-pointer"
                        >
                          {" "}
                          {word}
                        </h2>
                      </div>
                    ))}
                  </div>
                  <p className=" font-sf-pro-display-normal text-p-gray text-xl lg:text-lg font-light mt-5 ">
                    Click on keyword to view details
                  </p>
                </div>
                <Image
                  src={`/bg/Landing pg. BG.png`}
                  alt="example"
                  width={500}
                  height={300}
                  // className="absolute -top-40 right-0   "
                  className="absolute -top-10 right-0   "
                />
              </div>
            </section>
            <section>
              <div className="relative  ">
                <div className=" container py-52 px-5 xl:px-20 flex flex-col justify-center items-center gap-4 "></div>
                <Image
                  src={`/bg/Landing pg BG-2.png`}
                  alt="example"
                  width={500}
                  height={300}
                  // className="absolute -top-40 right-0   "
                  className="absolute -top-10 right-0   "
                />
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="animate-expand transition-all duration-700 ease-in-out">
              {/* <Card
              id="bharat-bhasha"
              title={"BharatBhashaNew"}
              paragraph={
                "Human-like conversational AI tailored for India's diverse languages, <br class='hidden md:block' /> transforming telephonic sales interactions. With support for over 10 <br class='hidden md:block' /> regional languages and seamless integration with existing systems, <br class='hidden md:block' /> it delivers real-time, natural conversations that boost engagement <br class='hidden md:block' /> and conversion rates. Scalable and customizable, Bharat Bhasha AI <br class='hidden md:block' /> is the ideal telephonic solution for businesses looking to connect <br class='hidden md:block' /> authentically with their customers while driving actionable insights <br class='hidden md:block' /> and enhancing sales efficiency."
              }
              image={"bharatImg"}
              isLeft={true}
              scheduleFunction={handleScroll}
              buttonFunction={() => changeRoute("/bharat-bhasha")}
            /> */}
              <HomeCard
                id="bharat-bhasha"
                title={"Bharat Bhasha.aI"}
                paragraph={
                  "Turn your store's video and voice data into actionable <br class='hidden md:block' /> insights. Razor Sharp helps you uncover hidden <br class='hidden md:block' /> opportunities, optimise operations, and boost customer <br class='hidden md:block' /> satisfaction through Insights and Real-time Actionable <br class='hidden md:block' /> Notifications."
                }
                image={"BharatBhashaNew"}
                scheduleFunction={handleScroll}
                buttonFunction={() => changeRoute("/bharat-bhasha")}
                bgimage={"Bharat Bhasha.AI element"}
              />
              <HomeCard
                id="bharat-bhasha"
                title={"razor-sharp"}
                paragraph={
                  "Turn your store's video and voice data into actionable <br class='hidden md:block' /> insights. Razor Sharp helps you uncover hidden <br class='hidden md:block' /> opportunities, optimise operations, and boost customer <br class='hidden md:block' /> satisfaction through Insights and Real-time Actionable <br class='hidden md:block' /> Notifications."
                }
                isLeft={true}
                image={"RazorSharpNew"}
                scheduleFunction={handleScroll}
                buttonFunction={() => changeRoute("/bharat-bhasha")}
                bgimage={"Razorsharp Element"}
              />

              {/* <Card
              id="razor-sharp"
              title={"RazorSharpNew"}
              paragraph={
                "Turn your store's video and voice data into actionable <br class='hidden md:block' /> insights. Razor Sharp helps you uncover hidden <br class='hidden md:block' /> opportunities, optimise operations, and boost customer <br class='hidden md:block' /> satisfaction through Insights and Real-time Actionable <br class='hidden md:block' /> Notifications."
              }
              image={"razorSharpImg"}
              scheduleFunction={handleScroll}
              buttonFunction={() => changeRoute("/razor-sharp")}
            /> */}

              {/* <Card
              id="talking-brochure"
              title={"TalkingBrochuresNew"}
              paragraph={
                "Revolutionize brand communication by turning traditional <br class='hidden md:block' /> marketing collaterals into interactive, Multilingual Industry <br class='hidden md:block' /> First AI-powered experiences. Designed for Indic <br class='hidden md:block' /> Languages and with seamless voice & visual engagement, <br class='hidden md:block' /> it goes beyond static PDFs, offering real-time updates and <br class='hidden md:block' /> boosting customer interaction across multiple channels."
              }
              image={"talkingImg"}
              isLeft={true}
              scheduleFunction={handleScroll}
              buttonFunction={() => changeRoute("/talking-brochures")}
            /> */}

              <Carousel
                title={"Creative Studio"}
                paragraph={
                  "Enhance Customer Engagement with AI-Driven Gamified <br class='hidden md:block' /> Experiences. Transform simple packaging into an innovative <br class='hidden md:block' /> marketing asset."
                }
                bgimage="Creative studio element"
              />
            </section>
            <section>
              <Awards />
            </section>
          </>
        )}
      </>

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
