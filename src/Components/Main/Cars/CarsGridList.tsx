import CarsGridItem from "./CarsGridItem";

const pathBaseCarList = "./src/assets/imgs/veiculos/";

const getSrcPath = function (nameArq: string) {
  return pathBaseCarList + nameArq;
};

const carList = [
  { alt: "BMW Série 1", src: getSrcPath("serie1.png") },
  { alt: "BMW M3 Competition", src: getSrcPath("m3.png") },
  { alt: "BMW M5", src: getSrcPath("m5.png") },
  { alt: "BMW X2", src: getSrcPath("x2.png") },
  { alt: "BMW Série 4", src: getSrcPath("serie4.png") },
  { alt: "BMW Série 3", src: getSrcPath("serie3.png") },
  { alt: "BMW Z4", src: getSrcPath("z4.png") },
  { alt: "BMW Série 2", src: getSrcPath("serie2.png") },
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
