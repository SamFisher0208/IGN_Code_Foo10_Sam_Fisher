import React from "react";

export default function ProgressBar(props) {
  const { pollResults, image } = props;

  return (
    <div className="h-8 w-full bg-slate-300 rounded-md m-3">
      <div style={{ width: `${pollResults}%`}} className={`h-full bg-purple-500 rounded-md text-right transition-width duration-1000 ease-in-out`}>
        <span className="text-white pl-3 font-bold inline-flex">
          <img className="object-scale-down h-10 w-10 pr-2 pb-2" src={`${image}`} alt="" />
          {`${pollResults}%`}
        </span>
      </div>
    </div>
  );
};
