import CarsGridItem from "./CarsGridItem";
import serie1 from "../../../assets/imgs/veiculos/serie1.png";
import m3 from "../../../assets/imgs/veiculos/m3.png";
import m5 from "../../../assets/imgs/veiculos/m5.png";
import x2 from "../../../assets/imgs/veiculos/x2.png";
import serie4 from "../../../assets/imgs/veiculos/serie4.png";
import serie3 from "../../../assets/imgs/veiculos/serie3.png";
import z4 from "../../../assets/imgs/veiculos/z4.png";
import serie2 from "../../../assets/imgs/veiculos/serie2.png";

const carList = [
  { alt: "BMW Série 1", src: serie1 },
  { alt: "BMW M3 Competition", src: m3 },
  { alt: "BMW M5", src: m5 },
  { alt: "BMW X2", src: x2 },
  { alt: "BMW Série 4", src: serie4 },
  { alt: "BMW Série 3", src: serie3 },
  { alt: "BMW Z4", src: z4 },
  { alt: "BMW Série 2", src: serie2 },
];

const CarsGridList = () => {
  return (
    <ul className="cars__grid-list">
      {carList &&
        carList.map(({ src, alt }) => (
          <CarsGridItem key={alt} src={src} alt={alt} />
        ))}
    </ul>
  );
};

export default CarsGridList;
