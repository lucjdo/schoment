import React from 'react'
import { Paper } from '@mui/material'
import { ViewLayoutProps } from './types'

export default function ViewLayout({ children }: ViewLayoutProps) {
  return (
    <Paper sx={{ p: 5, pb: 2 }}>
      {React.Children.map(children, (child) => {
        return child
      })}
    </Paper>
  )
}
