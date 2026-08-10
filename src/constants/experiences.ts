import moment from "moment";
import { Experience } from "@/entities/Portfolio";

const fromMDY = (date: string) => moment(date, "MM/DD/YYYY", true);

export const experiences: Experience[] = [
  {
    company: "TechNova Solutions",
    projects: [
      {
        overview: "Internal hiring portal for managing job postings and applicant tracking",
        title: "HireHub",
      },
      {
        overview: "Subscription-based fitness tracking platform with workout plans and progress charts",
        title: "FitTrack Pro",
      },
    ],
    title: "Junior Software Engineer",
    toDate: moment(),
    jobResponsibilities: [
      {
        description:
          "Collaborated with designers and product managers to ship new features on a bi-weekly release cycle.",
      },
      {
        description:
          "Built and maintained RESTful APIs consumed by web and mobile clients.",
      },
      {
        description:
          "Participated in code reviews and sprint planning to improve team delivery quality.",
      },
      {
        description:
          "Wrote unit and integration tests to keep critical user flows stable in production.",
      },
      {
        description:
          "Refactored legacy modules to improve readability, performance, and test coverage.",
      },
    ],
    fromDate: fromMDY("03/13/2023"),
  },
  {
    title: "Software Developer",
    company: "BrightPath Digital",
    projects: [
      {
        overview:
          "Inventory and order management system with forecasting, purchasing, and sales reporting",
        title: "StockWise",
      },
    ],
    fromDate: fromMDY("07/01/2021"),
    toDate: fromMDY("02/13/2023"),
    jobResponsibilities: [
      {
        description:
          "Developed internal dashboards used by operations and finance teams daily.",
      },
      {
        description:
          "Integrated third-party payment and shipping APIs into existing workflows.",
      },
      {
        description:
          "Gathered requirements from stakeholders and translated them into actionable tickets.",
      },
      {
        description:
          "Monitored production logs and resolved bugs reported by end users.",
      },
      {
        description:
          "Documented system architecture and deployment steps for onboarding new developers.",
      },
    ],
  },
  {
    title: "Web Developer",
    company: "WebCraft Studio",
    projects: [],
    toDate: fromMDY("06/30/2021"),
    fromDate: fromMDY("08/06/2019"),
    jobResponsibilities: [
      {
        description:
          "Built and maintained client websites on WordPress, Shopify, and custom CMS platforms.",
      },
      {
        description:
          "Converted Figma mockups into responsive, cross-browser compatible pages.",
      },
      {
        description:
          "Configured plugins, themes, and SEO settings based on client requirements.",
      },
    ],
  },
];
