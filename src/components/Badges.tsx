import { Stack } from "@mui/material";

import awsImg from '../images/aws.png'
import microsoftImg from '../images/microsoft.png'
import ibmImg from '../images/ibm.png'
import greensoftwareImg from '../images/green-software.png'

export function Badges(){
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" 
      sx={{ 
        marginBottom: 10,      
        justifyContent: "center",
        alignItems: "center" }}>
        <img src={awsImg} alt="Logo" style={{ maxWidth: 150, height: 'auto'}} />
        <img src={microsoftImg} alt="Logo" style={{ maxWidth: 150, height: 'auto'}}/>
        <img src={ibmImg} alt="Logo" style={{ maxWidth: 150, height: 'auto'}} />
        <img src={greensoftwareImg} alt="Logo" style={{ width: '100%', maxWidth: 150, height: 'auto'}} />
    </Stack>
  )
}