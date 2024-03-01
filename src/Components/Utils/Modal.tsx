import "./Modal.scss";

const Modal = ({
  children,
  style,
  className,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <div className={`modal ${className ? className : ""}`} style={style}>
      {children}
    </div>
  );
};

export default Modal;
