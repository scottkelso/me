import { styled, Typography, TypographyProps } from "@mui/material";

const StyledHighlightsTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 20,
    bottom: 5,
    width: '100%',
    height: '0.7rem',
    backgroundColor: theme.palette.primary.main,
    zIndex: -1,
  },
  [theme.breakpoints.up('md')]: {
    marginX: theme.spacing(10),
  },
}));

interface UnderlinedHeaderProps extends TypographyProps {
  title: string;
}

export function UnderlinedHeader({ title, ...props }: UnderlinedHeaderProps) {
  return <StyledHighlightsTitle variant="h3" align="left" {...props}>{title}</StyledHighlightsTitle>
}