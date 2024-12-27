import React, { useState, useEffect } from 'react';
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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

  if (!product) return <div>Loading...</div>;

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Card sx={{ width: 345, height: 'auto', margin: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={product.image}
              sx={{ width: '100%', height: 200, objectFit: 'cover' }}
              alt={product.name}
            />
            <CardContent>
              <Typography variant='h4' color="green" textAlign={"center"}>{product.name}</Typography>
              {category && <Typography variant='h5' color="blue" textAlign="center">{category.name}</Typography>}
              {subcategory && <Typography variant='h6' color="red" textAlign="center">{subcategory.name}</Typography>}
              <Typography component="p" variant="body1" margin={2}>{product.description}</Typography>
              <Typography component="p" variant="body2" textAlign={"center"} marginTop={5}>Cantidad: {product.stock}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
import React, { useState, useEffect } from 'react';
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export function ListProducts() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios('http://localhost:3001/products');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => product.id === id);

  return (
    <Grid container spacing={2}>
      {filteredProducts.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}