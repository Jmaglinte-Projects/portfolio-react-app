import styled from "styled-components";
import { Button } from "antd";

export const ButtonWrapper = styled(Button)`
  background-color: transparent;
  border-color: var(--text);
  color: var(--text);

  span {
    line-height: unset;
  }

  &:hover {
    opacity: 0.7;
    border-color: var(--text) !important;
    color: var(--text) !important;
  }
`;
