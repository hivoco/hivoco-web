import Bottom from "@/components/Bottom";
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import FAQComponent from "@/components/FAQ";
import FAQ from "@/components/FAQ";
import GlassCard from "@/components/GlassCard";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import React, { useRef } from "react";

function index() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const faqs = [
    {
      image: "Designed for 10+ Indic Languages",
      question: "Designed for 10+ Indic Languages",
      answer:
        "Set up in one language and make conversations in 11 languages, including 10 Indic languages.",
    },
    {
      image: "Beyond Print and PDFs",
      question: "Beyond Print and PDFs",
      answer:
        "Go beyond static offline & digital brochures. Our platform is optimized for mobile, offering seamless interaction across multiple touchpoints.",
    },
    {
      image: "Multi-Channel Integration",
      question: "Multi-Channel Integration",
      answer:
        "Whether it’s through QR codes on packaging, TV ads, POS displays, or social media, Talking Brochures fit into any marketing channel, extending the reach and shelf life of your campaigns.",
    },
    {
      image: "Real-Time Updates",
      question: "Real-Time Updates",
      answer:
        " Never worry about outdated information again. Our platform updates instantly, ensuring your customers always have the most relevant content.",
    },
    {
      image: "CRM-Friendly",
      question: "CRM-Friendly",
      answer:
        "Effortlessly integrates with existing CRM systems, keeping your marketing operations smooth and connected.",
    },
    {
      image: "Conversational Commerce",
      question: "Conversational Commerce",
      answer:
        "Customers prefer conversations over reading, and Talking Brochures capitalizes on this insight by delivering fast, voice-activated answers that drive higher conversions.",
    },
  ];
  return (
    <Layout>
      <Header />
      <section>
        <Card
          title={"TalkingBrochures"}
          paragraph={
            "Revolutionize brand communication by turning traditional <br/> marketing collaterals into interactive, Multilingual Industry <br/> First AI-powered experiences. Designed for Indic <br/> Languages and with seamless voice & visual engagement, <br/> it goes beyond static PDFs, offering real-time updates and <br/> boosting customer interaction across multiple channels."
          }
          image={"talkingImg"}
          buttontext={"Schedule a demo"}
          buttonclass={"w-56"}
          issecondbutton={false}
          buttonFunction={handleScroll}
        />
      </section>

      <section>
        <FAQComponent faqs={faqs} image={"talking brochure img"} />
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

export default index;
