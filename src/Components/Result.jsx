const Result = ({ result }) => {
  return (
    <div className="w-full h-fit">
      <h1 className="text-center text-md md:text-xl">
        {' '}
        Result :{' '}
        <strong>
          <i>{result}</i>
        </strong>
      </h1>
    </div>
  );
};

export default Result;
