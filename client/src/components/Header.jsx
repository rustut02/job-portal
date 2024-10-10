import {AppBar, Toolbar, styled} from '@mui/material';
import logoNaming from '../img/jobforyou.png';
import {Link} from 'react-router-dom';
import { routhPath } from '../routes/route';


const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 64,
    '& > div > *' : {
        textDecoration : 'none',
        color: 'inherit',
        marginRight : 20,
        fontSize: 14
    }
} )

const Header = () => {
    return (
        <StyledAppBar>
            <Toolbar>
            <Link to={routhPath.home}>
                <img src={logoNaming} alt="Job for You" style={{ width: 95, marginBottom: 6 }} />
            </Link>
            <Link to={routhPath.create}>Post a Job</Link>
            <Link to={routhPath.posts}>Find Jobs</Link>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;