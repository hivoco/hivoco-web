import Image from "next/image";

interface ButtonProps {
  title: string;
  className: string;
  isIcon?: Boolean;
  onClick?: () => void;
}

function Button({ title, className, isIcon = true, onClick }: ButtonProps) {
  const styles = {
    flex: "flex items-center",
    flexBetween: "flex justify-between item-center",
    flexCenter: "flex justify-center item-center",
    paragraph: "text-base font-normal text-black",
  };

  return (
    <div
      onClick={onClick}
      className={`${styles.flexCenter} ${styles.flex} px-1 py-3 bg-[#F25F3E] h-min text-white gap-1  rounded-md shadow-button-shadow hover:cursor-pointer group ${className}`}
    >
      <button className="text-sm lg:text-lg font-medium font-sf-pro-display-medium ">
        {title}
      </button>
      {isIcon && (
        <Image
          className="group-hover:rotate-45 transition-all duration-100 delay-100 ease-in-out"
          src="/svgs/arrow_outward.svg"
          alt="logo"
          height={10}
          width={10}
        />
      )}
    </div>
  );
}

export default Button;
