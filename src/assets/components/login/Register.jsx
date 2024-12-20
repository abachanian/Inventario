import axios from "axios";
import React, { useState } from "react";
import { Button, Card, CardContent, TextField, Typography, Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    console.log(form);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/users", form);
      alert("Registro Exitoso");
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <Container maxWidth="sm" margin="auto">
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card>
          <CardContent>
            <Typography variant="h3" component="div" gutterBottom align="center">
              Registrate
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} alignItems="center">
                <Grid size={{xs:12, md:3}}>
                  <Typography>Nombre</Typography>
                </Grid>
                <Grid size={{xs:12, md:9}}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Nombre"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    htmlFor="name"
                  />
                </Grid>
                <Grid size={{xs:12, md:3}}>
                  <Typography>Apellido</Typography>
                </Grid>
                <Grid size={{xs:12, md:9}}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Apellido"
                    name="lastname"
                    value={form.lastname}
                    onChange={handleChange}
                    htmlFor="lastname"
                  />
                </Grid>
                <Grid size={{xs:12, md:3}}>
                  <Typography>Usuario</Typography>
                </Grid>
                <Grid size={{xs:12, md:9}}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    htmlFor="email"
                  />
                </Grid>
                <Grid size={{xs:12, md:3}}>
                  <Typography>Contraseña</Typography>
                </Grid>
                <Grid size={{xs:12, md:9}}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Contraseña"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    htmlFor="password"
                  />
                </Grid>
              </Grid>
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
