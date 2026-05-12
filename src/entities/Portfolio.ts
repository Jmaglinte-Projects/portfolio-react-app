import { Timestamp } from "firebase/firestore";
import { Moment } from "moment";

export type Portfolio = {
  id: string;
  fullName: string;
  position: string;
  about: string;
  openTo: OpenTo[];
  socialMediaLinks?: Social[];
  skills?: Skill[];
  personalProjects?: PersonalProject[];
  experiences?: Experience[];
};

export type OpenTo = {
  title: string;
};

export type Project = {
  title: string;
  overview: string;
};

export type Experience = {
  title: string;
  company: string;
  fromDate: Timestamp | Moment;
  toDate: Timestamp | Moment;
  jobResponsibilities: Responsibility[];
  projects: Project[];
};

export type Responsibility = {
  description: string;
};

export type PersonalProject = {
  title: string;
  description: string;
  posterSrc: string;
  techs: string[];
  demoLink?: string;
  sourceCodeLink?: string;
  sourceLinks?: Array<{
    title: string;
    link: string;
  }>;
  requestDemo?: boolean;
};

export type Skill = {
  title: string;
  imgSrc: string;
};

export type Social = {
  title: string;
  link?: string;
};
