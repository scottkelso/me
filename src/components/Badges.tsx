import { Stack } from "@mui/material";

import awsImg from '../images/aws.png'
import microsoftPl900Img from '../images/microsoftPl900.png'
import microsoftAi102Img from '../images/microsoftAi102.png'
import ibmImg from '../images/ibm.png'
import greensoftwareImg from '../images/green-software.png'

export function Badges(){
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="center" 
      sx={{ 
        marginBottom: 10,      
        justifyContent: "center",
        alignItems: "center" }}>
        <img src={awsImg} alt="Logo" style={{ maxWidth: 150, height: 'auto'}} />
        <img src={microsoftPl900Img} alt="Logo" style={{ maxWidth: 150, height: 'auto'}}/>
        <img src={microsoftAi102Img} alt="Logo" style={{ maxWidth: 150, height: 'auto'}}/>
        <img src={ibmImg} alt="Logo" style={{ maxWidth: 150, height: 'auto'}} />
        <img src={greensoftwareImg} alt="Logo" style={{ width: '100%', maxWidth: 150, height: 'auto'}} />
    </Stack>
  )
}