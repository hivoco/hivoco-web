import Card from "@/components/Card";
import Contact from "@/components/Contact";
import FAQComponent from "@/components/FAQ";
import FAQ from "@/components/FAQ";
import GlassCard from "@/components/GlassCard";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { useRef } from "react";

function index() {
 const sectionRef = useRef<HTMLDivElement>(null);
 const handleScroll = () => {
   sectionRef.current?.scrollIntoView({ behavior: "smooth" });
 };
  const faqs = [
    {
      question: "Customer Experience & Satisfaction",
      answer:
        "Gain deeper insights into customer behavior, demographics, and interaction quality, ensuring every customer leaves satisfied.",
    },
    {
      question: "Sales & Upselling Opportunities",
      answer:
        "Monitor customer conversations and employee engagement to identify upselling potential and maximize sales performance.",
    },
    {
      question: "Employee Training & Performance",
      answer:
        "Empower your team: Razor Sharp tracks interactions to highlight training needs, helping you develop top-performing employees and reduce turnover.",
    },
    {
      question: "Actionable Real-time Notifications ",
      answer:
        "Get real-time notifications on Standard Operating Procedure (SOP) deviations, ensuring your store runs smoothly and efficiently.",
    },
  ];
  return (
    <div>
      <Header />
      <section>
        <Card
          title={"RazorSharp"}
          paragraph={
            "Turn your store's video and voice data into actionable <br/> insights. Razor Sharp helps you uncover hidden <br/> opportunities, optimise operations, and boost customer <br/> satisfaction through Insights and Real-time Actionable <br/>Notifications."
          }
          image={"razorsharpImg"}
          buttontext="Schedule a demo"
          buttonclass={"w-56"}
          issecondbutton={false}
          buttonFunction={handleScroll}
        />
      </section>
      <section>
        <div className="container px-20 py-12">
          <div className="flex justify-between items-center">
            <small className="font-sf-pro-display-bold font-normal text-5xl leading-[60px]">
              Get ready for{" "}
              <strong>
                game <br /> changing results
              </strong>
            </small>
            <div className="">
              <GlassCard
                className={
                  "bg-[#9999E9] text-[#2D2D58] rotate-12 absolute -translate-x-60 translate-y-24 z-0"
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
                  "bg-[#EE396A] text-[#fff] -rotate-12 -translate-y-5 z-30 "
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
        <FAQComponent faqs={faqs} image={"razorsharp img"} />
      </section>
      <section ref={sectionRef}>
        <Contact />
      </section>
    </div>
  );
}

export default index;
