import { Timeline } from "antd";
import { useMemo } from "react";
import { TypeAnimation } from "react-type-animation";

import { profile } from "./../../../assets/images";
import { experiences } from "@/constants/experiences";
import { PersonalProject } from "@/entities/Portfolio";
import { TimelineItem } from "../../_organisms/TimelineItem";
import { TimelineItemProps } from "antd/es/timeline/TimelineItem";
import {
  AboutCard,
  AboutCards,
  AboutContentWrapper,
  AboutMainCol,
  ActionRow,
  BodyText,
  CardTitle,
  CodeChip,
  ContentBand,
  Eyebrow,
  ExperienceWrapper,
  FeatureCard,
  FeatureGrid,
  GreenDivider,
  HeroActions,
  HeroBand,
  HeroContent,
  HeroLead,
  HeroStrengths,
  HeroTitle,
  HeroValueProp,
  HomeWrapper,
  InfoLabel,
  InfoRow,
  InfoValue,
  OutlineButton,
  PrimaryButton,
  ProfileImage,
  ProjectCard,
  ProjectContent,
  ProjectDescription,
  ProjectIndex,
  ProjectMedia,
  ProjectPoster,
  ProjectTitle,
  ProjectsGrid,
  SectionDivider,
  SectionHeader,
  SectionTitle,
  SkillFamiliarLabel,
  SkillPrimaryTags,
  SkillTagGroup,
  StatusBadge,
  StrengthChip,
  TechLabel,
  TechTag,
  TechTags,
  ProjectTechTag,
} from "./elements";

