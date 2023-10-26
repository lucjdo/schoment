import Menu from '@containers/Menu'
import { Box, Grid } from '@mui/material';
import './App.css'

function App() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Menu />
        </Grid>
        <Grid item xs={10}>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default App
