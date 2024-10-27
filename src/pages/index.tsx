import Awards from "@/components/Awards";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
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

        <div className={`${styles.flexCol} mt-3`}>
          <p className="text-p-gray font-sf-pro-display-normal text-lg ">
            Trusted by
          </p>
          <CrouselCompany />
        </div>
      </section>
      <section>
        <Card
          id="bharat-bhasha"
          title={"BharatBhasha"}
          paragraph={
            "Human-like conversational AI tailored for India's diverse languages, <br/> transforming telephonic sales interactions. With support for over 10 <br/> regional languages and seamless integration with existing systems,<br/> it delivers real-time, natural conversations that boost engagement <br/> and conversion rates. Scalable and customizable, Bharat Bhasha AI <br/> is the ideal telephonic solution for businesses looking to connect <br/> authentically with their customers while driving actionable insights <br/>and enhancing sales efficiency."
          }
          image={"talkingImg"}
          isLeft={true}
          scheduleFunction={handleScroll}
          buttonFunction={() => changeRoute("/bharat-bhasha")}
        />
        <Card
          id="razor-sharp"
          title={"RazorSharp"}
          paragraph={
            "Turn your store's video and voice data into actionable <br/> insights. Razor Sharp helps you uncover hidden <br/> opportunities, optimise operations, and boost customer <br/> satisfaction through Insights and Real-time Actionable <br/>Notifications."
          }
          image={"razorSharpImg"}
          scheduleFunction={handleScroll}
          buttonFunction={() => changeRoute("/razor-sharp")}
        />
        <Card
          id="talking-brochure"
          title={"TalkingBrochures"}
          paragraph={
            "Revolutionize brand communication by turning traditional <br/> marketing collaterals into interactive, Multilingual Industry <br/> First AI-powered experiences. Designed for Indic <br/> Languages and with seamless voice & visual engagement, <br/> it goes beyond static PDFs, offering real-time updates and <br/> boosting customer interaction across multiple channels."
          }
          image={"talkingImg"}
          isLeft={true}
          scheduleFunction={handleScroll}
          buttonFunction={() => changeRoute("/talking-brochures")}
        />

        <Carousel
          title={"Interactive Content"}
          paragraph={
            "Revolutionize brand communication by turning traditional <br/> marketing collaterals into interactive, Multilingual Industry <br/> First AI-powered experiences. Designed for Indic <br/> Languages and with seamless voice & visual engagement, <br/> it goes beyond static PDFs, offering real-time updates and <br/> boosting customer interaction across multiple channels."
          }
        />
      </section>

      <section>
        <Awards />
      </section>
      <section ref={sectionRef} id="contact-us">
        <Contact />
      </section>
    </Layout>
  );
}

export default HomePage;
