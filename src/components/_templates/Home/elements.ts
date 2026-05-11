import syled, { styled } from "styled-components";

export const HomeWrapper = syled.div``;

export const TitleWrapper = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
`;

export const ProfileDetailsWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  .profile {
    width: 190px;
    /* height: 285px; */
    background: 0 0;
    border-radius: 30px;
    /* min-height: 285px; */
    z-index: 9;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
  }

  h1 {
    margin-bottom: 20px;
  }

  .social_medial a {
    padding-right: 10px;
    border-right: 1px solid;
    margin-right: 10px;

    &:last-child {
      margin: 0;
      padding: 0;
      border: none;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .profile_info {
      width: 100%;
    }
  }
`;

export const AboutMeWrapper = styled.div`
  margin-top: 40px;
  text-align: justify;

  h1 {
    margin-bottom: 25px;
  }
`;

export const SkillsWrapper = styled.div`
  margin: 40px 0 0 0;
  text-align: justify;

  h1 {
    margin-bottom: 25px;
  }
`;

export const SkillsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  gap: 15px;

  text-align: center;

  @media screen and (max-width: 600px) {
    gap: 10px;
  }
`;

export const SkillItemWrapper = styled.div`
  /* width: 80px; */
  transition: all 0.4s ease;

  span {
    margin-bottom: 15px;
  }
  img {
    width: 60px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.7;
      transition: all 0.4s ease;
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 600px) {
    span {
      margin-bottom: 0;
    }
  }
`;

export const WorksWrapper = styled.div`
  margin: 45px 0 0 0;

  .actions {
    text-align: center;
  }
`;

export const WorksListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  width: 100%;
`;

export const WorksItemWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 25px;

  width: 100%;
  transition: all 0.4s ease;
  opacity: 0.9;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  position: relative;
  .title {
    display: block;
    background-color: var(--color);
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 15px;
  }

  img {
    transition: all 0.4s ease;
    width: 100px;
    height: 100px;
    object-fit: scale-down;
  }

  details {
    flex: 1fr;
  }

  .techs {
    display: inline-block;
  }

  &:hover {
    opacity: 10;
    transition: all 0.4s ease;
    /* transform: scale(1.1); */
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const WorkItemActions = styled.div`
  margin: 25px 0 0;
  display: flex;
  gap: 10px;

  a {
    padding-right: 10px;
    border-right: 1px solid;
    margin-right: 10px;

    &:last-child {
      margin: 0;
      padding: 0;
      border: none;
    }
  }
`;

export const ExperienceWrapper = styled.div`
  margin: 45px 0 0;
  .ant-timeline-item-tail {
    background: #ffffff57;
  }

  .ant-timeline-item-head {
    color: #fff;
    border-color: #fff;
  }
`;
