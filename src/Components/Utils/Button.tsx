import "./Button.scss";

const Button = (
  props: React.PropsWithChildren & React.AnchorHTMLAttributes<HTMLAnchorElement>
) => {
  return (
    <a className="btn" href={props.href} target={props.target} {...props}>
      {props.children}
    </a>
  );
};

export default Button;
