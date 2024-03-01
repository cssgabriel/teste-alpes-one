import React from "react";
import Form from "../../Utils/Form/Form";
import "./Banner.scss";
import Button from "../../Utils/Button";
import Modal from "../../Utils/Modal";
import Header from "../../Header/Header";

const Banner = () => {
  const formRef = React.useRef(null);

  const [isVisible, setIsVisible] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const callback: IntersectionObserverCallback = function (entries) {
    const [entry] = entries;
    const { isIntersecting } = entry;
    setIsVisible(isIntersecting);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (formRef.current) observer.observe(formRef.current);
  }, [formRef, options]);

  return (
    <>
      <section className="banner" ref={formRef}>
        <div className="d-flex container">
          {!isVisible && (
            <Header fixed={true}>
              <Button
                style={{
                  backgroundColor: openModal
                    ? "var(--color-3)"
                    : "var(--color-s)",
                  padding: "2rem",
                }}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenModal(!openModal);
                }}
              >
                {openModal ? "Minimizar" : "Solicitar cotação"}
              </Button>
              {openModal && (
                <Modal>
                  <Form />
                </Modal>
              )}
            </Header>
          )}
          <Form style={!isVisible ? { visibility: "hidden" } : {}} />
        </div>
      </section>
    </>
  );
};

export default Banner;
