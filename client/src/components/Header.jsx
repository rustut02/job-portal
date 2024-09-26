import {AppBar, Toolbar} from '@mui/material';
import logo from '../img/jobforyou.png'; // Если Header.jsx находится в src/components

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
            <img src={logo} alt="Job for You" style={{ height: '40px' }} /> {/* Используйте изображение */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;