import axios from "axios";
import React, { useState } from "react";
import { Button, Card, CardContent, TextField, Typography, Container, Box, MenuItem, Select } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    category: "",
    description: "",
    date: "",
    stock: "",
    image: ""
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
      await axios.post("http://localhost:3001/products", form);
      alert("Carga Exitosa");
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <Container maxWidth="md">
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card>
          <CardContent>
            <Typography variant="h3" component="div" gutterBottom align="center">
              Cargar Producto Nuevo
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
                  <Typography>Marca</Typography>
                </Grid>
                <Grid size={{xs:12, md:9}}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Marca"
                    name="brand"
                    value={form.brand}
                    onChange={handleChange}
                    htmlFor="brand"
                  />
                </Grid>
                <Grid size={{xs:12, md:3}}>
                  <Typography>Categoría</Typography>
                </Grid>
                <Grid size={{xs:12, md:9}}>
                  <Select
                    fullWidth
                    margin="normal"
                    label="Categoría"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    htmlFor="category"
                  >
                    <MenuItem value="Repuesto">Repuesto</MenuItem>
                    <MenuItem value="Insumo">Insumo</MenuItem>
                    <MenuItem value="Hardware">Hardware</MenuItem>
                  </Select>
                </Grid>
                <Grid size={{xs:12, md:3}}>
                  <Typography>Descripción del Producto</Typography>
                </Grid>
                <Grid size={{xs:12, md:9}}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Descripcion"
                    type="text"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    htmlFor="description"
                  />
                </Grid>
                <Grid size={{xs:12, md:3}}>
                  <Typography>Fecha de Ingreso</Typography>
                </Grid>
                <Grid size={{xs:12, md:9}}>
                  <TextField
                    fullWidth
                    margin="normal"
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    htmlFor="date"
                  />
                </Grid>
                <Grid size={{xs:12, md:3}}>
                  <Typography>Stock</Typography>
                </Grid>
                <Grid size={{xs:12, md:9}}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Cantidad"
                    type="number"
                    name="stock"
                    value={form.stock}
                    onChange={handleChange}
                    htmlFor="stock"
                  />
                </Grid>
                <Grid size={{xs:12, md:3}}>
                  <Typography>Imagen</Typography>
                </Grid>
                <Grid size={{xs:12, md:9}}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="URL"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    htmlFor="image"
                  />
                </Grid>
              </Grid>
              <Button variant="contained" color="success" type="submit" fullWidth sx={{ mt: 2 }}>
                Crear
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
