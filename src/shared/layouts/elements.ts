import styled from "styled-components";

const ContainerWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  margin: auto;
  z-index: 25;
  padding: 45px;

  @media screen and (max-width: 600px) {
    padding: 45px 25px;
  }
`;

export { ContainerWrapper };
