import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Electronics() {
  let [eData, setEData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("http://localhost:5000/electronics");
      let actualData = await data.json();
      setEData(actualData);
    }

    console.log(eData);
    fetchData();
  }, []);

  return (
    <>
  <h1 style={{textAlign:"center",margin:"20px 0px"}}>Electronics Products</h1>

      <div className="container">
        {/* {console.log(eData)} */}
        {eData.map((item, index) => (
          <Card product={item} key={index} />
        ))}
      </div>
    </>
  );
}
