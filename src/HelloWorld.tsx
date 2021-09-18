import react, { useState } from "react";

export const HelloWorld = ({ text }) => {
  const [state, setState] = useState("");

  const toArr = text.split("");

  for (let i = 0; i < toArr.length; i++) {
    console.log(i);
    setState(toArr[i]);
  }

  return (
    <>
      <h1 className="hello__char hello__char--current">{state}</h1>;
    </>
  );
};
