import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import { AppBar, Box, Button, Drawer, Toolbar, IconButton, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

export default function NavBar( {navArrayLinks} ) {

    const [open, setOpen] = useState(false);

    return (
        <>

        <AppBar position="static">
            <Toolbar>
                <IconButton
                    color="inherit"
                    size="large"
                    onClick={() => setOpen(true)}
                    sx={{display: {xs: "flex", sm: "none"}}}
                    edge="start"
                >
                    <MenuIcon/>
                </IconButton>
                
                <Typography variant="h6"
                    sx={{flexGrow: 1}}
                >
                    Menú
                </Typography>

                    <Box sx={{display: {xs: "none", sm: "block"}}}>
                        {navArrayLinks.map((item) => (
                            <Button color="inherit" component={NavLink} to={item.to} key={item.title}>{item.title}</Button>
                            ))}
                    </Box>

            </Toolbar>
        </AppBar>

        <Drawer
            open={open}
            anchor="left"
            onClose={() => setOpen(false)}
            sx={{display: {xs: "flex", sm: "none"}}}
        >
            <NavListDrawer navArrayLinks={navArrayLinks} setOpen={setOpen}/>
        </Drawer>
        </>
    )
}