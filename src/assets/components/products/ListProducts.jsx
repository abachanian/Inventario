import React, { useEffect, useState } from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import axios from 'axios';
import Grid from '@mui/material/Grid2';

export default function MyCard () {

  const [products, setProducts] = useState([])

  useEffect(() => {
      const axiosData = async () => {
          try {
              const response = await axios("http://localhost:3001/products")
              setProducts(response.data)

          } catch (error) {
              console.log(error);                
          }
      }
      axiosData()
  }, [])
  
  const [category, setCategory] = useState([])

  useEffect(() => {
      const axiosData = async () => {
          try {
              const response = await axios("http://localhost:3001/categorys")
              setCategory(response.data)

          } catch (error) {
              console.log(error);                
          }
      }
      axiosData()
  }, [])
  
  const [subcategory, setSubcategory] = useState([])

  useEffect(() => {
      const axiosData = async () => {
          try {
              const response = await axios("http://localhost:3001/subcategorys")
              setSubcategory(response.data)

          } catch (error) {
              console.log(error);                
          }
      }
      axiosData()
  }, [])
  
    return (
      <>
        <Grid container size={{xs:12, sm:6, md:4}}  spacing={2}>
          {products.map((product) => { 
            return (
              <Grid key={product.id}>
                <Card sx={{ width: 345, margin: 2 }}>
                  <CardActionArea sx={{ height: '100%' }}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      height="200"
                      alt={product.name}
                    />
                    <CardContent>
                      <Typography variant='h4' color="green" textAlign={"center"}>{product.name}</Typography>
                      {/* {category.map((category) => (category.id === product.category ? <Typography variant='h5' color="blue" textAlign="center" key={category.id}>{category.name}</Typography> : null ))}
                      {subcategory.map((subcategory) => (subcategory.id === product.subcategory ? <Typography variant='h6' color="red" textAlign="center" key={subcategory.id}>{subcategory.name}</Typography> : null ))} */}
                      {/* <Typography component="p" variant="body1" margin={2}>{product.description}</Typography> */}
                      <Typography component="p" variant="body2" textAlign={"center"} marginTop={5}>Cantidad: {product.stock}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button variant="contained">Add</Button>
                    <Button color="error">Remove</Button>
                  </CardActions>
                </Card>
              </Grid>
            )})}
        </Grid>
      </>
    )
}