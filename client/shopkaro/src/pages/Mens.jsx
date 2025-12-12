import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Mens() {
  let [mensProdData, setMensProdData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("http://localhost:5000/mens");
      let actualData = await data.json();
      setMensProdData(actualData);
    }
    console.log(mensProdData);
    fetchData();
  }, []);

  return (
    <>

    <h1 style={{textAlign:"center",margin:"20px 0px"}}>Mens Products</h1>
    
    <div className="container">
      {console.log(mensProdData)}
      {mensProdData.map((item, index) => (
        <Card product={item} key={index} />
      ))}
    </div>
    </>
  );
}



