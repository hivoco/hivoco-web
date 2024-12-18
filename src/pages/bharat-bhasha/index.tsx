import Bottom from "@/components/Bottom";
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import FAQComponent from "@/components/FAQ";

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
      image: "human like conversations",
      question: "Human-Like Conversations",
      answer:
        "Engage customers with AI-driven conversations that mimic human dialogue, creating an authentic and interactive experience. Bharat Bhasha AI adapts its tone, pace, and context, ensuring every conversation feels natural, fostering trust, and reducing friction in communication.",
    },
    {
      image: "Multi language support",
      question: "Multi-Language Support",
      answer:
        "Bharat Bhasha AI supports over 10 regional Indian languages along with code-mixed conversations, allowing businesses to connect with diverse audiences. Its ability to understand and respond in native languages breaks down language barriers and widens the scope for market penetration, particularly in Tier II and III cities.",
    },
    {
      image: "real time intelligence n low latency",
      question: "Real-Time Intelligence and Low Latency",
      answer:
        "Leveraging real-time AI-driven intelligence, the system offers quick, accurate responses without any delay, enhancing customer satisfaction. It’s built for high-volume conversations and provides actionable insights by analyzing conversation patterns, allowing businesses to optimize their sales strategies.",
    },
    {
      image: "seamless crm intelligence",
      question: "Seamless CRM Integration",
      answer:
        "Integrate effortlessly with existing CRM systems to streamline operations and ensure a seamless flow of data. Bharat Bhasha AI works in sync with backend systems to automate lead generation, qualification, and follow-ups, enabling businesses to maintain customer records and manage sales pipelines efficiently.",
    },
    {
      image: "grounded in business logic",
      question: "Grounded in business logic ",
      answer:
        "Equipped with industry-specific workflows, Bharat Bhasha AI is customizable to fit the needs of any business. Whether it's retail, BFSI, or healthcare, the AI adjusts to deliver solutions tailored to your sales process, reducing time-to-market and improving productivity.",
    },
    {
      image: "actinable insights & scalability",
      question: "Actionable Insights and Scalability",
      answer:
        "Gain access to actionable insights that help fine-tune your approach to sales conversations, identify potential bottlenecks, and scale your operations. Bharat Bhasha AI is designed to grow with your business, ensuring you can handle increased call volumes without compromising on quality.",
    },
  ];
  return (
    <Layout>
      <Header />
      <section>
        <Card
          title={"BharatBhashaNew"}
          paragraph={
            "Human-like conversational AI tailored for India's diverse languages, <br class='hidden md:block' /> transforming telephonic sales interactions. With support for over 10 <br class='hidden md:block' /> regional languages and seamless integration with existing systems, <br class='hidden md:block' /> it delivers real-time, natural conversations that boost engagement <br class='hidden md:block' /> and conversion rates. Scalable and customizable, Bharat Bhasha AI <br class='hidden md:block' /> is the ideal telephonic solution for businesses looking to connect <br class='hidden md:block' /> authentically with their customers while driving actionable insights <br class='hidden md:block' /> and enhancing sales efficiency."
          }
          image={"bharatImg"}
          buttontext={"Schedule a demo"}
          buttonclass={"w-56"}
          issecondbutton={false}
          buttonFunction={handleScroll}
        />
      </section>

      <section>
        <FAQComponent faqs={faqs} image={"bharat bhasha img"} />
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
