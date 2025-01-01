import { useState, createContext } from 'react';

const Card = () => {
  const [feet, setFeet] = useState(0);
  const [inch, setInch] = useState(0);
  const [kg, setKg] = useState(0);

  function feetFunc(e) {
    setFeet(e.target.value);
  }

  function inchFunc(e) {
    setInch(e.target.value);
  }

  function kgFunc(e) {
    setKg(e.target.value);
  }

  const feetConvertToInches = feet * 12;
  let totalInches = Number(feetConvertToInches) + Number(inch);
  let inchToMeter = 0.0254; //meter
  inchToMeter = inchToMeter * totalInches;

  function calc() {
    console.log('ok');
    console.log({ feet, inch, kg });

    // console.log(totalInches * inchToMeter);
    console.log(inchToMeter ** 2);
  }

  return (
    <div className="w-[19rem] md:w-[20rem] h-fit p-4 py-10 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="space-y-6"
        action="#"
      >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          BMI - Body mass index (Metric)
        </h5>
        <div>
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Height (feet & inch)
          </label>
          <span className="flex">
            <input
              value={feet == 0 ? '' : feet}
              onChange={feetFunc}
              type="number"
              name="number"
              id="inch"
              min={1}
              max={8}
              className="bg-gray-50 border w-1/2 border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="5 feet"
              required
            />
            <input
              onChange={inchFunc}
              value={inch == 0 ? '' : inch}
              type="number"
              name="number"
              id="inch"
              min={1}
              max={12}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="6 inch"
              required
            />
          </span>
        </div>
        <div>
          <label
            htmlFor="kg"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Weight (kg)
          </label>
          <input
            onChange={kgFunc}
            value={kg == 0 ? '' : kg}
            type="number"
            name="number"
            id="kg"
            placeholder="55 kg"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>

        <button
          onClick={calc}
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Calculate
        </button>
      </form>
    </div>
  );
};

export default Card;
