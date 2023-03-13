import { useState } from "react";
import ProgressBar from '@/components/ProgressBar';

export default function PollingComponent() {
  const [selectedOption, setSelectedOption] = useState("");
  const [pollResults, setPollResults] = useState({ option1: 0, option2: 0, option3: 0 });

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
    <div className="flex flex-col items-start gap-8">
      <form onSubmit={handlePollSubmit} className="w-full max-w-lg">
        <div className="flex flex-col items-center mb-4 gap-3">
          <label htmlFor="option1">
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
          <label htmlFor="option3">
            <input
              type="radio"
              id="option3"
              name="poll-option"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <span className="text-sm text-white">Option 3</span>
          </label>
        </div>
        <button
          disabled = {pollResults.option1 === 100 || pollResults.option2 === 100}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Submit
        </button>
      </form>
      
      <div className="bg-gray-100 py-6 pl-8 pr-12 rounded-lg flex flex-col">
        <h2 className="text-lg font-bold mb-2">Results:</h2>
        <div className="w-96">
          Option 1: <ProgressBar pollResults={pollResults.option1} />
        </div>
        <div>
          Option 2: <ProgressBar pollResults={pollResults.option2} />
        </div>
      </div>
    </div>
  );
};
