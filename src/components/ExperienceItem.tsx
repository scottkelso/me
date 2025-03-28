import { Box, CardMedia, List, ListItem } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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

    return (
        <Card sx={{ display:"flex", minWidth: 275, maxWidth:900, backgroundColor: 'background.paper', marginTop: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {experienceItem.dates}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {experienceItem.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{experienceItem.company} | {experienceItem.location}</Typography>
                    <List>
                        {experienceItem.details.map((detail, index) => (
                            <ListItem key={index} sx={{ padding: 0 }}>
                                <Typography variant="body2">
                                    {detail}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
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