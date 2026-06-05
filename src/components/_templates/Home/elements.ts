import styled, { keyframes } from "styled-components";

// ─── Page wrapper ─────────────────────────────────────────────────────────────

export const HomeWrapper = styled.div`
  max-width: 100%;
  padding-bottom: calc(92px + env(safe-area-inset-bottom));

  @media screen and (max-width: 767px) {
    padding-bottom: calc(150px + env(safe-area-inset-bottom));
  }
`;

// ─── Hero Band ────────────────────────────────────────────────────────────────

export const HeroBand = styled.section`
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: var(--spacing-4xl);
  align-items: center;
  padding: var(--spacing-5xl) 0;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3xl);
    padding: var(--spacing-4xl) 0;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  min-width: 0;
`;

export const Eyebrow = styled.span`
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 2.52px;
  text-transform: uppercase;
  color: var(--mute);
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-sans);
  font-size: 60px;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: -0.65px;
  color: var(--ink-strong);
  margin: 0;

  @media screen and (max-width: 767px) {
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.5px;
  }
`;

export const HeroLead = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: var(--primary-soft);
  min-height: 28px;
`;

export const HeroValueProp = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--body);
  max-width: 56ch;
  margin: 0;
`;

export const HeroStrengths = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`;

export const StrengthChip = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: var(--primary-soft);
  background: var(--canvas-soft);
  border: 1px solid var(--hairline);
  border-radius: var(--rounded-pill);
  padding: var(--spacing-xxs) var(--spacing-md);
`;

export const HeroRole = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--body);
  margin: 0;
`;

export const CodeChip = styled.code`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: var(--canvas-text-soft);
  background: var(--canvas-soft);
  border: 1px solid var(--hairline);
  border-radius: var(--rounded-sm);
  padding: var(--spacing-xxs) var(--spacing-sm);
  white-space: nowrap;
  overflow-x: auto;
  max-width: 100%;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  align-items: center;
  margin-top: var(--spacing-xs);
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
`;

export const ProfileImage = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: var(--rounded-md);
  border: 1px solid var(--hairline);
  background: var(--canvas-soft);
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--primary);
  }

  @media screen and (max-width: 767px) {
    width: 160px;
    height: 160px;
    order: -1;
  }
`;

// ─── Dividers ─────────────────────────────────────────────────────────────────

export const SectionDivider = styled.hr`
  border: none;
  border-top: var(--section-divider);
  margin: 0;
`;

export const GreenDivider = styled.hr`
  border: none;
  border-top: 2px solid var(--primary);
  margin: 0;
`;

// ─── Content Bands ────────────────────────────────────────────────────────────

export const ContentBand = styled.section`
  padding: var(--spacing-5xl) 0;

  @media screen and (max-width: 767px) {
    padding: var(--spacing-4xl) 0;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-3xl);
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-sans);
  font-size: 36px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -0.9px;
  color: var(--ink-strong);
  margin: 0;

  @media screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

// ─── About ────────────────────────────────────────────────────────────────────

export const BodyText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--body);
  max-width: 72ch;
`;

export const AboutContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: var(--spacing-4xl);
  align-items: start;

  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
`;

export const AboutMainCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

export const AboutCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

export const AboutCard = styled.div`
  background: var(--canvas);
  border: 1px solid var(--hairline);
  border-radius: var(--rounded-md);
  padding: var(--spacing-2xl);
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);

  &:not(:last-child) {
    padding-bottom: var(--spacing-lg);
    border-bottom: 1px solid var(--hairline);
    margin-bottom: var(--spacing-lg);
  }
`;

export const InfoLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 2.52px;
  text-transform: uppercase;
  color: var(--mute);
`;

export const InfoValue = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--ink);
`;

const livePulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.85); }
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--primary);

  &::before {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: var(--rounded-pill);
    background: var(--primary);
    flex-shrink: 0;
    animation: ${livePulse} 2s ease-in-out infinite;
  }
`;

// ─── Skills ───────────────────────────────────────────────────────────────────

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);

  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

export const FeatureCard = styled.article`
  background: var(--canvas);
  border: 1px solid var(--hairline);
  border-radius: var(--rounded-md);
  padding: var(--spacing-2xl);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: var(--glow-hover);
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: var(--ink);
  margin: 0 0 var(--spacing-md);
`;

export const CardBody = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--body);
  margin: 0;
`;

export const SkillTagGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

export const SkillPrimaryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`;

export const SkillFamiliarLabel = styled.span`
  display: block;
  font-size: 11px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--mute);
`;

// ─── Projects ─────────────────────────────────────────────────────────────────

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--spacing-2xl);

  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

export const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  background: var(--canvas);
  border: 1px solid var(--hairline);
  border-radius: var(--rounded-md);
  overflow: hidden;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: var(--glow-hover);
  }
`;

export const ProjectPoster = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid var(--hairline);
  background: var(--canvas-soft);
  flex-shrink: 0;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-2xl);
  flex: 1;
  min-width: 0;
`;

export const ProjectDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--body);
  margin: 0;
  flex: 1;
`;

export const TechLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 2.52px;
  text-transform: uppercase;
  color: var(--mute);
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`;

export const TechTag = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: var(--ink);
  background: var(--canvas);
  border: 1px solid var(--hairline);
  border-radius: var(--rounded-pill);
  padding: var(--spacing-xxs) var(--spacing-md);
`;

export const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: auto;
  padding-top: var(--spacing-md);
`;

// ─── Buttons ──────────────────────────────────────────────────────────────────

const buttonBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--rounded-sm);
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  white-space: nowrap;

  &:hover {
    text-decoration: none;
  }
`;

export const PrimaryButton = styled.a`
  ${buttonBase}
  background: var(--primary);
  color: var(--on-primary);
  border: 1px solid var(--primary);

  &:hover {
    background: var(--primary-soft);
    border-color: var(--primary-soft);
    color: var(--on-primary);
  }
`;

export const OutlineButton = styled.a`
  ${buttonBase}
  background: var(--canvas);
  color: var(--ink);
  border: 1px solid var(--hairline);

  &:hover {
    border-color: var(--primary-soft);
    color: var(--ink);
    background: var(--canvas-soft);
  }
`;

// ─── Experience ───────────────────────────────────────────────────────────────

export const ExperienceWrapper = styled.div`
  .ant-timeline {
    margin-top: var(--spacing-lg);
  }

  .ant-timeline-item-tail {
    border-inline-start: 1px solid var(--hairline) !important;
  }

  .ant-timeline-item-head {
    background-color: var(--canvas) !important;
    border-color: var(--primary) !important;
  }

  .ant-timeline-item-content {
    inset-block-start: -4px !important;
    margin-inline-start: var(--spacing-3xl) !important;
  }

  @media screen and (max-width: 767px) {
    .ant-timeline-item-content {
      margin-inline-start: var(--spacing-2xl) !important;
    }
  }
`;

/* Legacy exports kept for any external imports */
export const TitleWrapper = SectionTitle;
export const ProfileDetailsWrapper = HeroBand;
export const AboutMeWrapper = ContentBand;
export const SkillsWrapper = ContentBand;
export const SkillsListWrapper = FeatureGrid;
export const SkillItemWrapper = FeatureCard;
export const WorksWrapper = ContentBand;
export const WorksListWrapper = ProjectsGrid;
export const WorksItemWrapper = ProjectCard;
export const WorkItemActions = ActionRow;
