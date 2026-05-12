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

import { profile } from "./../../../assets/images";
import { useMemo } from "react";
import { PersonalProject } from "@/entities/Portfolio";
import { experiences } from "@/constants/experiences";

const Home = () => {
  const mappedExperiences: TimelineItemProps[] =
    useMemo(() => {
      return experiences.map((exp) => ({
        children: <TimelineItem item={exp} />,
      }));
    }, []) || [];

  const skills = useMemo(() => {
    return ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'PHP', 'Laravel', 'Kendo UI', 'Postgres', 'Firebase'].map((skill) => {
      return {
        title: skill,
      };
    });
  }, []);

  const works: PersonalProject[] = useMemo(() => {
    return [
      {
        title: 'Crocsbook Project',
        description: 'A practice project inspired by the need for greater transparency in public infrastructure initiatives. This platform helps communities monitor and document government projects by capturing and tracking daily photo updates, making it easier to follow progress and promote accountability — especially for flood control and other public works projects.',
        posterSrc: 'https://portfolio-assets.jmaglinte.com/assets/crocsbook-preview.png',
        techs: ['React', 'React Router Framework', 'SSR', 'Tailwindcss', 'MySql', 'gRPC', 'go', 'go-jet', 'jwt', 'Cloudflare R2'],
        requestDemo: true,
        sourceLinks: [
          {
            title: 'Frontend',
            link: 'https://github.com/Jmaglinte-Projects/crocsbook-rrfm',
          },
          {
            title: 'Backend',
            link: 'https://github.com/Jmaglinte-Projects/crocsbook-go-app',
          },
          {
            title: 'API',
            link: 'https://github.com/Jmaglinte-Projects/crocsbook-api',
          },
        ],
      },
      {
        title: 'JMovies',
        description: 'Let you watch movies online without having to register or paying',
        posterSrc: 'https://portfolio-assets.jmaglinte.com/assets/jmovies-preview.png',
        techs: ['React', 'TMDb API'],
        demoLink: 'https://jmovies.netlify.app/movies',
        sourceCodeLink: 'https://github.com/pusoy/reactjs-movie-app',
      },
      {
        title: 'Danao Glass and Aluminum Supply',
        description: 'Demo website for a glass and aluminum supply company. This is the first I built using React',
        posterSrc: 'https://portfolio-assets.jmaglinte.com/assets/dga-preview.png',
        techs: ['HTML', 'CSS', 'React'],
        demoLink: 'https://danao-glass.netlify.app/',
        sourceCodeLink: 'https://github.com/Jmaglinte-Projects/danao_glass_and_aluminum',
      },
    ];
  }, []);

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
          <span>Junior Software Engineer</span>
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
        <p>I am an experienced developer with a passion for building software. I continuously seek opportunities to expand my knowledge and stay up-to-date with the latest technologies, allowing me to deliver high-quality code and exceed client expectations. With a dedication to continuous learning and a drive for excellence, I am committed to making a positive impact through my work as a developer;</p>
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
                  <div className="techs">{work.techs.join(', ')}</div>
                  <WorkItemActions>
                    <a href={work.requestDemo ? 'mailto:aclc.jaffy.maglinte@gmail.com' : work.demoLink} target="_blank">
                      {work.requestDemo ? 'Request Demo' : 'Live Demo'}
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
