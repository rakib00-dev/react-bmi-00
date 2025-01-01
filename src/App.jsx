import Card from './Components/Card';
import Result from './Components/Result';

function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-5 mb-5 m-auto w-11/12 gap-5">
      <Card />

      {/* BMI Charts */}
      <ol className="text-sm md:text-lg list-decimal card bg-base-100 shadow-xl py-5 px-10 border rounded-md border-t-1 border-black/10 w-fit ">
        <li>
          <strong>Underweight</strong>: Less than 18.5
        </li>
        <li>
          <strong>Healthy weight</strong>: 18.5 to 24.9
        </li>
        <li>
          <strong>Overweight</strong>: 25 to 29.9
        </li>
        <li>
          <strong>Obesity</strong>: 30 or greater
        </li>
        <li>
          <strong>Class 1 obesity</strong>: 30 to less than 35
        </li>
        <li>
          <strong>Class 2 obesity</strong>: 35 to less than 40
        </li>
        <li>
          <strong>Class 3 obesity (severe obesity)</strong>: 40 or greater
        </li>
      </ol>

      {/* result */}
      <Result />
    </div>
  );
}

export default App;
