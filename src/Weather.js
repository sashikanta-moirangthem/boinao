import React, { useState, useEffect } from "react";

const Weather = () => {
  const [temp, setTemp] = useState(0);
  useEffect(() => {
    setTemp(temp + 5);
    console.log("useEffect");
  }, []);
  return (
    <div>
      <h2>it is {temp}.</h2>
    </div>
  );
};
export default Weather;
