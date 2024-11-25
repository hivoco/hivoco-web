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
import { useRef } from "react";

function HomePage() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const changeRoute = (route: string) => {
    router.push(`/${route}`); // Return the Promise
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
      <section>
        <Card
          id="bharat-bhasha"
          title={"BharatBhashaNew"}
          paragraph={
            "Human-like conversational AI tailored for India's diverse languages, <br class='hidden md:block' /> transforming telephonic sales interactions. With support for over 10 <br class='hidden md:block' /> regional languages and seamless integration with existing systems, <br class='hidden md:block' /> it delivers real-time, natural conversations that boost engagement <br class='hidden md:block' /> and conversion rates. Scalable and customizable, Bharat Bhasha AI <br class='hidden md:block' /> is the ideal telephonic solution for businesses looking to connect <br class='hidden md:block' /> authentically with their customers while driving actionable insights <br class='hidden md:block' /> and enhancing sales efficiency."
          }
          image={"bharatImg"}
          isLeft={true}
          scheduleFunction={handleScroll}
          buttonFunction={() => changeRoute("/bharat-bhasha")}
        />

        <Card
          id="razor-sharp"
          title={"RazorSharpNew"}
          paragraph={
            "Turn your store's video and voice data into actionable <br class='hidden md:block' /> insights. Razor Sharp helps you uncover hidden <br class='hidden md:block' /> opportunities, optimise operations, and boost customer <br class='hidden md:block' /> satisfaction through Insights and Real-time Actionable <br class='hidden md:block' /> Notifications."
          }
          image={"razorSharpImg"}
          scheduleFunction={handleScroll}
          buttonFunction={() => changeRoute("/razor-sharp")}
        />

        <Card
          id="talking-brochure"
          title={"TalkingBrochuresNew"}
          paragraph={
            "Revolutionize brand communication by turning traditional <br class='hidden md:block' /> marketing collaterals into interactive, Multilingual Industry <br class='hidden md:block' /> First AI-powered experiences. Designed for Indic <br class='hidden md:block' /> Languages and with seamless voice & visual engagement, <br class='hidden md:block' /> it goes beyond static PDFs, offering real-time updates and <br class='hidden md:block' /> boosting customer interaction across multiple channels."
          }
          image={"talkingImg"}
          isLeft={true}
          scheduleFunction={handleScroll}
          buttonFunction={() => changeRoute("/talking-brochures")}
        />

        <Carousel
          title={"Creative Studio"}
          paragraph={
            "Enhance Customer Engagement with AI-Driven Gamified <br class='hidden md:block' /> Experiences. Transform simple packaging into an innovative <br class='hidden md:block' /> marketing asset."
          }
        />
      </section>

      <section>
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
