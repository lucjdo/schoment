import { Typography } from '@mui/material'

export default function Title({ children }: { children: string }) {
  return (
    <Typography
      variant='h4'
      sx={{
        fontFamily: 'Open Sans',
        color: 'info.light'
      }}
    >
      {children}
    </Typography>
  )
}
