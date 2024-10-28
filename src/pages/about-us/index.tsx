import Contact from "@/components/Contact";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Bottom from "@/components/Bottom";

function index() {
  return (
    <Layout>
      <Header />
      <section>
        <div className=" h-screen flex justify-center items-center text-gray-400 font-extrabold text-6xl">
          <h2>Coming Soon...</h2>
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
