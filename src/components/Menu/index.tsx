import SchoolIcon from '@mui/icons-material/School'
import { Link } from 'wouter'
import {
  ListItemText,
  Stack,
  MenuList,
  MenuItem,
  ListItemIcon,
  Typography,
  Divider,
  Paper
} from '@mui/material'
import { MenuProps } from './types'

export default function Menu({ sections, appName }: MenuProps) {
  return (
    <Paper
      sx={{
        height: 'calc(100vh - 90px)',
        padding: '2rem 1rem',
        backgroundColor: 'grey.800',
        borderRadius: '0.75rem'
      }}
    >
      <Stack
        direction='row'
        gap={1}
        alignItems='center'
        mb={1}
        justifyContent='center'
      >
        <SchoolIcon sx={{ color: 'common.white' }} />
        <Typography sx={{ color: 'common.white' }} variant='h5'>
          {appName}
        </Typography>
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
                }
              }}
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
