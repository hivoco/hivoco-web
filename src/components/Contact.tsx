import Button from "@/elements/Button";

function Contact() {
  const input = ["First Name", "Last Name", "Email", "Company"];
  return (
    <div>
      <div className="container flex flex-col xl:flex-row gap-11 xl:gap-0 justify-between items-center px-5 xl:px-12 pt-24 pb-14  ">
        <div className="flex flex-col gap-3 text-white ">
          <h2 className="font-sf-pro-display-bold text-3xl md:text-4xl xl:text-5xl font-bold">
            GET IN TOUCH <br /> WITH US!
          </h2>
          <p className="hidden xl:block font-sf-pro-display-normal text-sm lg:text-lg">
            Let us know how we can help you with your next big <br /> idea or
            challenge.
          </p>
          <p className="block xl:hidden font-sf-pro-display-normal text-sm lg:text-lg">
            Let us know how we can help you with your next big idea or
            challenge.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-white py-8 px-6 rounded-3xl gap-6 shadow-button-shadow">
          {input.map((n, index) => {
            return (
              <input
                key={index}
                className="p-3 rounded-lg bg-[#E0E0E0] w-72 xl:w-80 text-black placeholder:text-gray-500 outline-none "
                placeholder={n}
              />
            );
          })}
          <Button
            title="Connect with us"
            className="w-72 xl:w-80"
            isIcon={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
// background: linear-gradient(167.67deg, #82A5F3 0%, #6969AF 100%);
