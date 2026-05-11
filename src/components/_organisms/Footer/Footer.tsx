import { FooterWrapper, LinkWrapper, CloseButtonWrapper } from "./elements";
import { FooterProps } from "./types";

const Footer = (props: FooterProps) => {
  const { onClose } = props;

  return (
    <FooterWrapper>
      <LinkWrapper>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#works">Projects</a>
        <a href="#experience">Experience</a>
      </LinkWrapper>
      <CloseButtonWrapper onClick={onClose}>X</CloseButtonWrapper>
    </FooterWrapper>
  );
};

export default Footer;
