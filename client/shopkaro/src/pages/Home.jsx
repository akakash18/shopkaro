import Carousal from "../components/Carousal";

export default function Home() {
  let images = [
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/d529eaa5b62515f7.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/6204fe0e1d4cd758.jpeg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/5d2dec0204774aad.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/83dc939621f85afa.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/bac6e385f3bd157c.jpeg?q=60",
  ];
  return (
    <div>
      <Carousal data={images} />
    </div>
  );
}
