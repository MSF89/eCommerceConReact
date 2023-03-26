import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ShoppingCart} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../Img/sole.png'
import { useStateValue } from '../StateProvider';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ba68c8',
        },
        secondary: {
            main: '#f5f5f5',
        },
        red: {
            main: '#F44336',
            contrastText: '#fff',
        }
    }
})


export default function Navbar() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar color="secondary" >
                    <Toolbar position="sticky">
                        <Link to="/">
                            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                <img src={Logo} className='logo' alt='logo' />  
                            </IconButton>
                        </Link>
                        <div className='grow' />
                        <Typography variant="h6" color="textPrimary"  >
                            Hello Guest
                        </Typography>
                            <Link to="/checkout-Page">
                                <IconButton aria-label='show cart items' color='inherit'>
                                    <Badge badgeContent={basket?.length} color='red'>
                                        <ShoppingCart fontSize='large' />    
                                    </Badge>
                                </IconButton>
                            </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}
