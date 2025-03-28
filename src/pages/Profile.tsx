import Box from '@mui/material/Box'
import profileImg from '../images/profile.png'
export function Profile() {
    return (
        <Box marginTop={10}>
            <img src={profileImg} alt="Logo" width={500} />
        </Box>
    )
}