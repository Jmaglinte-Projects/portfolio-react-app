import { Timeline } from "antd";
import {
  AboutMeWrapper,
  HomeWrapper,
  ProfileDetailsWrapper,
  TitleWrapper,
  SkillsWrapper,
  SkillsListWrapper,
  SkillItemWrapper,
  WorksWrapper,
  WorksListWrapper,
  WorksItemWrapper,
  WorkItemActions,
  ExperienceWrapper,
} from "./elements";
import { TimelineItem } from "../../_organisms/TimelineItem";
import { TimelineItemProps } from "antd/es/timeline/TimelineItem";
import { TypeAnimation } from "react-type-animation";

import { profile } from "../../../assets/images";
import { useQuery } from "@tanstack/react-query";
import { fetchPortfolio } from "@/api/portfolio";
import { portfolioId } from "@/constants/profile";
import { useMemo } from "react";
import { Loading } from "@/components/_atoms/Loading";

const Home = () => {
  const { data: portfolio, isLoading } = useQuery({
    queryKey: ["portfolio"],
    queryFn: () => fetchPortfolio(portfolioId),
  });

  const mappedExperiences: TimelineItemProps[] =
    useMemo(() => {
      if (portfolio?.data?.experiences) {
        return portfolio?.data?.experiences.map((exp) => ({
          children: <TimelineItem item={exp} />,
        }));
      }
    }, [portfolio?.data.experiences]) || [];

  const skills = useMemo(() => {
    return portfolio?.data.skills || [];
  }, [portfolio?.data.skills]);

  const works = useMemo(() => {
    return portfolio?.data.personalProjects || [];
  }, [portfolio?.data.personalProjects]);

  if (isLoading) return <Loading />;

  return (
    <HomeWrapper>
      <ProfileDetailsWrapper>
        <img className="profile" src={profile} alt="professional hacker" />
        <div className="profile_info">
          <TitleWrapper>Jaffy Maglinte</TitleWrapper>
          <TypeAnimation
            sequence={[
              "I am into web development!",
              1000,
              "I am into fullstack development!",
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1em", display: "block" }}
          />
          <span>{portfolio?.data.position}</span>
          <div className="social_medial">
            <a href="https://www.linkedin.com/in/jmaglinte/" target="_blank">
              Linkedin
            </a>
            <a href="https://github.com/jaffymaglinte" target="_blank">
              Github
            </a>
            <a href="https://www.facebook.com/jmaglinte12" target="_blank">
              Facebook
            </a>
          </div>
        </div>
      </ProfileDetailsWrapper>

      <AboutMeWrapper>
        <TitleWrapper id="about">About me</TitleWrapper>
        <p>{portfolio?.data.about}</p>
      </AboutMeWrapper>

      <SkillsWrapper>
        <TitleWrapper id="skills">Skills</TitleWrapper>
        <SkillsListWrapper>
          {skills.map((skill, i) => (
            <SkillItemWrapper key={i}>
              <span>
                {i !== 0 && "-"} {skill.title}
              </span>
              <img src={skill.imgSrc} alt={`${skill.title} icon`} />
            </SkillItemWrapper>
          ))}
        </SkillsListWrapper>
      </SkillsWrapper>

      <WorksWrapper>
        <TitleWrapper id="works">Personal Projects</TitleWrapper>
        <WorksListWrapper>
          {works.map((work, i) => {
            return (
              <WorksItemWrapper key={i}>
                <img src={work.posterSrc} alt={`${work.title} photo`} />
                <div className="details">
                  <div className="title">{work.title}</div>
                  <p className="description">{work.description}</p>
                  <h4>Techs:</h4>
                  <div className="techs">{work.techs}</div>
                  <WorkItemActions>
                    <a href={work.demoLink} target="_blank">
                      Live Demo
                    </a>
                    <a href={work.sourceCodeLink} target="_blank">
                      Code
                    </a>
                  </WorkItemActions>
                </div>
              </WorksItemWrapper>
            );
          })}
        </WorksListWrapper>
      </WorksWrapper>

      <ExperienceWrapper>
        <TitleWrapper id="experience">Experiences</TitleWrapper>
        <Timeline mode="left" items={mappedExperiences} />
      </ExperienceWrapper>
    </HomeWrapper>
  );
};

export default Home;
