import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NavListDrawer({ navArrayLinks, setOpen }) {

    return (
        <Box sx={{ width: 250 }}>

            <nav>

                <List>
                    {navArrayLinks.map((item) => (
                        <ListItem disablePadding key={item.title}>
                            
                            <ListItemButton 
                                component={NavLink} 
                                to={item.to} 
                                onClick={() => setOpen(false)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                            
                        </ListItem>
                    ))}
                </List>

            </nav>

        </Box>
    );
}
