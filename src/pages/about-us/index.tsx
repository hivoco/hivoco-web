import Contact from "@/components/Contact";
import Layout from "@/components/Layout";
import Header from "@/components/Header";

function index() {
  return (
    <Layout>
      <Header />
      <section>
        <div className=" h-screen flex justify-center items-center text-gray-400 font-extrabold text-6xl">
          <h2>Coming Soon...</h2>
        </div>
      </section>
      <section id="contact-us">
        <Contact />
      </section>
    </Layout>
  );
}

export default index;
