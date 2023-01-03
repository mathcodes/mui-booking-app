import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import AccessTime from '@mui/icons-material/AccessTime';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { 
            variant: 'body2' 
          },
          style: {
            fontSize: 11,
            backgroundColor: 'red',
          }
        },
        {
          props: { 
            variant: 'body3' 
          },
          style: {
            fontSize: 9,
          }
        },
      ]
    }
  }
});


const TourCard = () => {
  return <Grid item xs={3}>
    <ThemeProvider theme={theme}>
    <Paper 
      elevation={3}
      color={darkMode ? 'secondary' : 'primary'}
    >
      <img
        src="https://cdn.pixabay.com/photo/2020/04/16/11/41/waterfall-5050298__480.jpg"
        alt=""
        className="img" />
      <Box paddingX={1}>
        <Typography variant="subtitle1" component="h2">
          Niagara Falls
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <AccessTime sx={{ width: 12.5 }} />
          <Typography variant="body2" component="p" marginLeft={0.5}>
            5 Hours
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
          marginTop={3 }
        >
        <Rating 
          name="read-only" 
          value={4.5}
          precision={0.5}
          size="small"
          readOnly 
        />

        </Box>
      </Box> 
    </Paper>
    </ThemeProvider>
  </Grid>
}

export default TourCard;