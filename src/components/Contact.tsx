import Button from "@/elements/Button";
import { useState } from "react";
import axios from "axios";

interface contactobject {
  first: string;
  last: string;
  email: string;
  message: string;
}
function Contact() {
  const input = ["First Name", "Last Name", "Email", "Message"];
  const [error, setError] = useState<String>("");
  const [success, setSuccess] = useState<String>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<contactobject>({
    first: "",
    last: "",
    email: "",
    message: "",
  });
  const submitDate = async () => {
    if (!data.first) {
      setError("Please enter first name");
      return;
    } else if (!data.last) {
      setError("Please enter last name");
      return;
    } else if (!data.email) {
      setError("Please enter first email");
      return;
    } else if (!data.message) {
      setError("Please enter your's message");
      return;
    }
    try {
      setError("");
      setIsLoading(true);
      const response = await axios.post(
        // "https://api.hivoco.com/contact/create",
        "http://localhost:8815/contact/create",
        JSON.stringify({
          name: data.first + data.last,
          email: data.email,
          inquiry_description: data.message,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
      setSuccess("Thank you for reaching out. We’ll be in touch shortly.");
      setData({ ...data, first: "", last: "", email: "", message: "" });
      setIsLoading(false);
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    } catch (error) {
      console.error(error);
      setError("Failed");
      setIsLoading(false);
    }
  };
  const onChangeFunction = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setError("");
    if (e.target.name === "First Name") {
      setData({ ...data, first: e.target.value });
    }
    if (e.target.name === "Last Name") {
      setData({ ...data, last: e.target.value });
    }
    if (e.target.name === "Email") {
      setData({ ...data, email: e.target.value });
    }
    if (e.target.name === "Message") {
      setData({ ...data, message: e.target.value });
    }
  };
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
              <>
                {n === "Message" ? (
                  <>
                    <textarea
                      onChange={onChangeFunction}
                      key={index}
                      name={n}
                      rows={2}
                      className={`p-3 rounded-lg bg-[#E0E0E0] w-72 xl:w-80 text-black placeholder:text-gray-500 outline-none `}
                      placeholder={n}
                      value={data.message}
                    />
                    {error && (
                      <span className="text-xs text-red-800 font-sf-pro-display-normal w-full -mt-5">
                        {error}
                      </span>
                    )}
                    {success && (
                      <span className="text-xs text-green-800 font-sf-pro-display-bold font-sf-pro-display-medium w-full -mt-5">
                        {success}
                      </span>
                    )}
                  </>
                ) : (
                  <input
                    onChange={onChangeFunction}
                    name={n}
                    className="p-3 rounded-lg bg-[#E0E0E0] w-72 xl:w-80 text-black placeholder:text-gray-500 outline-none  "
                    placeholder={n}
                    value={
                      n === "First Name"
                        ? data.first
                        : n === "Last Name"
                        ? data.last
                        : n === "Email"
                        ? data.email
                        : ""
                    }
                  />
                )}
              </>
            );
          })}

          <Button
            title="Connect with us"
            className="w-72 xl:w-80"
            isIcon={false}
            onClick={() => submitDate()}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
// background: linear-gradient(167.67deg, #82A5F3 0%, #6969AF 100%);
