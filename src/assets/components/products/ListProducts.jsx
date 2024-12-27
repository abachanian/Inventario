import React, { useEffect, useState } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import axios from 'axios';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';

export default function ListProducts() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios("http://localhost:3001/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    axiosData();
  }, []);

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios("http://localhost:3001/categorys");
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    axiosData();
  }, []);

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios("http://localhost:3001/subcategorys");
        setSubcategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    axiosData();
  }, []);

  const handleDetailsClick = (id) => {
    navigate(`/Detaill/${id}`);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <>
      <FormControl fullWidth margin="normal">
        <InputLabel id="category-select-label">Categoría</InputLabel>
        <Select
          labelId="category-select-label"
          value={selectedCategory}
          onChange={handleCategoryChange}
          label="Categoría"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {category.map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container size={{ xs: 12, sm: 6, md: 4 }} spacing={2}>
        {filteredProducts.map((product) => {
          return (
            <Grid key={product.id}>
              <Card sx={{ width: 345, height: 490, margin: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                    alt={product.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant='h4' color="green" textAlign={"center"}>{product.name}</Typography>
                    {category.map((category) => (category.id === product.category ? <Typography variant='h5' color="blue" textAlign="center" key={category.id}>{category.name}</Typography> : null))}
                    {subcategory.map((subcategory) => (subcategory.id === product.subcategory ? <Typography variant='h6' color="red" textAlign="center" key={subcategory.id}>{subcategory.name}</Typography> : null))}
                    <Typography component="p" variant="body1" margin={2}>{product.description}</Typography>
                    <Typography component="p" variant="body2" textAlign={"center"} marginTop={5}>Cantidad: {product.stock}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button size="small" variant="contained" color="success" onClick={() => handleDetailsClick(product.id)}>+ Detalles</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
