import { useState } from "react";
import ProgressBar from '@/components/ProgressBar';

export default function PollingComponent() {
  const [selectedOption, setSelectedOption] = useState("");
  const [pollResults, setPollResults] = useState({ bulbasaur: 0, charmander: 0, squirtle: 0 });

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
      <form onSubmit={handlePollSubmit} className="w-full">
        <div className="flex flex-col items-center mb-4 gap-3">
        <div className='text-white text-3xl text-center'>Which first gen starter is your favorite?</div>
          <label htmlFor="bulbasaur">
            <input
              type="radio"
              id="bulbasaur"
              name="poll-option"
              value="bulbasaur"
              checked={selectedOption === "bulbasaur"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <span className="text-2xl text-white">Bulbasaur</span>
          </label>
          <label htmlFor="charmander">
            <input
              type="radio"
              id="charmander"
              name="poll-option"
              value="charmander"
              checked={selectedOption === "charmander"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <span className="text-2xl text-white">Charmander</span>
          </label>
          <label htmlFor="squirtle">
            <input
              type="radio"
              id="squirtle"
              name="poll-option"
              value="squirtle"
              checked={selectedOption === "squirtle"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <span className="text-2xl text-white">Squirtle</span>
          </label>
        </div>
        <button
          disabled = {pollResults.bulbasaur === 100 || pollResults.charmander === 100 || pollResults.squirtle === 100}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Submit
        </button>
      </form>
      
      <div className="bg-gray-100 py-6 pl-8 pr-12 rounded-lg flex flex-col w-full">
        <h2 className="text-lg font-bold mb-2">Results:</h2>
        <div className="">
          Bulbasaur: <ProgressBar pollResults={pollResults.bulbasaur} />
        </div>
        <div>
          Charmander: <ProgressBar pollResults={pollResults.charmander} />
        </div>
        <div>
          Squirtle: <ProgressBar pollResults={pollResults.squirtle} />
        </div>
      </div>
    </div>
  );
};
