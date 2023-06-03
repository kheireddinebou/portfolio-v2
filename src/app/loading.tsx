import "../styles/loading.css";

const loading = () => {
  const myName = "kheiereddin";
  return (
    <div className="mx-auto container h-screen grid place-items-center">
      <div id="load">
        {myName
          .split("")
          .reverse()
          .map((letter, index) => (
            <div key={index}>{letter}</div>
          ))}
      </div>
    </div>
  );
};

export default loading;
