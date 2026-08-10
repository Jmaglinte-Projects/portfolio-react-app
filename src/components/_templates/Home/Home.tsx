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

import { useMemo } from "react";
import { PersonalProject } from "@/entities/Portfolio";
import { experiences } from "@/constants/experiences";

const PROFILE_IMAGE =
  "https://ui-avatars.com/api/?name=John+Doe&size=300&background=6366f1&color=fff";

const Home = () => {
  const mappedExperiences: TimelineItemProps[] =
    useMemo(() => {
      return experiences.map((exp) => ({
        children: <TimelineItem item={exp} />,
      }));
    }, []) || [];

  const skills = useMemo(() => {
    return [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Git",
      "Docker",
    ].map((skill) => {
      return {
        title: skill,
      };
    });
  }, []);

  const works: PersonalProject[] = useMemo(() => {
    return [
      {
        title: "TaskFlow",
        description:
          "A lightweight project management tool for small teams. Track tasks, assign owners, set deadlines, and visualize progress on a shared kanban board — all without the complexity of enterprise software.",
        posterSrc: "https://placehold.co/600x400/6366f1/ffffff?text=TaskFlow",
        techs: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
        requestDemo: true,
        sourceLinks: [
          {
            title: "Frontend",
            link: "https://github.com/example/taskflow-web",
          },
          {
            title: "Backend",
            link: "https://github.com/example/taskflow-api",
          },
        ],
      },
      {
        title: "WeatherNow",
        description:
          "A clean weather dashboard that shows current conditions, hourly forecasts, and a seven-day outlook for any city worldwide.",
        posterSrc: "https://placehold.co/600x400/0ea5e9/ffffff?text=WeatherNow",
        techs: ["React", "OpenWeather API", "Chart.js"],
        demoLink: "https://example.com/weathernow",
        sourceCodeLink: "https://github.com/example/weathernow",
      },
      {
        title: "ShopLite",
        description:
          "A demo e-commerce storefront with product listings, a shopping cart, and a simple checkout flow. Built as a learning project to explore React state management patterns.",
        posterSrc: "https://placehold.co/600x400/f59e0b/ffffff?text=ShopLite",
        techs: ["React", "Redux", "CSS Modules"],
        demoLink: "https://example.com/shoplite",
        sourceCodeLink: "https://github.com/example/shoplite",
      },
    ];
  }, []);

  return (
    <HomeWrapper>
      <ProfileDetailsWrapper>
        <img className="profile" src={PROFILE_IMAGE} alt="John Doe profile" />
        <div className="profile_info">
          <TitleWrapper>John Doe</TitleWrapper>
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
          <span>Junior Software Engineer</span>
          <div className="social_medial">
            <a href="https://linkedin.com/in/example" target="_blank">
              Linkedin
            </a>
            <a href="https://github.com/example" target="_blank">
              Github
            </a>
            <a href="https://twitter.com/example" target="_blank">
              Twitter
            </a>
          </div>
        </div>
      </ProfileDetailsWrapper>

      <AboutMeWrapper>
        <TitleWrapper id="about">About me</TitleWrapper>
        <p>
          I am a software developer who enjoys turning ideas into reliable,
          user-friendly applications. I care about writing clean code, learning
          new tools, and working with teams to deliver products that solve real
          problems. When I am not coding, I like exploring side projects and
          keeping up with the latest in web development.
        </p>
      </AboutMeWrapper>

      <SkillsWrapper>
        <TitleWrapper id="skills">Skills</TitleWrapper>
        <SkillsListWrapper>
          {skills.map((skill, i) => (
            <SkillItemWrapper key={i}>
              <span>
                {i !== 0 && "-"} {skill.title}
              </span>
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
                  <div className="techs">{work.techs.join(", ")}</div>
                  <WorkItemActions>
                    <a
                      href={
                        work.requestDemo
                          ? "mailto:demo@example.com"
                          : work.demoLink
                      }
                      target="_blank"
                    >
                      {work.requestDemo ? "Request Demo" : "Live Demo"}
                    </a>
                    {work.sourceLinks?.map((link, i) => (
                      <a key={i} href={link.link} target="_blank">
                        {link.title}
                      </a>
                    ))}
                    {work.sourceCodeLink && (
                      <a href={work.sourceCodeLink} target="_blank">
                        Code
                      </a>
                    )}
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
