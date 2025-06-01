import { parse } from "date-fns";

export type Experience = {
    company: {
        name: string;
        location: string;
        link?: string;
    };
    positions: Position[];
    hideWhenPrinting?: boolean;
};

export type Position = {
    title: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    hideWhenPrinting?: boolean;
};

export const experiences: Experience[] = [
    {
        company: {
            name: "BlastPoint",
            location: "Pittsburgh, PA (remote)",
            link: "https://blastpoint.com/",
        },
        positions: [
            {
                title: "Director of Platform Engineering",
                startDate: parse("2025-01-27", "y-M-d", new Date()),
                description:
                    "Responsible for coordinating BlastPoint's Platform Team's process and workload, as well as growth and retention.",
            },
            {
                title: "Engineering Manager",
                startDate: parse("2023-08-07", "y-M-d", new Date()),
                endDate: parse("2025-01-27", "y-M-d", new Date()),
                description:
                    "Responsible for coordinating BlastPoint's Platform Team's process and workload, as well as growth and retention.",
            },
            {
                title: "Team Lead",
                startDate: parse("2023-01-01", "y-M-d", new Date()),
                endDate: parse("2023-08-07", "y-M-d", new Date()),
                description:
                    "Responsible for coordinating BlastPoint's Platform Team's process and workload. Successfully iteratively transitioned the team to industry-standard two week cycles, significantly increasing team momentum, morale, and predictability.",
            },
            {
                title: "Senior Frontend Engineer",
                startDate: parse("2021-10-06", "y-M-d", new Date()),
                endDate: parse("2025-01-27", "y-M-d", new Date()),
                description:
                    "Helping BlastPoint adopt the latest frontend technologies and best practices for its customer intelligence platform.",
            },
        ],
    },
    {
        company: {
            name: "BrdgAI",
            location: "Pittsburgh, PA (remote)",
            link: "https://brdg.ai/",
        },
        positions: [
            {
                title: "Software Engineer",
                startDate: parse("2020-01-02", "y-M-d", new Date()),
                endDate: parse("2021-10-06", "y-M-d", new Date()),
                description:
                    "Built custom UIs and internal tools for machine learning workflows, including a web-based image/video labeling platform (React, Konva), a cross-platform data collection app (React Native, Expo), and supporting dashboards. Helped manage a team of international contractors. Contributed to DevOps workflows by implementing CI, analytics, and error reporting.",
            },
        ],
    },
    {
        company: {
            name: "The Event Discovery Company",
            location: "Youngstown, OH (remote)",
        },
        positions: [
            {
                title: "Co-Founder, CEO",
                startDate: parse("2017-10", "y-M", new Date()),
                endDate: parse("2020-03-01", "y-M-d", new Date()),
                description:
                    "Led communication with customers and stakeholders to make product and business decisions. Spearheaded frontend development, creating interactive wireframes in Adobe XD and implementing them in React (MUI). Worked remote with a team through an always-improving agile development workflow.",
            },
        ],
    },
    {
        company: {
            name: "Drund",
            location: "Youngstown, OH",
            link: "https://drund.com/",
        },
        positions: [
            {
                title: "Talent Development Coordinator",
                startDate: parse("2017-08", "y-M", new Date()),
                endDate: parse("2018-09-14", "y-M-d", new Date()),
                description:
                    "Grew Drund's team and talent pool by coordinating internship programs and developer community outreach.",
                hideWhenPrinting: true,
            },
            {
                title: "Frontend Engineer",
                startDate: parse("2016-02-09", "y-M-d", new Date()),
                endDate: parse("2018-09-14", "y-M-d", new Date()),
                description:
                    "Maintained and added features to a white-label social-network-as-a-service. Helped modernize the project by leading the implementation of JavaScript code standards via linting, integration testing, unit testing, and refactoring.",
            },
        ],
    },
    {
        company: {
            name: "Flashstarts",
            location: "Cleveland, OH",
            link: "https://www.linkedin.com/company/flashstarts-inc-/",
        },
        positions: [
            {
                title: "Software Development Intern",
                startDate: parse("2015-05-19", "y-M-d", new Date()),
                endDate: parse("2015-08-19", "y-M-d", new Date()),
                description:
                    "Spent a fast-paced summer helping multiple startups prep MVPs for Demo Day as part of Flashstarts' accelerator. Bounced between teams and projects - building with the MEAN stack on one, Phaser.js and TypeScript on another. Got my first real taste of startup chaos and collaboration.",
            },
        ],
    },
    {
        company: {
            name: "Youngstown State University",
            location: "Youngstown, OH",
            link: "https://ysu.edu/",
        },
        positions: [
            {
                title: "Student Web Developer",
                startDate: parse("2013-09", "y-M", new Date()),
                endDate: parse("2015-02", "y-M", new Date()),
                description:
                    "Created an information organization system for the Youngstown State University's Undergraduate web Bulletin. This involved writing custom Drupal plugins and themes in PHP.",
            },
        ],
        hideWhenPrinting: true,
    },
    {
        company: {
            name: "Joe's PC Services",
            location: "Canfield, OH",
        },
        positions: [
            {
                title: "Joe",
                startDate: parse("2010", "y", new Date()),
                endDate: parse("2015", "y", new Date()),
                description:
                    "Branded, marketed, and carried out computer maintenance, phone repair, and website administration and creation services to over 100 unique customers while in high school.",
            },
        ],
        hideWhenPrinting: true,
    },
];

export async function GET() {
    return new Response(JSON.stringify(experiences));
}
