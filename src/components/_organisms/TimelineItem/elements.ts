import styled from "styled-components";

export const TimelineItemWrapper = styled.div``;

export const PositionWrapper = styled.div`
  font-weight: bold;
`;
export const CompanyWrapper = styled.div``;
export const FromWrapper = styled.div`
  display: inline-block;
`;
export const ToWrapper = styled.div`
  display: inline-block;
`;
export const OverviewWrapper = styled.div`
  margin-bottom: 25px;
`;
export const ReponsibilityListWrapper = styled.div``;

export const ReponsibilityWrapper = styled.div`
  padding-left: 30px;
  margin-bottom: 5px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 12px;
    width: 8px;
    height: 8px;
    background-color: var(--text);
  }
`;

export const DateWrapper = styled.div`
  display: inline-block;
`;
