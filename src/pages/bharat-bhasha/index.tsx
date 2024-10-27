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
      question: "Human-Like Conversations",
      answer:
        "Engage customers with AI-driven conversations that mimic human dialogue, creating an authentic and interactive experience. Bharat Bhasha AI adapts its tone, pace, and context, ensuring every conversation feels natural, fostering trust, and reducing friction in communication.",
    },
    {
      question: "Multi-Language Support",
      answer:
        "Bharat Bhasha AI supports over 10 regional Indian languages along with code-mixed conversations, allowing businesses to connect with diverse audiences. Its ability to understand and respond in native languages breaks down language barriers and widens the scope for market penetration, particularly in Tier II and III cities.",
    },
    {
      question: "Real-Time Intelligence and Low Latency",
      answer:
        "Leveraging real-time AI-driven intelligence, the system offers quick, accurate responses without any delay, enhancing customer satisfaction. It’s built for high-volume conversations and provides actionable insights by analyzing conversation patterns, allowing businesses to optimize their sales strategies.",
    },
  ];
  return (
    <Layout>
      <Header />
      <section>
        <Card
          title={"BharatBhasha"}
          paragraph={
            "Human-like conversational AI tailored for India's diverse languages, <br/> transforming telephonic sales interactions. With support for over 10 <br/> regional languages and seamless integration with existing systems,<br/> it delivers real-time, natural conversations that boost engagement <br/> and conversion rates. Scalable and customizable, Bharat Bhasha AI <br/> is the ideal telephonic solution for businesses looking to connect <br/> authentically with their customers while driving actionable insights <br/>and enhancing sales efficiency."
          }
          image={"talkingImg"}
          buttontext={"Schedule a demo"}
          buttonclass={"w-56"}
          issecondbutton={false}
          buttonFunction={handleScroll}
        />
      </section>

      <section>
        <FAQComponent faqs={faqs} image={"bharat bhasha img"} />
      </section>
      <section ref={sectionRef}>
        <Contact />
      </section>
    </Layout>
  );
}

export default index;
