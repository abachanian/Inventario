import { useContext, useState } from "react";
import NavListDrawer from "./NavListDrawer";
import { AppBar, Box, Button, Drawer, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function NavBar({ navArrayLinks }) {
    const { user, setUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("isLoged");
        alert("Sesion Cerrada");
    };

    const filteredNavLinks = user
        ? navArrayLinks.filter(item => item.title !== "Login" && item.title !== "Registrate")
        : navArrayLinks.filter(item => item.title !== "Crear");

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{ display: { xs: "flex", sm: "none" } }}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Menú
                    </Typography>

                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {filteredNavLinks.map((item) => (
                            <Button color="inherit" component={NavLink} to={item.to} key={item.title}>
                                {item.title}
                            </Button>
                        ))}
                        {user && (
                            <Button color="inherit" onClick={handleLogout}>
                                Cerrar Sesión
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{ display: { xs: "flex", sm: "none" } }}
            >
                <NavListDrawer navArrayLinks={filteredNavLinks} setOpen={setOpen} />
                {user && (
                    <Button color="inherit" onClick={handleLogout} sx={{ margin: 2 }}>
                        Cerrar Sesión
                    </Button>
                )}
            </Drawer>
        </>
    );
}