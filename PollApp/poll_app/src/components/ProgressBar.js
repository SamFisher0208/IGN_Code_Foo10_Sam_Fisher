import React from "react";

export default function ProgressBar(props) {
  const { pollResults } = props;

  return (
    <div className="h-8 w-full bg-slate-300 rounded-md m-3">
      <div style={{ width: `${pollResults}%`}} className={`h-full bg-purple-500 rounded-md text-right transition-width duration-700 ease-in-out`}>
        <span className="text-white p-5 font-bold">{`${pollResults}%`}</span>
      </div>
    </div>
  );
};
