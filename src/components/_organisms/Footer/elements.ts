import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--background);
  z-index: 50;

  padding: 20px 20px 20px 60px;
  border-top: 1px solid;

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 30px;
  font-weight: bold;

  @media screen and (max-width: 400px) {
    gap: 10px;
    font-size: 13px;
  }
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 25px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
  }
`;
