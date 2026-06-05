import { Outlet } from "react-router";
import { useState } from "react";
import { ThemeToggle } from "../../components/_atoms/ThemeToggle";
import { Banner } from "../../components/_organisms/Banner";
import { Footer } from "../../components/_organisms/Footer";
import { ContainerWrapper } from "./elements";

const MailLayout = () => {
  const [footerVisible, setFooterVisible] = useState<boolean>(true);

  const handleClose = () => {
    setFooterVisible(!footerVisible);
  };

  return (
    <>
      <ThemeToggle />
      <Banner />
      <ContainerWrapper>
        <Outlet />
      </ContainerWrapper>
      {!footerVisible || <Footer onClose={handleClose} />}
    </>
  );
};

export default MailLayout;
