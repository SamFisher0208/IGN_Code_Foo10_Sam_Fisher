import React from "react";

export default function ProgressBar(props) {
  const { pollResults } = props;

  return (
    <div className="h-8 w-full bg-slate-300 rounded-full m-3">
      <div style={{ width: `${pollResults}%`}} className={`h-full bg-purple-500 rounded-full text-right`}>
        <span className="text-white p-5 font-bold"
            // aria-valuenow=${pollResults}  *import trace module error?
            // aria-valuemin="0"
            // aria-valuemax="100"         
        >{`${pollResults}%`}</span>
      </div>
    </div>
  );
};
