import CarroSVG from "../../../assets/icons/svg/CarroSVG";
import Button from "../Button";
import "./Form.scss";
import Input from "./Input";

const Form = () => {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <fieldset>
        <legend className="d-flex">
          <CarroSVG fill="var(--color-s)" /> Solicitar cotação
        </legend>
        <Input label={{ htmlFor: "Nome" }} input={{ id: "name" }} />
        <Input
          label={{ htmlFor: "Email" }}
          input={{ id: "email", type: "email" }}
        />
        <Input
          label={{ htmlFor: "Telefone" }}
          input={{ id: "tel", type: "tel" }}
        />
        <Input label={{ htmlFor: "Modelo" }} input={{ id: "model" }} />
        <Input label={{ htmlFor: "Mensagem" }} input={{ id: "message" }} />
        <Input
          label={{ htmlFor: "terms" }}
          input={{ id: "terms", type: "checkbox" }}
        >
          <span>
            Aceito a <strong>Política de Privacidade</strong>
          </span>
        </Input>
        <Button
          href="#"
          style={{ backgroundColor: "var(--color-s)", textAlign: "center" }}
        >
          Enviar
        </Button>
      </fieldset>
    </form>
  );
};

export default Form;
