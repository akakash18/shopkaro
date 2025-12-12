import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Womens() {
  let [womensProdData, setWomensProdData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("http://localhost:5000/womens");
      let actualData = await data.json();
      setWomensProdData(actualData);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
        Womens Products
      </h1>
      <div className="container">
        {womensProdData.map((item, index) => (
          <Card product={item} key={index} />
        ))}
      </div>
    </>
  );
}
