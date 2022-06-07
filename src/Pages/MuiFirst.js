import Navbar from '../components/MuiPage/Navbar';
import Sidebar from '../components/MuiPage/Sidebar';
import Sections from '../components/MuiPage/Sections';
import Footer from '../components/MuiPage/Footer';
import { Grid } from '@mui/material';


function MuiFirst () {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={3}> 
        <Sidebar sx={{color: 'red'}} />
      </Grid>
      <Grid item xs={9}>
        <Sections />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default MuiFirst;
