import styled from "styled-components";

export const TimelineItemWrapper = styled.div`
  padding-bottom: var(--spacing-2xl);
`;

export const TimelineItemHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xs);
`;

export const PositionWrapper = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: var(--ink);
`;

export const CurrentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: var(--on-primary);
  background: var(--primary);
  border-radius: var(--rounded-pill);
  padding: var(--spacing-xxs) var(--spacing-md);
  margin-top: 6px;
`;

export const CompanyWrapper = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: var(--primary-deep);
  margin-bottom: var(--spacing-sm);
`;

export const DateWrapper = styled.div`
  display: inline-flex;
  gap: var(--spacing-xs);
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: var(--mute);
  margin-bottom: var(--spacing-lg);
`;

export const FromWrapper = styled.span`
  display: inline;
`;

export const ToWrapper = styled.span`
  display: inline;
`;

export const OverviewWrapper = styled.div`
  margin-bottom: var(--spacing-2xl);
`;

export const SectionLabel = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 2.52px;
  text-transform: uppercase;
  color: var(--mute);
  margin-bottom: var(--spacing-sm);
`;

export const ReponsibilityListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
`;

export const ReponsibilityWrapper = styled.div`
  position: relative;
  padding-left: var(--spacing-2xl);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--body);

  &::before {
    content: "";
    position: absolute;
    top: 7px;
    left: var(--spacing-sm);
    width: 5px;
    height: 5px;
    border-radius: var(--rounded-pill);
    background-color: var(--primary);
  }

  p {
    margin-top: var(--spacing-xs);
    color: var(--mute);
  }
`;

export const ProjectTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
`;

export const ProjectTag = styled.div`
  background: var(--canvas);
  border: 1px solid var(--hairline);
  border-radius: var(--rounded-md);
  padding: var(--spacing-md) var(--spacing-lg);
  min-width: 0;
`;

export const ProjectTagTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--ink);
  margin-bottom: var(--spacing-xs);
`;

export const ProjectTagOverview = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: var(--body);
`;
