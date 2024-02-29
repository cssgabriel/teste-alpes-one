import "./Form.scss";
import Input from "./Input";

const Form = () => {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <Input htmlFor="Nome" id="name" />
    </form>
  );
};

export default Form;
