import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { SectionIdEnum } from '../types';
import { Close } from '@mui/icons-material';
import { Fade, useScrollTrigger } from '@mui/material';

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  const navigationItems = [
    {
      text: 'Introduction',
      to: SectionIdEnum.intro,
    },
    {
      text: 'Highlights',
      to: SectionIdEnum.highlights,
    },
    {
      text: 'Experience',
      to: SectionIdEnum.experience,
    },
    {
      text: 'Skills',
      to: SectionIdEnum.skills,
    },
    {
      text: 'Technologies',
      to: SectionIdEnum.technologies,
    },
    {
      text: 'Appraisal',
      to: SectionIdEnum.appraisal,
    },
    {
      text: 'Contact',
      to: SectionIdEnum.contact,
    },
  ];

  const handleNavClick = (to: string) => {
    const el = document.getElementById(to);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      onCloseHandler();
    }
  };

  const mappedItems = (
    navigationItems.map(({ to, text }) => (
      <Button
        key={to}
        color="inherit"
        size="large"
        fullWidth
        onClick={() => handleNavClick(to)}
        sx={{ justifyContent: 'flex-start', paddingY: 2 }}
      >
        {text}
      </Button>
    ))
  );

  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 0,
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Fade in={trigger}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
            </Typography>
            <IconButton
              onClick={onOpenHandler}
              size="large"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={onCloseHandler}>
              <Box
                sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }}
                role="presentation"
              >
                <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: 1, borderColor: 'divider' }}>
                  <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    Menu
                  </Typography>
                  <IconButton color="inherit" onClick={onCloseHandler}>
                    <Close />
                  </IconButton>
                </Box>
                <Box display="flex" flexDirection="column" py={3} width="100%">
                  {mappedItems}
                </Box>
              </Box>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Fade>
    </Box>
  );
}