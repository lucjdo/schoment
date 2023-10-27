import { Button, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ROOMS from '../../mocks/Rooms.json'
import ViewLayout from '@components/ViewLayout'
import RoomsTable from '@components/Rooms/RoomsTable'
import { Room } from 'src/types'
import { Link } from 'wouter'

export default function Rooms() {
  const rooms: Room[] = ROOMS as Room[]

  return (
    <ViewLayout>
      <Stack
        direction='row'
        sx={{
          justifyContent: 'space-between',
          mb: 2
        }}
      >
        <Typography variant='h4'>Rooms</Typography>
        <Link style={{ textDecoration: 'none' }} href='rooms/create'>
          <Button variant='contained' startIcon={<AddIcon />}>
            New Room
          </Button>
        </Link>
      </Stack>
      <RoomsTable rooms={rooms} />
    </ViewLayout>
  )
}
