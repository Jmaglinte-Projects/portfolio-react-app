import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: min(860px, calc(100% - 28px));
  background-color: var(--background);
  z-index: 50;

  padding: 12px 48px 12px 14px;
  border: 1px solid rgba(126, 254, 126, 0.45);
  border-radius: 10px;
  box-shadow: inset 0 0 0 1px rgba(126, 254, 126, 0.08),
    0 10px 24px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(2px);

  @media screen and (max-width: 600px) {
    bottom: 10px;
    width: calc(100% - 16px);
    padding: 10px 44px 10px 10px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-weight: bold;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border: 1px solid rgba(126, 254, 126, 0.35);
    border-radius: 6px;
    font-size: 13px;
    line-height: 1;
    letter-spacing: 0.02em;
    transition: border-color 0.2s ease, background-color 0.2s ease;
  }

  a:hover {
    text-decoration: none;
    border-color: rgba(126, 254, 126, 0.75);
    background-color: rgba(126, 254, 126, 0.09);
  }

  a.active {
    text-decoration: none;
    border-color: rgba(126, 254, 126, 0.85);
    background-color: rgba(126, 254, 126, 0.2);
    box-shadow: inset 0 0 0 1px rgba(126, 254, 126, 0.12),
      0 0 14px rgba(126, 254, 126, 0.2);
  }

  @media screen and (max-width: 400px) {
    gap: 6px;

    a {
      padding: 5px 8px;
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
  border: 1px solid rgba(126, 254, 126, 0.45);
  border-radius: 6px;
  background: transparent;
  color: var(--text);
  font-family: inherit;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: rgba(126, 254, 126, 0.75);
    background-color: rgba(126, 254, 126, 0.09);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(126, 254, 126, 0.32);
  }

  @media screen and (max-width: 600px) {
    width: 28px;
    height: 28px;
    right: 8px;
  }
`;
