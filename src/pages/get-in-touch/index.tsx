import Bottom from "@/components/Bottom";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Button from "@/elements/Button";
import axios from "axios";
import { error } from "console";
import Image from "next/image";
import { useRef, useState } from "react";

interface inputprops {
  label: String;
  placeholder: String;
  className?: String;
  inputClassName?: String;
  islabel?: Boolean;
  status: Status;
  value: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

interface dataObject {
  category: string;
  name: string;
  company_name: string;
  contact_number: string;
  email: string;
  img: File | null;
  image_name: string;
  inquiry_subject: string;
  inquiry_description: string;
  ternandcondition: boolean;
}
interface Status {
  error: string;
  success: string;
  isLoading?: boolean;
}
const InputField: React.FC<inputprops> = ({
  label,
  placeholder,
  className,
  inputClassName,
  islabel = true,
  status,
  value,
  onChange,
  name,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {islabel && (
        <label className="font-sf-pro-display-normal font-normal text-base">{`${label}`}</label>
      )}
      <input
        name={name}
        onChange={onChange}
        value={value}
        className={`p-4 text-[#00000080]  ring-[#00000040] bg-transparent outline-none text-sm ring-1 rounded-lg ${inputClassName}`}
        placeholder={`${placeholder}`}
      />
      {status?.error && (
        <small className="text-buttonColor font-normal font-sf-pro-display-normal text-xs">
          {status?.error}
        </small>
      )}
    </div>
  );
};
const TextAreaField: React.FC<inputprops> = ({
  label,
  placeholder,
  className,
  inputClassName,
  islabel = true,
  status,
  value,
  onChange,
  name,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {islabel && (
        <label className="font-sf-pro-display-normal font-normal text-base">{`${label}`}</label>
      )}
      <textarea
        name={name}
        onChange={onChange}
        value={value}
        rows={4}
        className={`p-4 text-[#00000080]  ring-[#00000040] bg-transparent outline-none text-sm ring-1 rounded-lg ${inputClassName}`}
        placeholder={`${placeholder}`}
      />
      {status?.error && (
        <small className="text-buttonColor font-normal font-sf-pro-display-normal text-xs">
          {status?.error}
        </small>
      )}
    </div>
  );
};

function index() {
  const [data, setData] = useState<dataObject>({
    category: "Tech",
    name: "",
    company_name: "",
    contact_number: "",
    email: "",
    img: null,
    image_name: "",
    inquiry_subject: "",
    inquiry_description: "",
    ternandcondition: false,
  });
  const [status, setStatus] = useState<Status>({
    error: "",
    success: "",
    isLoading: false,
  });

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setData({ ...data, category: event.target.value });
  };

  const submitDate = async () => {
    if (
      !data.name ||
      !data.company_name ||
      !data.email ||
      !data.inquiry_subject ||
      !data.inquiry_description
    ) {
      setStatus({ ...status, error: "Please fill the details" });
      return;
    }

    try {
      setStatus({ ...status, error: "" });
      setStatus({ ...status, isLoading: true });

      // Convert data to x-www-form-urlencoded format
      const formData = new URLSearchParams();
      formData.append("name", data.name);
      formData.append("company_name", data.company_name);
      formData.append("email", data.email);
      formData.append("inquiry_subject", data.inquiry_subject);
      formData.append("inquiry_description", data.inquiry_description);

      formData.append("image", data.image_name);

      formData.append(
        "termandcondition",
        data.ternandcondition ? "true" : "false"
      );

      const response = await axios.post(
        "https://api.hivoco.com/contact/create",
        // "http://localhost:8815/contact/create",
        formData.toString(), // Send as URL-encoded string
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      setStatus({ ...status, isLoading: false });
      setStatus({
        ...status,
        success: "Thank you for reaching out. We’ll be in touch shortly.",
      });
      setTimeout(() => {
        setStatus({ ...data, isLoading: false, success: "", error: "" });
      }, 5000);
    } catch (error) {
      console.error(error);
      setStatus({ ...status, isLoading: false });
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, ternandcondition: event.target.checked });
  };
  const onChangeFunction = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStatus({ ...status, error: "" });
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first selected file
    if (file) {
      setData({ ...data, img: file });
      setData({ ...data, image_name: file.name });
    }
  };
  return (
    <Layout>
      <Header />
      <section>
        <div className="container px-5 xl:px-60 py-9">
          <div className="flex justify-center items-center flex-col text-center gap-3">
            <h2 className="font-sf-pro-display-bold text-3xl xl:text-5xl font-bold">
              Get in Touch with us!
            </h2>
            <p className="text-p-gray font-sf-pro-display-normal text-sm lg:text-lg">
              Let us know how we can help you with your next big idea or
              challenge.
            </p>
          </div>
          <div>
            <select
              className="text-p-gray bg-transparent outline-none font-sf-pro-display-normal text-sm lg:text-base w-64 ring-1 rounded-lg ring-[#00000040] p-4 mt-11 mb-9"
              value={data.category} // Set the selected value
              onChange={handleCategoryChange} // Update state on selection
            >
              {/* <option value="">Select a category</option> */}
              <option value="Tech">Tech</option>
              <option value="Creative">Creative</option>
              <option value="Career">Career</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <InputField
              label={"Name/Title*"}
              placeholder={"Please write your name"}
              status={status}
              value={data.name}
              name="name"
              onChange={onChangeFunction}
            />
            <InputField
              label={"Company (Organisation) Name*"}
              placeholder={"Please write the name of your company"}
              status={status}
              value={data.company_name}
              name="company_name"
              onChange={onChangeFunction}
            />
            <InputField
              label={"Contact Number*"}
              placeholder={"Please enter a phone number"}
              status={status}
              value={data.contact_number}
              name="contact_number"
              onChange={onChangeFunction}
            />
            <InputField
              label={"Email*"}
              placeholder={"Please enter you email address"}
              status={status}
              value={data.email}
              name="email"
              onChange={onChangeFunction}
            />
            <InputField
              label={"Inquiry Subject*"}
              placeholder={"Please write the name of the business"}
              className="col-span-2"
              status={status}
              value={data.inquiry_subject}
              name="inquiry_subject"
              onChange={onChangeFunction}
            />
            <TextAreaField
              label={"Details of Inquiry/ Request*"}
              placeholder={"Please write details related to your inquiry"}
              className="col-span-2 h-36"
              value={data.inquiry_description}
              status={status}
              name="inquiry_description"
              onChange={onChangeFunction}
            />
          </div>
          <div className="mt-8  flex ring-1 ring-[#00000040] sm:w-min w-full rounded-lg ">
            <input
              value={data.image_name}
              className="bg-transparent outline-none w-[400px] p-4 text-[#00000080] text-sm "
              placeholder={`Please upload below 10MB`}
            />
            <div
              onClick={handleButtonClick}
              className="bg-buttonColor flex justify-center items-center gap-2 h-full p-4 rounded-r-lg "
            >
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
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }} // Hide the input
            />
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
              id="accept"
              name="accept"
              value="Accept"
              checked={data.ternandcondition}
              onChange={handleCheckboxChange}
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
            <br />
            {status.success && (
              <span className="text-sm text-green-500  font-sf-pro-display-medium font-medium w-full ">
                {status.success}
              </span>
            )}
          </div>
          <div>
            <Button
              onClick={() => submitDate()}
              title="SEND REQUEST"
              className="w-56 mx-auto mt-20 mb-20"
              isLoading={status.isLoading}
            />
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
      >
        <Bottom />
      </section>
    </Layout>
  );
}

export default index;
