import Contact from "@/components/Contact";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Bottom from "@/components/Bottom";
import Image from "next/image";

function index() {
  return (
    <Layout>
      <Header />
      <section>
        <div className="container px-5 xl:px-20 pt-20 pb-12">
          <h2 className="font-sf-pro-display-bold text-3xl xl:text-8xl font-bold">
            About Us
          </h2>
          <p className="text-[#000000] font-sf-pro-display-normal text-sm lg:text-base mt-4">
            Welcome to HiVoco Studios, where cutting-edge technology fuels
            impactful solutions. Specializing in computer vision, voice AI,
            video AI and interactive content, we deliver business solutions that
            transform how audiences connect with brands. <br /> <br /> Our CEO,
            Pritesh Chothani, with 17+ years of experience in brands like
            Whirlpool of India, Coca-Cola India, and Radio Mirchi, has shaped a
            tech-driven vision, recognized by his three-time 40-Under-40
            achievement (2021, 2022, 2023) and over 60 awards. Meanwhile, our
            CTO, Yash Chaturvedi, brings 17+ years of AI expertise, holding
            seven global patents and numerous research publications that anchor
            HiVoco’s technological edge.
          </p>
          <div className="flex gap-5 py-7 xl:justify-center flex-col xl:flex-row items-center  ">
            <Image
              src={`/pngs/team.png`}
              alt="example"
              width={450}
              height={300}
              // className="object-cover h-full w-full rounded-lg"
            />

            <p className="text-[##000000] font-sf-pro-display-normal text-sm lg:text-base">
              Our team brings together machine learning engineers, UI
              developers, content strategists, and design experts, blending
              technical depth with forward-thinking creativity. Drawn from
              backgrounds in global corporations and premier institutions like
              IIMC, JNU, Jamia Millia Islamia, IMT Ghaziabad, IIT Roorkee, and
              the University of Delhi, our team pushes the boundaries of
              AI-driven content and business solutions. <br /> <br />
              Our commitment to excellence has been recognized across the
              industry with awards from prestigious organisations, including the
              Ministry of Education, Business World, Afaqs, Exchange4Media,
              Indian Merchant Chambers, India Book of Records, and MMAs. <br />
              <br />
              At HiVoco Studios, technology isn’t just a tool—it’s the
              foundation of every solution we deliver, empowering clients with
              innovative, AI-powered capabilities that redefine engagement and
              elevate performance across industries.
            </p>
          </div>
          {/* <p className="text-[##000000] font-sf-pro-display-normal text-sm lg:text-base mt-4">
            At HiVoco Studios, technology isn’t just a tool—it’s the foundation
            of every solution we deliver, empowering clients with innovative,
            AI-powered capabilities that redefine engagement and elevate
            performance across industries.
          </p> */}
          <div className="pt-12 flex flex-col justify-center items-center gap-14">
            <h2 className="font-sf-pro-display-bold text-2xl xl:text-6xl font-bold">
              Let's Talk
            </h2>
            <div className="flex gap-28">
              <small className="text-lg font-normal font-sf-pro-display-normal">
                Email-{" "}
                <a href="mailto:pritesh@hivoco.com">pritesh@hivoco.com </a>
              </small>
              <small className="text-lg font-normal font-sf-pro-display-normal">
                Phone- <a href="tel:+918285022022">+91 8285022022</a>
              </small>
            </div>
          </div>
        </div>
      </section>
      <section
        className=" w-full bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #82A5F3, #6969AF), url('/pngs/Texture.png')",
          backgroundBlendMode: "overlay",
        }}
        // ref={sectionRef}
        id="contact-us"
      >
        <Contact />
        <Bottom />
      </section>
    </Layout>
  );
}

export default index;
