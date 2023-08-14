import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function BluuCard() {

    return(
    
        <Card
        sx={{
            transition:"0.2s",
            "&:hover":{
                transform:"scale(1.05)",
            }
        }}
        >
        <CardActionArea>
        <CardMedia
            component="img"
            image="https://c8.alamy.com/compes/b8p5c1/el-gt-de-citroen-coches-deportivos-que-debuto-como-un-concept-car-el-2-de-octubre-en-el-salon-de-paris-2008-b8p5c1.jpg"
            height="200"
            alt="descripcion"
            />
        <CardContent>
            <Typography variant="h5">Card Tittle</Typography>
            <Typography component='p' variant="body2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum, fuga quibusdam porro architecto nesciunt, sed distinctio dolorum, voluptas nobis perspiciatis veniam illum ex necessitatibus. Sapiente laudantium officia cupiditate quas.
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="contained">Add</Button>
            <Button color="error">Add</Button>
        </CardActions>
        </CardActionArea>
    </Card>
            )
}