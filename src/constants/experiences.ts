import moment from "moment";
import { Experience } from "@/entities/Portfolio";

const fromMDY = (date: string) => moment(date, "MM/DD/YYYY", true);

export const experiences: Experience[] = [
  {
    company: "Vananaz Technologies Inc.",
    projects: [
      {
        overview: "Internal recruitment website",
        title: "ETS",
      },
      {
        overview: "An online dating app",
        title: "Royal Partner",
      },
      {
        title: "AI-Powered Motion Analysis System",
        overview:
          "An AI-powered motion analysis system for analyzing human motion data.",
      },
      {
        title: "AI-Powered Masking App",
        overview:
          "Automatically recognizes people in videos and blurs their faces",
      },
    ],
    title: "Junior Software Engineer",
    toDate: moment(),
    jobResponsibilities: [
      {
        description:
          "Fostered a collaborative and supportive team environment across projects.",
      },
      {
        description:
          "Developed and enhanced product features both independently and with cross-functional teammates.",
      },
      {
        description:
          "Maintained a high standard of professionalism, accountability, and respect in daily work.",
      },
      {
        description:
          "Actively participated in weekly sprint meetings and company-wide initiatives.",
      },
      {
        description:
          "Contributed to company growth by delivering reliable, quality-first engineering output.",
      },
      {
        description:
          "Maintained and updated existing codebases to improve stability and maintainability.",
      },
      {
        description:
          "Applied coding standards and best practices to ensure readable, scalable, and testable code.",
      },
      {
        description:
          "Supported the full software development lifecycle, from planning and implementation to deployment.",
      },
      {
        description:
          "Continuously upskilled in emerging tools and frameworks to improve delivery velocity.",
      },
    ],
    fromDate: fromMDY("03/13/2023"),
  },
  {
    title: "Software Developer",
    company: "Muramoto Audio Visual Phils., Inc.",
    projects: [
      {
        overview:
          "An in-house inventory system including: forecast, purchasing and sales",
        title: "MPS (MAPLE Production System)",
      },
    ],
    fromDate: fromMDY("07/01/2021"),
    toDate: fromMDY("02/13/2023"),
    jobResponsibilities: [
      {
        description:
          "Reviewed existing systems and proposed practical improvements to performance and usability.",
      },
      {
        description:
          "Evaluated and integrated suitable existing and emerging technologies into internal workflows.",
      },
      {
        description:
          "Planned and coordinated assigned projects while providing clear progress and change updates to stakeholders.",
      },
      {
        description:
          "Developed new features and modified internal web applications based on user requests and evolving requirements.",
      },
      {
        description:
          "Collaborated with managers, project leads, and end users to gather requirements, identify issues, and refine solutions.",
      },
      {
        description:
          "Contributed technical input and implementation suggestions during team planning and review sessions.",
      },
      {
        description:
          "Monitored and maintained production systems to ensure continuity and reliability.",
      },
      {
        description:
          "Maintained legacy applications through iterative enhancements and bug fixes.",
      },
      {
        description:
          "Supported process-improvement initiatives focused on quality, operational efficiency, and cost reduction.",
      },
    ],
  },
  {
    title: "Web Developer",
    company: "Proweaver Inc.",
    projects: [],
    toDate: fromMDY("06/30/2021"),
    fromDate: fromMDY("08/06/2019"),
    jobResponsibilities: [
      {
        description:
          "Maintained and updated client websites across WordPress, PrestaShop, Shopify, and WooCommerce.",
      },
      {
        description:
          "Integrated and configured WordPress plugins based on client-specific business requirements.",
      },
      {
        description:
          "Converted approved website layouts into responsive WordPress implementations.",
      },
    ],
  },
];
