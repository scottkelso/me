
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";


export function Technologies() {
  function createData(
    name: string,
    description: string,
  ) {
    return { name, description };
  }
  
  const rows = [
    createData('Python', "2 years’ experience including AWS data pipelines, and ML; running AI Camp 2017 and 2019 respectfully "),
    createData('Typescript', "2 years’ on and off experience on web applications (including industry training in angular 1.5 and react), and offline web development "),
    createData('Java', "2 years’ experience in university (including professional 12month placement in industry) android game development, backend dropwizard applications and small swing UI facing programs "),
    createData('Javascript', "2 years’ on and off experience on web applications (including industry training in angular 1.5 and react), and offline web development "),
    createData('SQL', "Over 2 years’ experience using MySQL, Postgres and java libraries such as JOOQ "),
    createData('Kotlin', "2 months of use backend on a dropwizard application "),
    createData('Groovy', "Jenkins CI pipeline builds and integration test classes using Cucumber and Spock libraries "),
  ];

  const utility = [
    createData('AWS', "Associate Developer Certification owned, calling upon 1 years experience building prototypes including a webapp using Amplify for my own digital startup company "),
    createData('Docker', "Over 1 year of experience, including docker compose"),
    createData('Kubernetes', "1 years experience deplying jobs into a Kubernetes cluster "),
    createData('Jenkins', "Used for deployments, pipeline scripts written in groovy "),
    createData('Databases', "Some experience with GraphQL, Postgres, Redshift, and DynamoDB "),
    createData('Atlassian', "Jira (a task management system) used to plan sprints, and breakdowns into stories and tasks "),
    createData('Build Tools', "A full year’s technical experience using Gradle, Gulp & Grunt "),
  ];

  return (
    <Box maxWidth={900} margin="auto">
      <TableContainer component={Paper}>
        <Typography variant="h2" padding={2}>Programming Languages</Typography>
        <Table aria-label="simple table">
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={{ marginTop: 5 }}>
      <Typography variant="h2" padding={2}>Utility Systems</Typography>
        <Table aria-label="simple table">
            <TableBody>
            {utility.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}