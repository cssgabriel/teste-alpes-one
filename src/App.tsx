import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import WhatsAppIcon from "./Components/Utils/WhatsAppIcon";

function App() {
  const [mobile, setMobile] = React.useState(false);

  const resizeObserver = new ResizeObserver((entries) => {
    const [entry] = entries;
    const { contentRect } = entry;
    if (contentRect.width < 1143) setMobile(true);
    else setMobile(false);
  });

  resizeObserver.observe(document.documentElement);

  if (mobile && !document.documentElement.className.includes("mobile")) {
    document.documentElement.className += " mobile";
  } else if (!mobile && document.documentElement.className.includes("mobile")) {
    document.documentElement.classList.remove("mobile");
  }

  return (
    <>
      <Header />
      <Main />
      <Footer />
      {mobile && <WhatsAppIcon href="#" />}
    </>
  );
}

export default App;
