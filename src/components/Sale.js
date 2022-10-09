import React, { useEffect, useState } from "react";
import "./Sale.css";

function Sale() {
  let [time, setTime] = useState({ sec: 0, min: 0, hrs: 7 });

  useEffect(() => {
    let total = time.hrs * 60 * 60;
    let timer = setInterval(() => {
        total--;
      setTime({
        sec: total % 60,
        min: Math.floor((total / 60) % 60),
        hrs: Math.floor(total / 3600),
      });
    }, 1000);
  }, []);
  return (
    <div className="sale">
      <img src="public\EndOfSeason.png" />
      <div className="saleDate">
        <h1>2-3</h1>
        July
      </div>
      <div className="saleTimer">
        <span>Sale Ends In :</span>
        <h1>
          {time.hrs < 10 ? "0" + time.hrs : "" + time.hrs}<span>Hr</span> :
          {time.min < 10 ? "0" + time.min : "" + time.min}<span>Min</span> :
          {time.sec < 10 ? "0" + time.sec : "" + time.sec}<span>Sec</span>
        </h1>
      </div>
    </div>
  );
}

export default Sale;
