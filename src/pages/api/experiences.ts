import { parse } from "date-fns";

export type Experience = {
    title: string;
    company: {
        name: string;
        location: string;
        link?: string;
    };
    startDate: Date;
    endDate?: Date;
    description: string;
    hideWhenPrinting?: boolean;
};

export const experiences: Experience[] = [
    {
        title: "Engineering Manager",
        company: {
            name: "BlastPoint",
            location: "Pittsburgh, PA",
            link: "https://blastpoint.com/",
        },
        startDate: parse("2023-08-07", "y-M-d", new Date()),
        description:
            "Responsible for coordinating BlastPoint's Platform Team's process and workload, as well as growth and retention.",
    },
    {
        title: "Team Lead",
        company: {
            name: "BlastPoint",
            location: "Pittsburgh, PA",
            link: "https://blastpoint.com/",
        },
        startDate: parse("2023-01-01", "y-M-d", new Date()),
        endDate: parse("2023-08-07", "y-M-d", new Date()),
        description:
            "Responsible for coordinating BlastPoint's Platform Team's process and workload. Successfully iteratively transitioned the team to industry-standard two week cycles, significantly increasing team momentum, morale, and predictability.",
    },
    {
        title: "Senior Frontend Engineer",
        company: {
            name: "BlastPoint",
            location: "Pittsburgh, PA",
            link: "https://blastpoint.com/",
        },
        startDate: parse("2021-10-06", "y-M-d", new Date()),
        description:
            "Helping Blastpoint adopt the latest frontend technologies and best practices for its customer intelligence platform.",
    },
    {
        title: "EIR - Software Development",
        company: {
            name: "Youngstown Business Incubator",
            location: "Youngstown, OH",
            link: "https://ybi.org/",
        },
        startDate: parse("2023-2-17", "y-M-d", new Date()),
        description:
            "Aiding YBI portfolio companies in navigating building out their MVPs as an Entrepreneur in Residence.",
    },
    {
        title: "Adjunct Professor",
        company: {
            name: "Youngstown State University",
            location: "Youngstown, OH",
            link: "https://ysu.edu/",
        },
        startDate: parse("2022-08-29", "y-M-d", new Date()),
        endDate: parse("2023-05-8", "y-M-d", new Date()),
        description:
            "Bringing my industry experience to the classroom to teach web development related courses at YSU.",
    },
    {
        title: "Software Engineer",
        company: {
            name: "BrdgAI",
            location: "Pittsburgh, PA",
            link: "https://brdg.ai/",
        },
        startDate: parse("2020-01-02", "y-M-d", new Date()),
        endDate: parse("2021-10-06", "y-M-d", new Date()),
        description:
            "Created UIs and designed developer-friendly APIs for machine learning pipeline. Projects included custom web-based image and video labeling software (React, canvas/Konva), a cross-platform data collection mobile app (React Native, Expo), and several dashboards. Helped manage a remote team of contractors located outside of the US. Heavily contributed to iterating devops workflow by spearheading implementing analytics, error reporting, and CI.",
    },
    {
        title: "Co-Founder, CEO",
        company: {
            name: "The Event Discovery Company",
            location: "Youngstown, OH",
            // link: "https://eventdiscovery.company/", // site is dead
        },
        startDate: parse("2017-10", "y-M", new Date()), // TODO: get real date
        endDate: parse("2020-03-01", "y-M-d", new Date()),
        description:
            "Led communication with customers and stakeholders to make product and business decisions. Spearheaded frontend development, creating interactive wireframes in Adobe XD and implementing them in React via Material UI. Worked remote with a team through an always-improving agile development workflow.",
    },
    {
        title: "Talent Development Coordinator",
        company: {
            name: "Drund",
            location: "Youngstown, OH",
            link: "https://drund.com/",
        },
        startDate: parse("2017-08", "y-M", new Date()), // TODO: get real date
        endDate: parse("2018-09-14", "y-M-d", new Date()),
        description:
            "Grew Drund's team and talent pool by coordinating internship programs and developer community outreach.",
        hideWhenPrinting: true,
    },
    {
        title: "Frontend Engineer",
        company: {
            name: "Drund",
            location: "Youngstown, OH",
            link: "https://drund.com/",
        },
        startDate: parse("2016-02-09", "y-M-d", new Date()),
        endDate: parse("2018-09-14", "y-M-d", new Date()),
        description:
            "Maintained and added features to a white-label social-network-as-a-service. Helped modernize the project by leading the implementation of JavaScript code standards via linting, integration testing, unit testing, and refactoring.",
    },
    {
        title: "Software Development Intern",
        company: {
            name: "Flashstarts",
            location: "Cleveland, OH",
            link: "http://flashstarts.com/",
        },
        startDate: parse("2015-05-19", "y-M-d", new Date()),
        endDate: parse("2015-08-19", "y-M-d", new Date()),
        description:
            "Spent three months helping ten-odd startups get their MVPs ready in time for Demo Day in Flashstarts' intensive program. Learned a ton about sales and entrepreneurship along the way. Worked simultaneously on multiple projects with multiple teams. Utilized the MEAN stack on one project, and Phaser.js using Typescript on another. Discovered the wonderful thing that is UX testing.",
    },
    {
        title: "Student Web Developer",
        company: {
            name: "Youngstown State University",
            location: "Youngstown, OH",
            link: "https://ysu.edu/",
        },
        startDate: parse("2013-09", "y-M", new Date()), // TODO: get real date
        endDate: parse("2015-02", "y-M", new Date()), // TODO: get real date
        description:
            "Created an information organization system for the Youngstown State University's Undergraduate web Bulletin. This involved writing custom Drupal plugins and themes in PHP.",
        hideWhenPrinting: true,
    },
    {
        title: "Joe",
        company: {
            name: "Joe's PC Services",
            location: "Canfield, OH",
        },
        startDate: parse("2010", "y", new Date()),
        endDate: parse("2015", "y", new Date()),
        description:
            "Branded, marketed, and carried out computer maintenance, phone repair, and website administration and creation services to over 100 unique customers while in high school.",
        hideWhenPrinting: true,
    },
];

export async function GET() {
    return new Response(JSON.stringify(experiences));
}
