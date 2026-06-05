import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: min(860px, calc(100% - 28px));
  background-color: var(--canvas);
  z-index: 50;
  padding: var(--spacing-md) var(--spacing-4xl) var(--spacing-md)
    var(--spacing-md);
  border: 1px solid var(--hairline);
  border-radius: var(--rounded-md);

  @media screen and (max-width: 767px) {
    bottom: 10px;
    width: calc(100% - 16px);
    padding: var(--spacing-md) 44px var(--spacing-md) var(--spacing-md);
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 36px;
    padding: var(--spacing-xs) var(--spacing-md);
    border: 1px solid var(--hairline);
    border-radius: var(--rounded-sm);
    font-family: var(--font-sans);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: var(--body);
    transition: border-color 0.2s ease, color 0.2s ease,
      background-color 0.2s ease;
  }

  a:hover {
    text-decoration: none;
    color: var(--ink);
    border-color: var(--primary-soft);
    background-color: var(--canvas-soft);
  }

  a.active {
    text-decoration: none;
    color: var(--on-primary);
    border-color: var(--primary);
    background-color: var(--primary);
  }

  @media screen and (max-width: 400px) {
    gap: var(--spacing-xs);

    a {
      padding: var(--spacing-xs) var(--spacing-sm);
      font-size: 12px;
    }
  }
`;

export const CloseButtonWrapper = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--hairline);
  border-radius: var(--rounded-sm);
  background: transparent;
  color: var(--body);
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: var(--primary-soft);
    background-color: var(--canvas-soft);
    color: var(--ink);
  }

  &:focus-visible {
    outline: none;
    box-shadow: var(--focus-ring);
  }

  @media screen and (max-width: 767px) {
    width: 28px;
    height: 28px;
    right: 8px;
  }
`;
