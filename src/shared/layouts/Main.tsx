import { Outlet } from "react-router";
import { Footer } from "../../components/_organisms/Footer";
import { ContainerWrapper } from "./elements";
import { useState } from "react";
import { Banner } from "../../components/_organisms/Banner";

const MailLayout = () => {
  const [footerVisible, setFooterVisible] = useState<boolean>(true);

  const handleClose = () => {
    setFooterVisible(!footerVisible);
  };

  return (
    <>
      <Banner />
      <ContainerWrapper>
        <Outlet />
      </ContainerWrapper>
      {!footerVisible || <Footer onClose={handleClose} />}
    </>
  );
};

export default MailLayout;
