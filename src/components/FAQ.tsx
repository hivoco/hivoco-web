import Image from "next/image";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between w-full text-left text-lg font-medium text-gray-800"
        onClick={onToggle}
      >
        {question}
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 delay-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="mt-2 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

interface FAQ {
  image: string;
  question: string;
  answer: string;
}

interface props {
  image: String;
  faqs?: FAQ[];
}

const FAQComponent: React.FC<props> = ({ image, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    setImageIndex(index);
  };

  return (
    <div className="container px-5 xl:px-20 py-20  ">
      <div className="text-center mb-16 ">
        <small className="font-sf-pro-display-bold font-normal text-3xl xl:text-5xl leading-[60px]">
          Key
          <strong>&nbsp;Features</strong>
        </small>
      </div>
      <div className="flex flex-between-center p-12 bg-white rounded-3xl gap-24">
        <div className="xl:w-1/2 w-full">
          {faqs?.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
        <div className="relative hidden xl:block">
          {faqs && faqs[imageIndex] && (
            <Image
              src={`/key-feature/${faqs[imageIndex]?.image}.png`}
              alt="example"
              width={400}
              height={200}
              className="rounded-3xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
