import { Grid } from "@mui/material";
import { useLoaderData,  } from "react-router-dom"
import Product from "../Components/Product";


const AllProducts = () => {
  const {products} = useLoaderData();
  return ( 
  <Grid container spacing={2}>
    { 
       products.map(product => (
         <Grid  item xs={12} sm={6} md={4} lg={3}>
          <Product key={product.id} product={product}/>
         </Grid>
       ))
     }
   </Grid>
   )
}
export default AllProducts

const loaderAllProducts = async (state) => {
  fetch ("https://dummyjson.com/products")
      .then((res)=>res.json())
      .then((data)=> {
      state(data.products)
      return {state}
    })
    .catch((error)=> console.log("Error al consumir la api", error))
}



export {
  loaderAllProducts
}
