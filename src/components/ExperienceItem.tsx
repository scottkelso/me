import { Box, CardMedia, Collapse, IconButton, List, ListItem } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export interface ExperienceItem {
    title: string;
    dates: string;
    company: string;
    location: string;
    details: string[];
    img?: string;
}

interface ExperienceItemProps {
    experienceItem: ExperienceItem;
}

export function ExperienceItem({experienceItem}: ExperienceItemProps) {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
      setExpanded(!expanded);
    };
    return (
        <Card sx={{ display:"flex", minWidth: 275, maxWidth:900, backgroundColor: 'background.paper', marginTop: 2 }}>
            <Box sx={{  width: '100%' }}>
                <CardContent>
                  <Box>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {experienceItem.dates}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {experienceItem.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{experienceItem.company} | {experienceItem.location}</Typography>
                    <IconButton onClick={handleToggle} sx={{ padding: 0 }}>
                        {expanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon /> }
                    </IconButton>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <List>
                            {experienceItem.details.map((detail, index) => (
                                <ListItem key={index} sx={{ padding: 0 }}>
                                    <Typography variant="body2">
                                        {detail}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                  </Box>
                </CardContent>
            </Box>
            {experienceItem.img && (
                <CardMedia
                    component="img"
                    sx={{ width: 151, marginLeft: 'auto'}}
                    image={experienceItem.img}
                    alt={experienceItem + " photo"}
                />
            )}
        </Card>
    )
}