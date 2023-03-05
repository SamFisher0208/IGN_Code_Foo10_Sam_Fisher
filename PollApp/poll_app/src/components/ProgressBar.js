import React from "react";

export default function ProgressBar(props) {
  const { completed } = props;

  return (
    <div className="h-8 w-full bg-slate-300 rounded-full m-3">
      <div style={{ width: `${completed}%`}} className={`h-full bg-purple-500 rounded-full text-right`}>
        <span className="text-white p-5 font-bold">{`${completed}%`}</span>
      </div>
    </div>
  );
};
