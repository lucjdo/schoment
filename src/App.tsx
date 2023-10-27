import { Route } from 'wouter'
import { Box, Grid, Paper } from '@mui/material'
import Menu from '@containers/Menu'
import './App.css'

function App() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Menu />
          </Grid>
          <Grid item xs={10}>
            <Paper sx={{ height: 'calc(100vh - 90px)', background: '#fafafa' }}>
              <Route path='/rooms'>Rooms</Route>
              <Route path='/rooms/:id'>Room</Route>
              <Route path='/students'>Students</Route>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default App
