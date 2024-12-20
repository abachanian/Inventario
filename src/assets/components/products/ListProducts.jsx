import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";

export default function MyCard () {

    return (
      <Container maxWidth="sm">
        <Card maxWidth="xs">
          <CardActionArea >

            <CardMedia
              component="img"
              image="https://via.placeholder.com/1000x200"
              height="200"
              alt="Card Image"
            />
            
            <CardContent>
              <Typography variant='h5'>Card Title</Typography>
              <Typography component="p" variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa unde cumque architecto reprehenderit quibusdam? Ratione nostrum sapiente totam. Eveniet porro eum alias quasi perferendis error consectetur velit dolores fugit. Iusto.</Typography>
            </CardContent>

          </CardActionArea>

          <CardActions>
            <Button variant="contained">Add</Button>
            <Button color="error">Remove</Button>
          </CardActions>

        </Card>
      </Container>
    )
}