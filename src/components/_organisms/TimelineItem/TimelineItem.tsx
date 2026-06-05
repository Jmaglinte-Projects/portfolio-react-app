import moment from "moment";
import {
  CompanyWrapper,
  CurrentBadge,
  DateWrapper,
  FromWrapper,
  PositionWrapper,
  ProjectTag,
  ProjectTagList,
  ProjectTagOverview,
  ProjectTagTitle,
  ReponsibilityWrapper,
  ReponsibilityListWrapper,
  SectionLabel,
  TimelineItemHeader,
  TimelineItemWrapper,
  ToWrapper,
} from "./elements";
import { TimelineItemProps } from "./types";

const TimelineItem = (props: TimelineItemProps) => {
  const { item } = props;

  const fromDate = item.fromDate.toDate
    ? moment(item.fromDate.toDate())
    : moment(item.fromDate as moment.Moment);

  const toDate = item.toDate.toDate
    ? moment(item.toDate.toDate())
    : moment(item.toDate as moment.Moment);

  const isCurrent = toDate.isSameOrAfter(moment().subtract(7, "days"));

  return (
    <TimelineItemWrapper>
      <TimelineItemHeader>
        <PositionWrapper>{item.title}</PositionWrapper>
        {isCurrent && <CurrentBadge>Current</CurrentBadge>}
      </TimelineItemHeader>
      <CompanyWrapper>{item.company}</CompanyWrapper>
      <DateWrapper>
        <FromWrapper>{fromDate.format("MMM YYYY")}</FromWrapper>
        <span>–</span>
        <ToWrapper>
          {isCurrent ? "Present" : toDate.format("MMM YYYY")}
        </ToWrapper>
      </DateWrapper>
      <SectionLabel>Responsibilities</SectionLabel>
      <ReponsibilityListWrapper>
        {item.jobResponsibilities.map((resp, i) => (
          <ReponsibilityWrapper key={i}>
            {resp.description}
          </ReponsibilityWrapper>
        ))}
      </ReponsibilityListWrapper>
      {item?.projects.length > 0 && (
        <>
          <SectionLabel>Projects</SectionLabel>
          <ProjectTagList>
            {item.projects.map((project, i) => (
              <ProjectTag key={i}>
                <ProjectTagTitle>{project.title}</ProjectTagTitle>
                <ProjectTagOverview>{project.overview}</ProjectTagOverview>
              </ProjectTag>
            ))}
          </ProjectTagList>
        </>
      )}
    </TimelineItemWrapper>
  );
};

export default TimelineItem;
