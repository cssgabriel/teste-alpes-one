import "./Cars.scss";
import CarsGridList from "./CarsGridList";

const Cars = () => {
  return (
    <section className="container cars">
      <h2>Escolha seu BWM</h2>
      <CarsGridList />
    </section>
  );
};

export default Cars;
