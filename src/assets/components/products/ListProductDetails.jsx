import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import axios from 'axios';

export default function ListProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios(`http://localhost:3001/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      const fetchCategory = async () => {
        try {
          const response = await axios(`http://localhost:3001/categorys/${product.category}`);
          setCategory(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchCategory();

      const fetchSubcategory = async () => {
        try {
          const response = await axios(`http://localhost:3001/subcategorys/${product.subcategory}`);
          setSubcategory(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchSubcategory();
    }
  }, [product]);

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  const handleBackClick = () => {
    navigate('/listProducts');
  };

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 5 }}>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{ height: 300, objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h4" color="green" textAlign="center">{product.name}</Typography>
        {category && <Typography variant="h5" color="blue" textAlign="center"> Categoría: {category.name}</Typography>}
        {subcategory && <Typography variant="h6" color="red" textAlign="center">Subcategoría: {subcategory.name}</Typography>}
        <Typography variant="h5" color="purple" textAlign="left"> Marca: {product.brand}</Typography>
        <Typography component="p" variant="body1" marginTop={2}>Descripción del producto: {product.description}</Typography>
        <Typography component="p" variant="body2" textAlign="left" marginTop={2}>Fecha de ingreso: {product.date}</Typography>
        <Typography component="p" variant="body2" textAlign="Left" marginTop={2}>Cantidad: {product.stock}</Typography>
        <Box textAlign="center">
          <Button variant="contained" color="error" onClick={handleBackClick} sx={{ mt: 2 }}>
            Volver a la lista de productos
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}