import { Link, useLoaderData } from "react-router-dom"
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";




const margin = {
    margin: "1em",
    marginTop: "6em"
  }

export const OneProduct = (addToBasket) => {
   
    const {oneProduct} = useLoaderData()

    return (
    <>
        <Box style={margin} sx={{  display: 'flex'}}>
            <Box >
                <CardMedia
                    component="img"
                    sx={{  maxWidth: 800 }}
                    image={oneProduct.thumbnail}
                    alt="Live from space album cover"
                />
                <Box sx={{display: 'flex', justifyContent: 'space-around', maxHeight: 150}}>
                    <IconButton aria-label="share">
                        {Array(4)
                         .fill()
                         .map((_,i) => (
                         <p>&#11088;</p>
                     ))}
                    </IconButton>
                    <IconButton aria-label="add to cart" >
                        <AddShoppingCart fontSize='large' onClick={()=> addToBasket(oneProduct.id)}/>
                    </IconButton>
                </Box>
            </Box>
            <Box>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                 {oneProduct.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {oneProduct.category}
                </Typography>
                </CardContent>
                <CardContent>
                <Typography>
                    {oneProduct.description}
                </Typography>
                </CardContent>
            </Box>
           
        </Box>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Link className="nfbutton" to="/"><Button  variant="contained" color="secondary">Volver A Lista de Productos</Button></Link>
        </div>
    </>
    )
    
}

 

export const loaderOneProduct = async ({params}) => {
    const res = await fetch (`https://dummyjson.com/products/${params.id}`)
    const oneProduct = await res.json();
    return {oneProduct}
}





