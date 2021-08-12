import useSWR from "swr";
import { useState } from "react";
import api from "../lib/api";

function Greet() {
  const { data, error } = useSWR(api("/greeting"));

  return (
    <>
      {data && <h1>{data.greeting}</h1>}
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </>
  );
}

function Greeting() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const buttonText = buttonClicked ? "Remove greeting" : "Load Greeting";
  return (
    <div>
      <button onClick={() => setButtonClicked(!buttonClicked)}>
        {buttonText}
      </button>
      {buttonClicked && <Greet />}
    </div>
  );
}

export default Greeting;
