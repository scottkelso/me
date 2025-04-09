import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { Box, styled } from '@mui/material';

const StyledIcon = styled('a')(({ theme }) => ({
  margin: theme.spacing(1),
  color: theme.palette.background.paper,
  display: 'inline-block',
  transition: 'transform 0.2s, color 0.2s',
  '&:hover': {
    transform: 'scale(1.2)',
    color: theme.palette.primary.main,
  },
}));

function SocialIcon({ href, Icon }: { href: string; Icon: React.ElementType }) {
  return (
    <StyledIcon href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </StyledIcon>
  );
}

export function Socials(){
  return (
    <Box>
      <SocialIcon href="https://github.com/scottkelso" Icon={GitHubIcon} />
      <SocialIcon href="https://www.linkedin.com/in/kelsojosh/" Icon={LinkedInIcon} />
      <SocialIcon href="https://x.com/scottkelso07" Icon={XIcon} />
    </Box>
  )
}