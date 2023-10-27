import { Typography } from '@mui/material'
import ROOMS from '../../mocks/Rooms.json'
import ViewLayout from '@components/ViewLayout'
import RoomsTable from '@components/RoomsTable'
import { Room } from 'src/types'

export default function Rooms() {
  const rooms: Room[] = ROOMS as Room[]
  return (
    <ViewLayout>
      <Typography variant='h4'>Rooms</Typography>
      <RoomsTable rooms={rooms} />
    </ViewLayout>
  )
}
