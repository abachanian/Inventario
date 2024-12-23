import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, TextField, Typography, Container, Box, MenuItem, Select } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function Create() {

  const [form, setForm] = useState({
    name: "",
    brand: "",
    category: "",
    subcategory: "",
    description: "",
    date: "",
    stock: "",
    image: ""
  });

  const [categorys, setCategorys] = useState([])

  useEffect(() => {
    const axiosData = async () => {
        try {
            const response = await axios("http://localhost:3001/categorys")
            setCategorys(response.data)

        } catch (error) {
            console.log(error);                
        }
    }
    axiosData()
  }, [])

  const [subcategorys, setSubCategorys] = useState([])

  useEffect(() => {
    const axiosData = async () => {
        try {
            const response = await axios("http://localhost:3001/subcategorys")
            setSubCategorys(response.data)

        } catch (error) {
            console.log(error);                
        }
    }
    axiosData()
  }, [])

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
                    label="Categoría"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    htmlFor="category"
                  >
                    {categorys.map((category) => {
                      return (<MenuItem value={category.id} key={category.id}>{category.name}</MenuItem>)})}
                  </Select>                  
                </Grid>                          
                <Grid size={{xs:12, md:3}}>
                  <Typography>Subcategoría</Typography>
                </Grid>
                <Grid size={{xs:12, md:9}}>
                <Select
                    fullWidth
                    label="Subcategoría"
                    name="subcategory"
                    value={form.subcategory}
                    onChange={handleChange}
                    htmlFor="subcategory"
                  >
                    {subcategorys.map((subcategory) => (
                      subcategory.category_id === form.category ? 
                      <MenuItem value={subcategory.name} key={subcategory.id}>{subcategory.name}</MenuItem> 
                      : null
                    ))}
                  </Select>
                </Grid>

                <Grid size={{xs:12, md:3}}>
                  <Typography>Descripción del Producto</Typography>
                </Grid>
                <Grid size={{xs:12, md:9}}>
                  <TextField
                    fullWidth                    
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
