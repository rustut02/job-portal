import Header from '../components/Header'
import { Box, Typography, Button, styled } from '@mui/material'
import logoCollective from '../img/collectivermbg.png'

const Component = styled(Box)({
    marginTop: 70,
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    margin: '0 150px', 
    '& > div': {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        '& > p': {
            fontSize: 46,
            inlineHeight: 1.25,
            letterSpacing: -1,
            textAlign: 'left'
        },
        '& > button': {
            width: 220,
            height: 50,
            background: 'rgb(111, 87, 247)',
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 700,
            marginTop: 48
        }
    }
})

const Home = () => {
    return(
        <div>
            <Header/>
            <Component>
                <Box>
                    <Typography>Let's make your next great hire. Fast.</Typography>
                    <Button variant='contained'>Post a job</Button> 
                </Box>
                <Box>
                    <img src={logoCollective} alt='home' style={{ width: 500, marginBottom: 10 }}/> 
                </Box>
            </Component>
        </div>
    )
}

export default Home;