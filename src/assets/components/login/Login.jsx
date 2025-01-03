import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Card, CardContent, TextField, Typography, Container, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Login() {

    const { setUser } = useContext(UserContext);


    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios("http://localhost:3001/users");
            const userFound = await response.data.find(
                (user) => user.email === form.email && user.password === form.password
            );
            if (userFound) {
                setUser(userFound);
                localStorage.setItem("isLoged", JSON.stringify(userFound));
                navigate("/");
            } else {
                alert("Datos erroneos");
            }
        } catch (error) {
            console.log("error");
        }
    };

    return (
        <Container maxWidth="sm" aria-hidden="false">
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Card>
                    <CardContent>
                        <Typography variant="h3" component="div" gutterBottom align="center">
                            Iniciar Sesión
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Contraseña"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                            />
                            <Button variant="contained" color="success" type="submit" fullWidth sx={{ mt: 2 }}>
                                Enviar
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}
