import Bottom from "@/components/Bottom";
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import FAQComponent from "@/components/FAQ";
import GlassCard from "@/components/GlassCard";
import Header from "@/components/Header";
import HomeCard from "@/components/HomeCard";
import Layout from "@/components/Layout";

import React, { useRef } from "react";

function index() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const faqs = [
    {
      image: "Customer Experience & Satisfaction",
      question: "Customer Experience & Satisfaction",
      answer:
        "Gain deeper insights into customer behavior, demographics, and interaction quality, ensuring every customer leaves satisfied.",
    },
    {
      image: "Sales & Upselling Opportunities",
      question: "Sales & Upselling Opportunities",
      answer:
        "Monitor customer conversations and employee engagement to identify upselling potential and maximize sales performance.",
    },
    {
      image: "Employee Training & Performance",
      question: "Employee Training & Performance",
      answer:
        "Empower your team: Razor Sharp tracks interactions to highlight training needs, helping you develop top-performing employees and reduce employee attrition.",
    },
    {
      image: "Actionable Real-time Notifications",
      question: "Actionable Real-time Notifications ",
      answer:
        "Get real-time notifications on Standard Operating Procedure (SOP) deviations, ensuring your store runs smoothly and efficiently.",
    },
  ];
  return (
    <Layout>
      <Header />
      <section>
        <HomeCard
          id="razor-sharp"
          title={"razor-sharp"}
          paragraph={
            "Turn your store's video and voice data into actionable <br class='hidden xl:block' /> insights. Razor Sharp helps you uncover hidden <br class='hidden xl:block' /> opportunities, optimise operations, and boost customer <br class='hidden xl:block' /> satisfaction through Insights and Real-time Actionable <br class='hidden xl:block' /> Notifications."
          }
          image={"RazorSharpNew"}
          buttontext="Schedule a demo"
          buttonclass={"w-56"}
          issecondbutton={false}
          buttonFunction={handleScroll}
          animation={"fade-up"}
        />
      </section>
      <section>
        <div className="container px-5 xl:px-20 py-12">
          <div
            data-aos="fade-up"
            className="flex flex-col xl:flex-row justify-between items-center"
          >
            <small className="font-sf-pro-display-bold font-normal text-5xl leading-[60px]">
              Get ready for{" "}
              <strong>
                game <br /> changing results
              </strong>
            </small>
            <div data-aos="slide-up" className=" mt-10 xl:mt-0 ">
              <GlassCard
                className={
                  "bg-[#9999E9] text-[#2D2D58] rotate-12 xl:absolute translate-x-0 xl:-translate-x-60 translate-y-0 xl:translate-y-24 z-0"
                }
                percentage={"35%"}
                small={"Process Adherence"}
                span={"Improvement"}
              />
              <GlassCard
                className={"bg-[#F25F3E] text-[#fff] -rotate-12 -z-50 "}
                percentage={"22%"}
                small={"Table Turn Around"}
                span={"Time"}
              />
              <GlassCard
                className={
                  "bg-[#EE396A] text-[#fff] -rotate-12 translate-y-0 xl:-translate-y-5 z-30 "
                }
                percentage={"52%"}
                small={"Additional Upsell"}
                span={"Conversions"}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <FAQComponent faqs={faqs} image={"RazorSharpNew img"} />
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
