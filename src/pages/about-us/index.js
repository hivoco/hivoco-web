import Contact from "@/components/Contact";

import Header from "@/components/Header";

function index() {
  const styles = {
    flex: "flex items-center",
    flexCol: "flex flex-col justify-center items-center",
    flexBetween: "flex justify-between item-center",
    flexCenter: "flex justify-center item-center",
    paragraph: "text-base font-normal text-black",
  };

  return (
    <div>
      <Header />
      <section>
        <div className=" h-screen flex justify-center items-center text-gray-400 font-extrabold text-6xl">
          <h2>Coming Soon...</h2>
        </div>
      </section>
      <section id="contact-us">
        <Contact />
      </section>
    </div>
  );
}

export default index;
