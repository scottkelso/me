import { Box } from "@mui/material";

export function Highlights() {
    return (
        <Box maxWidth={900} sx={{marginX: {xs: 2, md:7}}} marginTop={5} marginBottom={5}>
            <ul style={{ textAlign: "left" }}>
                <li><a href="https://scottkelso-career.s3.eu-west-2.amazonaws.com/certifications/Azure+AI-102+Certification.png" target="_blank">Azure AI Engineer (Associate) Certified 2025</a></li>
                <li><a href="https://scottkelso-career.s3.eu-west-2.amazonaws.com/certifications/Azure+PL-900+Certification.jpg" target="_blank">Azure Power Platform Fundamentals Certified 2025</a></li>
                <li><a href="https://scottkelso-career.s3.eu-west-2.amazonaws.com/certifications/AWS+Developer+Associate+Certification.pdf" target="_blank">AWS Associate Developer Certified August 2021 & December 2024</a></li>
                <li><a href="https://scottkelso-career.s3.eu-west-2.amazonaws.com/certifications/green-software-certificate.pdf" target="_blank">Linux Foundation Green Software Certified 2025</a></li>
                <li><a href="https://www.credly.com/badges/7e2c5538-e13c-40e8-b608-5db027fc9b05/linked_in" target="_blank">IBM Quantum Certification - Challenge Advanced Achievement Fall 2020</a></li>
                <li>Past Executive director and member of Belfast Operatic Company</li>
                <li>Web Designer & Admin of <a href="https://cadcamni.co.uk" target="_blank">cadcamni.co.uk</a> and Co-Founder and former Technical Architect of ShowCall</li>
                <li>Past Member of Queen's Computing Society & Developer meetups</li>
                <li>Qualified peer mentor for QUB school of Electronics, Electrical Engineering and Computer Science</li>
                <li>Over 5 years of freelance graphic design experience</li>
                <li>Public speaking and Presentation Skills - calling upon 8+ years of theatre experience</li>
            </ul>
        </Box>
    )
}