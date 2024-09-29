import {AppBar, Toolbar, styled} from '@mui/material';
import logoNaming from '../img/jobforyou.png';

const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 64
} )

const Header = () => {
    return (
        <StyledAppBar>
            <Toolbar>
            <img src={logoNaming} alt="Job for You" style={{ width: 95, marginBottom: 6 }} />
            Post a Job
            Find Jobs
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;