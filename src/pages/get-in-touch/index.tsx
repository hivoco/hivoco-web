import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Button from "@/elements/Button";
import Image from "next/image";

interface inputprops {
  label: String;
  placeholder: String;
  className?: String;
  islabel?: Boolean;
}
const InputField: React.FC<inputprops> = ({
  label,
  placeholder,
  className,
  islabel = true,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {islabel && (
        <label className="font-sf-pro-display-normal font-normal text-base">{`${label}`}</label>
      )}
      <input
        className="p-4 text-[#00000080]  ring-[#00000040] bg-transparent outline-none text-sm ring-1 rounded-lg "
        placeholder={`${placeholder}`}
      />
    </div>
  );
};

function index() {
  return (
    <Layout>
      <Header />
      <section>
        <div className="container px-5 xl:px-60 py-9">
          <div className="flex justify-center items-center flex-col text-center">
            <h2 className="font-sf-pro-display-bold text-3xl xl:text-5xl font-bold">
              Get in Touch with us!
            </h2>
            <p className="text-p-gray font-sf-pro-display-normal text-sm lg:text-lg">
              Let us know how we can help you with your next big idea or
              challenge.
            </p>
          </div>
          <div>
            <select className="text-p-gray bg-transparent outline-none font-sf-pro-display-normal text-sm lg:text-lg w-64 ring-1 rounded-lg ring-[#00000040] p-4 mt-11 mb-9">
              <option value="0">Select car:</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <InputField
              label={"Name/Title*"}
              placeholder={"Please write your name"}
            />
            <InputField
              label={"Company (Organisation) Name*"}
              placeholder={"Please write the name of your company"}
            />
            <InputField
              label={"Contact Number*"}
              placeholder={"Please enter a phone number"}
            />
            <InputField
              label={"Email*"}
              placeholder={"Please enter you email address"}
            />
            <InputField
              label={"Inquiry Subject*"}
              placeholder={"Please write the name of the business"}
              className="col-span-2" // Full width for the second-to-last input
            />
            <InputField
              label={"Details of Inquiry/ Request*"}
              placeholder={"Please write details related to your inquiry"}
              className="col-span-2" // Full width for the last input
            />
          </div>
          <div className="mt-8  flex ring-1 ring-[#00000040] w-min rounded-lg ">
            <input
              className="bg-transparent outline-none w-[400px] p-4 text-[#00000080] text-sm "
              placeholder={`Please upload below 10MB`}
            />
            <div className="bg-buttonColor flex justify-center items-center gap-2 h-full p-4 rounded-r-lg ">
              <Image
                src={`/svgs/upload.svg`}
                alt="example"
                width={10}
                height={10}
                // className="object-cover h-auto w-auto border"
              />
              <span className="font-sf-pro-display-normal text-sm font-normal text-white ">
                Upload
              </span>
            </div>
          </div>
          <small className="text-buttonColor font-normal font-sf-pro-display-normal text-xs">
            *Please attach the optional documents(proposal, portfolio etc)
          </small>
          <br />
          <small className="text-buttonColor font-normal font-sf-pro-display-normal text-xs">
            *Allowed extensions : zip, doc, docx, ppt, pdf
          </small>

          <div className="mt-8">
            <input
              className="font-normal font-sf-pro-display-normal text-sm"
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label>
              {" "}
              Consent to Collection & Use of Personal Information (required*)
            </label>{" "}
            <br />
            <small className="text-buttonColor font-normal font-sf-pro-display-normal text-xs">
              You must agree to the terms of use and collection of personal
              information in order to apply.
            </small>
          </div>
          <div>
            <Button title="SEND REQUEST" className="w-56 mx-auto mt-20 mb-20" />
          </div>
        </div>
      </section>

      <section>
        <Contact />
      </section>
    </Layout>
  );
}

export default index;
