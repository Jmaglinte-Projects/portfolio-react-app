import moment from "moment";
import {
  CompanyWrapper,
  DateWrapper,
  FromWrapper,
  // OverviewWrapper,
  PositionWrapper,
  ReponsibilityWrapper,
  ReponsibilityListWrapper,
  TimelineItemWrapper,
  ToWrapper,
} from "./elements";
import { TimelineItemProps } from "./types";

const TimelineItem = (props: TimelineItemProps) => {
  const { item } = props;

  return (
    <TimelineItemWrapper>
      <PositionWrapper>{item.title}</PositionWrapper>
      <CompanyWrapper>{item.company}</CompanyWrapper>
      <DateWrapper>
        <FromWrapper>
          {moment(item.fromDate.toDate()).format("MM/DD/YYYY")}
        </FromWrapper>{" "}
        -{" "}
        <ToWrapper>
          {moment(item.toDate.toDate()).format("MM/DD/YYYY")}
        </ToWrapper>
      </DateWrapper>
      {/* TODO: Overview */}
      {/* <OverviewWrapper>{item.jobResponsibilities}</OverviewWrapper> */}
      <br />
      <br />
      Job Responsibilities:
      <ReponsibilityListWrapper>
        {item.jobResponsibilities.map((resp, i) => (
          <ReponsibilityWrapper key={i}>
            {resp.description}
          </ReponsibilityWrapper>
        ))}
      </ReponsibilityListWrapper>
      {item?.projects.length > 0 && (
        <>
          Projects:
          {item?.projects
            ? item.projects.map((project, i) => {
                return (
                  <ReponsibilityWrapper key={i}>
                    {project.title}
                    <p style={{ display: "block" }}>- {project.overview}</p>
                  </ReponsibilityWrapper>
                );
              })
            : ""}
        </>
      )}
    </TimelineItemWrapper>
  );
};

export default TimelineItem;
