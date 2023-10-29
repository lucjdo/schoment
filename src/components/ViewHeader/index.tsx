import ButtonLink from '@components/ButtonLink'
import AddIcon from '@mui/icons-material/Add'
import Title from '@components/Title'
import { Stack } from '@mui/material'
import { ViewHeaderProps } from './types'

export default function ViewHeader({ title, btnProps }: ViewHeaderProps) {
  return (
    <Stack
      direction='row'
      sx={{
        justifyContent: 'space-between',
        mb: 2
      }}
    >
      <Title>{title}</Title>
      <ButtonLink
        href={btnProps.href}
        startIcon={<AddIcon />}
        disabled={btnProps.disabled}
      >
        {btnProps.label}
      </ButtonLink>
    </Stack>
  )
}
