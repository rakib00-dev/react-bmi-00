import Card from './Components/Card';

function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-5 mb-5 m-auto w-11/12 gap-5">
      <Card />

      {/* BMI Charts */}
      <ol className="text-sm md:text-lg list-decimal p-5 ">
        <li className="">
          <strong>Underweight</strong>: Less than 18.5
        </li>
        <li className="">
          <strong>Healthy weight</strong>: 18.5 to 24.9
        </li>
        <li className="">
          <strong>Overweight</strong>: 25 to 29.9
        </li>
        <li className="">
          <strong>Obesity</strong>: 30 or greater
        </li>
        <li className="">
          <strong>Class 1 obesity</strong>: 30 to less than 35
        </li>
        <li className="">
          <strong>Class 2 obesity</strong>: 35 to less than 40
        </li>
        <li className="">
          <strong>Class 3 obesity (severe obesity)</strong>: 40 or greater
        </li>
      </ol>

      {/* result */}
      <div>
        <i>{}</i>
      </div>
    </div>
  );
}

export default App;
