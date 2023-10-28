import { ButtonProps } from '@mui/material'

interface ButtonLinkProps extends ButtonProps {
  children: React.ReactNode
  href: string
}
