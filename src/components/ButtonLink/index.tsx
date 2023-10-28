import { Button } from '@mui/material'
import { Link } from 'wouter'
import { ButtonLinkProps } from './types'

export default function ButtonLink({
  children,
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <Link style={{ textDecoration: 'none' }} href={href}>
      <Button variant='contained' {...props}>
        {children}
      </Button>
    </Link>
  )
}
