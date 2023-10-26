import SchoolIcon from '@mui/icons-material/School'
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
        width: 300,
        maxWidth: '100%',
        height: 'calc(100vh - 60px)',
        pt: 3
      }}
    >
      <Stack
        direction='row'
        gap={1}
        alignItems='center'
        mb={1}
        justifyContent='center'
      >
        <SchoolIcon />
        <Typography variant='h5'>{appName}</Typography>
      </Stack>
      <MenuList>
        <Divider />
        {sections.map((section) => (
          <MenuItem key={section.label} sx={{ height: 50 }}>
            <ListItemIcon>{section.icon}</ListItemIcon>
            <ListItemText>{section.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  )
}
