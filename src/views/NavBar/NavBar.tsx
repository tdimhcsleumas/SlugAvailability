import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">     
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Slug Availability
                    </Typography>
                    <Button color="inherit">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Outlet />
        </div>
    )
};

export default NavBar;
