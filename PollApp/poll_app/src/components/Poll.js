import { useState } from "react";
import ProgressBar from '@/components/ProgressBar';

const PollingComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [pollResults, setPollResults] = useState({ option1: 0, option2: 0 });

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handlePollSubmit = (e) => {
    e.preventDefault();
    setPollResults((prevState) => ({
      ...prevState,
      [selectedOption]: prevState[selectedOption] + 1,
    }));
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handlePollSubmit} className="w-full max-w-sm">
        <div className="flex items-center mb-4">
          <label htmlFor="option1" className="mr-4">
            <input
              type="radio"
              id="option1"
              name="poll-option"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <span className="text-sm text-white">Option 1</span>
          </label>
          <label htmlFor="option2">
            <input
              type="radio"
              id="option2"
              name="poll-option"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <span className="text-sm text-white">Option 2</span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <div className="mt-8">
        
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Results:</h2>
          <div className="mb-2">
            {/* Option 1: <span className="font-bold">{pollResults.option1}</span> */}
            Option 1: <ProgressBar className="font-bold" pollResults={pollResults.option1} />
          </div>
          <div>
            {/* Option 2: <span className="font-bold">{pollResults.option2}</span> */}
            Option 2: <ProgressBar className="font-bold" pollResults={pollResults.option2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollingComponent;