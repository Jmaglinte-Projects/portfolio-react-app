import styled from "styled-components";

const ContainerWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  z-index: 25;
  padding: 0 var(--spacing-3xl);

  @media screen and (max-width: 767px) {
    padding: 0 var(--spacing-lg);
  }
`;

export { ContainerWrapper };
