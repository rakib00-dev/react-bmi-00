import Card from './Components/Card';

function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-5 mb-5 m-auto w-11/12">
      <Card />

      {/* BMI Charts */}
      {/* <ul>
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
      </ul> */}

      {/* result */}
      <div>
        <i>{}</i>
      </div>
    </div>
  );
}

export default App;
