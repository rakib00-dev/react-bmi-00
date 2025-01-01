const Card = () => {
  return (
    <div className="w-[20rem] h-fit p-4 py-10 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          BMI - Body mass index (Metric)
        </h5>
        <div>
          <label
            for="number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Height (feet & inch)
          </label>
          <span className="flex">
            <input
              type="number"
              name="number"
              id="number"
              className="bg-gray-50 border w-1/2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="5 feet"
              required
            />
            <input
              type="number"
              name="number"
              id="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="6 inch"
              required
            />
          </span>
        </div>
        <div>
          <label
            for="number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Weight (kg)
          </label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="44 kg"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>

        <button
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
