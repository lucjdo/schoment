import React from 'react'
import { Box, Grid } from '@mui/material'
import { MainLayoutProps } from './types'

export default function MainLayout({ children }: MainLayoutProps) {
  const [firstChild, secondChild] = React.Children.toArray(children)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          {firstChild}
        </Grid>
        <Grid item xs={10}>
          {secondChild}
        </Grid>
      </Grid>
    </Box>
  )
}
