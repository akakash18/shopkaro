import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Jewelery() {
  const [jeweleryProduct, setJeweleryProductData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("http://localhost:5000/jewelery");
      let actualData = await data.json();
      setJeweleryProductData(actualData);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
        Jewelery Products
      </h1>

      <div className="container">
        {jeweleryProduct.map((item, index) => (
          <Card product={item} key={index} />
        ))}
      </div>
    </>
  );
}
