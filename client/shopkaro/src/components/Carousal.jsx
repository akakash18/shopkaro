import React, { useEffect, useRef, useState } from "react";

export default function Carousal({ data }) {
  let images = data;

  let [curr, setCurr] = useState(0);
  let timer = useRef(null);

  function setTimer() {
    if (timer.current == null) {
      timer.current = setInterval(() => {
        setCurr((prev) => {
          let val = prev >= images.length - 1 ? 0 : prev + 1;
          //   console.log(val);
          return val;
        });
      }, 3000);
    } else {
      return;
    }
  }

  useEffect(() => {
    setTimer();
  }, [curr]);

  function next() {
    setCurr((prev) => {
      let val = prev >= images.length - 1 ? 0 : prev + 1;
      return val;
    });
  }

  function prev() {
    let val = curr <= 0 ? images.length - 1 : curr - 1;
    setCurr(val);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "50%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "relative",
        margin: "30px 0px",
      }}
    >
      <button
        style={{
          position: "absolute",
          left: "80px",
          border: "none",
          outline: "none",
          width: "50px",
          padding: "5px",
          borderRadius: "5px",
        }}
        onClick={prev}
      >
        Prev
      </button>

      <img
        style={{
          width: "95%",
          height: "330px",
          borderRadius:"10px"
        }}
        src={images[curr]}
        alt=""
      />

      <button
        style={{
          position: "absolute",
          right: "80px",
          border: "none",
          outline: "none",
          width: "50px",
          padding: "5px",
          borderRadius: "5px",
        }}
        onClick={next}
      >
        Next
      </button>
    </div>
  );
}
