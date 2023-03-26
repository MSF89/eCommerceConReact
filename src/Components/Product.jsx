import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {AddShoppingCart} from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from 'accounting'
import { Link } from 'react-router-dom';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({ product: {id, title, category, thumbnail, price, description}}) {
  
 
  
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch]= useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item:{id, title, category, thumbnail, price }
    })
  }
 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader 
        action={
         <Typography className='action' variant='h5' color='textSecondary'>
            {accounting.formatMoney(price, "US$")}
         </Typography>
        }
        title={category}
        subheader="in Stock"
      />
      <Link to={`/products/${id}`}><CardMedia
        component="img"
        height="194"
        image= {thumbnail}
        alt={`imagen producto ${id}`}
      /></Link>
      <CardContent>
        <Typography  color="text.secondary">
        {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" >
          <AddShoppingCart fontSize='large' onClick={ addToBasket}/>
        </IconButton>
        <IconButton aria-label="share">
          {Array(4)
            .fill()
            .map((_,i) => (
                <p>&#11088;</p>
            ))}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}