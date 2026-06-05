import styled from "styled-components";

export const ThemeToggleButton = styled.button`
  position: fixed;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  z-index: 60;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  min-height: 40px;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--hairline);
  border-radius: var(--rounded-sm);
  background: var(--canvas-soft);
  color: var(--ink);
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  box-shadow: var(--glow-hover);
  transition: border-color 0.2s ease, background-color 0.2s ease,
    color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: var(--primary-soft);
    color: var(--primary-deep);
  }

  &:focus-visible {
    outline: none;
    box-shadow: var(--focus-ring);
  }

  @media screen and (max-width: 767px) {
    top: var(--spacing-md);
    right: var(--spacing-md);
    min-height: 36px;
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 12px;
  }
`;

export const ThemeToggleIcon = styled.span`
  font-size: 16px;
  line-height: 1;
`;
