import schomentSVG from '@assets/schoment-logo.svg'
import { Link, useLocation } from 'wouter'
import {
  ListItemText,
  Stack,
  MenuList,
  MenuItem,
  ListItemIcon,
  Divider,
  Paper
} from '@mui/material'
import { MenuProps } from './types'

export default function Menu({ sections }: MenuProps) {
  const [location] = useLocation()
  const isSelected = (section: string) =>
    location.split('/')[1] === section.toLowerCase()
  return (
    <Paper
      sx={{
        height: 'calc(100vh - 90px)',
        padding: '2rem 1rem',
        backgroundColor: '#263238',
        borderRadius: '0.75rem'
      }}
    >
      <Stack alignItems='center' mb={1}>
        <img src={schomentSVG} width={180} />
      </Stack>
      <Divider sx={{ backgroundColor: '#e3f2fd' }} />
      <MenuList sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {sections.map((section) => (
          <Link href={section.path} key={section.label}>
            <MenuItem
              sx={{
                height: 50,
                color: 'white',
                borderRadius: '0.75rem',
                '&:hover': {
                  backgroundColor: 'primary.main'
                },
                '&.Mui-selected': {}
              }}
              selected={isSelected(section.label)}
            >
              <ListItemIcon sx={{ color: 'common.white' }}>
                {section.icon}
              </ListItemIcon>
              <ListItemText sx={{ color: 'common.white' }}>
                {section.label}
              </ListItemText>
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Paper>
  )
}
