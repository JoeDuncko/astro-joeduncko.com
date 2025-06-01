import { parse } from "date-fns";

export type Extracurricular = {
    title: string;
    organization: {
        name: string;
        location: string;
        link?: string;
    };
    startDate: Date;
    endDate?: Date;
    description: string;
    hideWhenPrinting?: boolean;
};

export const extracurriculars: Extracurricular[] = [
    {
        title: "Entrepreneur in Residence &\nDirector of Software Development",
        organization: {
            name: "Youngstown Business Incubator",
            location: "Youngstown, OH",
            link: "https://ybi.org/",
        },
        startDate: parse("2023-02-17", "y-M-d", new Date()),
        description:
            "Guiding YBI portfolio companies through software development challenges and leading the YBI's MVP Development Program - which funds an MVP for a Northeast Ohio-based startup each semester.",
    },
    {
        hideWhenPrinting: true,
        title: "Director of Software Development",
        organization: {
            name: "Dev Youngstown",
            location: "Youngstown, OH",
            link: "https://www.youngstown.dev/",
        },
        startDate: parse("2023-02-17", "y-M-d", new Date()),
        description:
            "Partnering Youngstown's most promising student software developers with its most promising startups.",
    },
    {
        title: "Adjunct Professor",
        organization: {
            name: "Youngstown State University",
            location: "Youngstown, OH",
            link: "https://ysu.edu/",
        },
        startDate: parse("2022-08-29", "y-M-d", new Date()),
        endDate: parse("2023-05-08", "y-M-d", new Date()),
        description:
            "Taught web development at the undergraduate level, bringing practical industry experience into the classroom.",
    },
    {
        title: "Co-Organizer",
        organization: {
            name: "Code Youngstown",
            location: "Youngstown, OH",
            link: "https://codeyoungstown.com/",
        },
        startDate: parse("2017-05-01", "y-M-d", new Date()),
        description:
            "Connecting software engineers and developers in the Youngstown, OH area through events and community initiatives.",
    },
    {
        hideWhenPrinting: true,
        title: "Co-Founder, Lead Organizer",
        organization: {
            name: "HackYSU",
            location: "Youngstown, OH",
            link: "https://hackysu.com/",
        },
        startDate: parse("2014-08-01", "y-M-d", new Date()),
        endDate: parse("2017-05-01", "y-M-d", new Date()),
        description:
            "Lead the founding team of HackYSU organizers. Organized the first three HackYSU hackathons, which brought together hundreds of students to build software projects over a weekend.",
    },
];

export async function GET() {
    return new Response(JSON.stringify(extracurriculars));
}
