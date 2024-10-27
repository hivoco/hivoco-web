import React from "react";

interface props {
  className: string;
  percentage: String;
  small: String;
  span: String;
}

function GlassCard({ className, percentage, small, span }: props) {
  return (
    <div
      className={`rounded-3xl p-6  flex flex-col justify-center  items-center w-60 h-72 ${className}`}
    >
      <strong className="text-7xl font-sf-pro-display-bold ">
        {percentage}
      </strong>
      <small className="text-xl font-bold font-sf-pro-display-bold mt-5 mb-1">
        {small}
      </small>
      <span className="text-xl font-normal font-sf-pro-display-normal">
        {span}
      </span>
    </div>
  );
}

export default GlassCard;
