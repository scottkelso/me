import { Grid } from "@mui/material";

import awsImg from '../images/aws.png'
import microsoftImg from '../images/microsoft.png'
import ibmImg from '../images/ibm.png'

export function Badges(){
  return (
    <Grid container spacing={1} maxWidth={900} margin="auto" marginTop={10} marginBottom={5}>
      <Grid size={4}>
        <img src={awsImg} alt="Logo" style={{ width: '100%', maxWidth: 150, height: 'auto'}} />
      </Grid>
      <Grid size={4}>
        <img src={microsoftImg} alt="Logo" style={{ width: '100%', maxWidth: 150, height: 'auto'}}/>
      </Grid>
      <Grid size={4}>
        <img src={ibmImg} alt="Logo" style={{ width: '100%', maxWidth: 150, height: 'auto'}} />
      </Grid>
    </Grid>
  )
}