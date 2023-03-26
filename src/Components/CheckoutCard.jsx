import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import accounting from 'accounting'
import DeleteIcon from '@mui/icons-material/Delete'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';



export default function CheckoutCard({ product: {id, title, category, thumbnail, price, quantity}}) {

  const [{basket}, dispatch]= useStateValue();

  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_FROM_BASKET,
    id
  })

  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardHeader 
          action={
           <Typography className='action' variant='h5' color='textSecondary'>
            
              {accounting.formatMoney(price, "US$")}
           </Typography>
          }
          title={category}
          subheader={title}
         />
        <CardMedia
          component="img"
          height="194"
          image= {thumbnail}
          alt={`imagen producto ${id}`}
        />
      
        <CardActions className='cardAction' disableSpacing>       
            <div className='cardRating' aria-label="share">
                {Array(4)
                .fill()
                .map((_,i) => (
                   <p>&#11088;</p>
                ))}
            </div>
            <IconButton>
             <DeleteIcon fontSize='large' onClick={removeItem} />
            </IconButton>   
        </CardActions>
    </Card>
  );
}