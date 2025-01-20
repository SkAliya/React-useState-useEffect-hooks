import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  };

  // useEffect(() => getAdvice(), []);
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Click me</button>
      <UpdateCount count={count} />
    </div>
  );
}

function UpdateCount(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> advices till now.😅
    </p>
  );
}
