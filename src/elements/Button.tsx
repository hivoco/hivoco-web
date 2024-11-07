import Image from "next/image";

interface ButtonProps {
  title: string;
  className: string;
  isIcon?: boolean;
  onClick?: () => void;
  isLoading?: boolean; // Use lowercase 'boolean' here
}

function Button({
  title,
  className,
  isIcon = true,
  onClick,
  isLoading = false,
}: ButtonProps) {
  const styles = {
    flex: "flex items-center",
    flexBetween: "flex justify-between item-center",
    flexCenter: "flex justify-center item-center",
    paragraph: "text-base font-normal text-black",
  };

  return (
    <div
      onClick={!isLoading ? onClick : undefined} // Disable onClick when loading
      className={`${styles.flexCenter} ${styles.flex} px-1 py-3 bg-[#F25F3E] h-min text-white gap-1 rounded-md shadow-button-shadow hover:cursor-pointer group ${className}`}
    >
      <button className="text-sm lg:text-lg font-medium font-sf-pro-display-medium">
        {isLoading ? (
          <div className="loader animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
        ) : (
          title
        )}
      </button>
      {!isLoading && isIcon && (
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