const Home = () => {
  const mappedExperiences: TimelineItemProps[] = useMemo(() => {
    return experiences.map((exp) => ({
      children: <TimelineItem item={exp} />,
    }));
  }, []);

  const skills = useMemo(() => {
    return [
      {
        label: "Frontend",
        primary: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "MUI"],
        familiar: ["React Router Framework", "Angular", "Tailwind CSS", "Kendo UI"],
      },
      {
        label: "Backend",
        primary: ["Node.js"],
        familiar: ["PHP", "Laravel", "Go", "go-jet", "gRPC", "GraphQL"],
      },
      {
        label: "Databases",
        primary: ["MySQL", "Firebase"],
        familiar: ["PostgreSQL"],
      },
      {
        label: "DevOps & Tools",
        primary: ["Git", "Docker", "Cloudflare R2"],
        familiar: ["OpenAPI Generator", "GCP", "AWS"],
      },
      {
        label: "Design & CMS",
        primary: ["Figma"],
        familiar: ["XARA", "WordPress"],
      },
    ];
  }, []);

  const works: PersonalProject[] = useMemo(() => {
    return [
      {
        title: 'Portfolio',
        description:
          'A single-page developer portfolio with a Matrix-inspired terminal aesthetic — green monospace text. Includes an animated hero, about and skills sections, project cards with demo links, an experience timeline, and a floating bottom nav for quick section jumps.',
        posterSrc: 'https://portfolio-assets.jmaglinte.com/assets/portfolio1-preview.png',
        techs: ['React', 'TypeScript'],
        demoLink: 'https://portfolio1.jmaglinte.com',
        sourceCodeLink: 'https://github.com/Jmaglinte-Projects/portfolio-react-app/tree/jaffy/design-1',
      },
      {
        title: 'Crocsbook Project',
        description: 'A practice project inspired by the need for greater transparency in public infrastructure initiatives. This platform helps communities monitor and document government projects by capturing and tracking daily photo updates, making it easier to follow progress and promote accountability — especially for flood control and other public works projects.',
        posterSrc: 'https://portfolio-assets.jmaglinte.com/assets/crocsbook-preview.png',
        techs: ['React', 'React Router Framework', 'SSR', 'Tailwindcss', 'MySql', 'gRPC', 'go', 'go-jet', 'jwt', 'Cloudflare R2'],
        requestDemo: true,
        sourceLinks: [
          {
            title: "Frontend",
            link: "https://github.com/Jmaglinte-Projects/crocsbook-rrfm",
          },
          {
            title: "Backend",
            link: "https://github.com/Jmaglinte-Projects/crocsbook-go-app",
          },
          {
            title: "API",
            link: "https://github.com/Jmaglinte-Projects/crocsbook-api",
          },
        ],
      },
      {
        title: "JMovies",
        description:
          "Let you watch movies online without having to register or paying",
        posterSrc:
          "https://portfolio-assets.jmaglinte.com/assets/jmovies-preview.png",
        techs: ["React", "TMDb API"],
        demoLink: "https://jmovies.netlify.app/movies",
        sourceCodeLink: "https://github.com/pusoy/reactjs-movie-app",
      },
      {
        title: "Danao Glass and Aluminum Supply",
        description:
          "Demo website for a glass and aluminum supply company. This is the first I built using React",
        posterSrc:
          "https://portfolio-assets.jmaglinte.com/assets/dga-preview.png",
        techs: ["HTML", "CSS", "React"],
        demoLink: "https://danao-glass.netlify.app/",
        sourceCodeLink:
          "https://github.com/Jmaglinte-Projects/danao_glass_and_aluminum",
      },
    ];
  }, []);

  return (
    <HomeWrapper>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <HeroBand>
        <HeroContent>
          <Eyebrow>Software Engineer</Eyebrow>
          <HeroTitle>Jaffy Maglinte</HeroTitle>
          <HeroLead>
            <TypeAnimation
              sequence={[
                "Building thoughtful web experiences.",
                2000,
                "Full-stack development, end to end.",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </HeroLead>
          <HeroValueProp>
            Passionate full-stack engineer crafting production-ready web
            applications — from pixel-perfect UIs to scalable backend systems.
          </HeroValueProp>
          <HeroStrengths>
            <StrengthChip>React</StrengthChip>
            <StrengthChip>TypeScript</StrengthChip>
            <StrengthChip>Go</StrengthChip>
            <StrengthChip>Node.js</StrengthChip>
            <StrengthChip>Full-Stack</StrengthChip>
          </HeroStrengths>
          <CodeChip>npx create-portfolio --name jaffy</CodeChip>
          <HeroActions>
            <PrimaryButton href="#works">View My Work</PrimaryButton>
            <OutlineButton
              href="https://www.linkedin.com/in/jmaglinte/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </OutlineButton>
            <OutlineButton
              href="https://github.com/jaffymaglinte"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </OutlineButton>
            <OutlineButton
              href="https://www.facebook.com/jmaglinte12"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </OutlineButton>
          </HeroActions>
        </HeroContent>
        <ProfileImage src={profile} alt="Jaffy Maglinte" />
      </HeroBand>

      <SectionDivider />

      {/* ── About ────────────────────────────────────────────────────────────── */}
      <ContentBand id="about">
        <SectionHeader>
          <Eyebrow>About</Eyebrow>
          <SectionTitle>About me</SectionTitle>
        </SectionHeader>
        <AboutContentWrapper>
          <AboutMainCol>
            <BodyText>
              I am an experienced developer with a passion for building software.
              I continuously seek opportunities to expand my knowledge and stay
              up-to-date with the latest technologies, allowing me to deliver
              high-quality code and exceed client expectations. With a dedication
              to continuous learning and a drive for excellence, I am committed
              to making a positive impact through my work as a developer.
            </BodyText>
          </AboutMainCol>
          <AboutCards>
            <AboutCard>
              <InfoRow>
                <InfoLabel>Status</InfoLabel>
                <StatusBadge>Open to opportunities</StatusBadge>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Current Role</InfoLabel>
                <InfoValue>Junior Software Engineer</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Experience</InfoLabel>
                <InfoValue>5+ years</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Location</InfoLabel>
                <InfoValue>Philippines</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Focus</InfoLabel>
                <InfoValue>React · TypeScript · Go</InfoValue>
              </InfoRow>
            </AboutCard>
          </AboutCards>
        </AboutContentWrapper>
      </ContentBand>

      <SectionDivider />

      {/* ── Skills ───────────────────────────────────────────────────────────── */}
      <ContentBand id="skills">
        <SectionHeader>
          <Eyebrow>Stack</Eyebrow>
          <SectionTitle>Skills</SectionTitle>
        </SectionHeader>
        <FeatureGrid>
          {skills.map((skill) => (
            <FeatureCard key={skill.label}>
              <CardTitle>{skill.label}</CardTitle>
              <SkillTagGroup>
                <SkillPrimaryTags>
                  {skill.primary.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </SkillPrimaryTags>
                {skill.familiar.length > 0 && (
                  <>
                    <SkillFamiliarLabel>Also familiar with</SkillFamiliarLabel>
                    <SkillPrimaryTags>
                      {skill.familiar.map((tech) => (
                        <TechTag
                          key={tech}
                          style={{ opacity: 0.6 }}
                        >
                          {tech}
                        </TechTag>
                      ))}
                    </SkillPrimaryTags>
                  </>
                )}
              </SkillTagGroup>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </ContentBand>

      <GreenDivider />

      {/* ── Projects ─────────────────────────────────────────────────────────── */}
      <ContentBand id="works">
        <SectionHeader>
          <Eyebrow>Portfolio</Eyebrow>
          <SectionTitle>Personal Projects</SectionTitle>
        </SectionHeader>
        <ProjectsGrid>
          {works.map((work, index) => (
            <ProjectCard key={work.title}>
              <ProjectMedia>
                <ProjectIndex>
                  {String(index + 1).padStart(2, "0")}
                </ProjectIndex>
                <ProjectPoster
                  src={work.posterSrc}
                  alt={`${work.title} preview`}
                />
              </ProjectMedia>
              <ProjectContent>
                <ProjectTitle>{work.title}</ProjectTitle>
                <ProjectDescription>{work.description}</ProjectDescription>
                <div>
                  <TechLabel>Technologies</TechLabel>
                  <TechTags style={{ marginTop: "var(--spacing-sm)" }}>
                    {work.techs.map((tech) => (
                      <ProjectTechTag key={tech}>{tech}</ProjectTechTag>
                    ))}
                  </TechTags>
                </div>
                <ActionRow>
                  <PrimaryButton
                    href={
                      work.requestDemo
                        ? "mailto:aclc.jaffy.maglinte@gmail.com"
                        : work.demoLink
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {work.requestDemo ? "Request Demo" : "Live Demo"}
                  </PrimaryButton>
                  {work.sourceLinks?.map((link) => (
                    <OutlineButton
                      key={link.title}
                      href={link.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.title}
                    </OutlineButton>
                  ))}
                  {work.sourceCodeLink && (
                    <OutlineButton
                      href={work.sourceCodeLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source Code
                    </OutlineButton>
                  )}
                </ActionRow>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentBand>

      <SectionDivider />

      {/* ── Experience ───────────────────────────────────────────────────────── */}
      <ContentBand id="experience">
        <SectionHeader>
          <Eyebrow>Career</Eyebrow>
          <SectionTitle>Experience</SectionTitle>
        </SectionHeader>
        <ExperienceWrapper>
          <Timeline mode="left" items={mappedExperiences} />
        </ExperienceWrapper>
      </ContentBand>
    </HomeWrapper>
  );
};

export default Home;
