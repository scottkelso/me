
import { ExperienceItem } from "../components/ExperienceItem";
import kainosImg from '../images/kainos.jpeg'
import jfpImg from '../images/jfp.jpeg'
import instilImg from '../images/instil.jpg'
import { Box } from "@mui/material";


export function Experience() {
    const experience: ExperienceItem[] = [
        {
            title: "Lead Software Engineer",
            dates: "July 2019 - Present",
            company: "Kainos Software Limited",
            location: "Northern Ireland, Belfast",
            details: [
                "Academy tech lead for the delivery of a 16-week apprenticeship training program",
                "Lead software engineer on a migration project for two SML pipeline products into AWS",
                "Member and co-leader of AI Camp 2017 and 2019 respectfully teaching at university level intro to AI",
                "First in Kainos to gain a Quantum Computing Certification from IBM",
                "Led the design and development of a creative CSR project for NI Science Festival 2020",
                "2+ years in R'n'D, learning design thinking, idea generation, and many white papers & POCs delivered",
                "Various public speaking and presentation opportunities - calling upon 9+ years of theatre experience",
                "Python, AWS, Kubernetes, Drone, Terraform, Docker, RHEL",
            ],
            img: kainosImg
        },
        {
            title: "Senior Product Engineer",
            dates: "May - Nov 2024",
            company: "Jesus Film Project",
            location: "New Zealand, Auckland",
            details: [
                "Contributed to the development of a Nextjs web platform",
                "Webapp backend used docker wrapped GraphQL database and prisma for integration, and for frontend Nextjs, MUI, & TypeScript, testing with Jestjs, doppler for secret management",
                "Atypical 'Shape Up' agile methodology compared to scrum/kanban",
                "Advised on onboarding processes, team management, and clean code practises"
            ],
            img: jfpImg

        },
        {
            title: "Software Engineer",
            dates: "July 2016 - July 2017",
            company: "Instil Software",
            location: "Northern Ireland, Belfast",
            details: [
                "Java, Javascript, Kotlin, Groovy, Sass, Angular 1.5, Postgres, Boxfuse, Jenkins, AWS, Dropwizard, Restful services",
                "Exposure to design and development lifecycle, both front and back end",
                "Valuable training on clean code, security, and agile development ",
                "Working with clients and managing stakeholder expectations to balance project deliverables"
            ],
            img: instilImg
        }
    ]

    return (
        <Box maxWidth={900} margin="auto" marginTop={5}>
            {experience.map((experience, index) => (
                <ExperienceItem experienceItem={experience} key={index} />))}
        </Box>
    )
}