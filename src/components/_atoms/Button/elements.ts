import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--rounded-sm);
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  background: var(--canvas);
  border: 1px solid var(--hairline);
  color: var(--ink);
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border-color: var(--primary-soft);
    background: var(--canvas-soft);
  }
`;
