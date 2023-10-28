import { Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ROOMS from '../../mocks/Rooms.json'
import ViewLayout from '@components/ViewLayout'
import RoomsTable from '@components/Rooms/RoomsTable'
import { Room } from 'src/types'
import ButtonLink from '@components/ButtonLink'
import Title from '@components/Title'

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
        <Title>Rooms</Title>
        <ButtonLink href='rooms/create' startIcon={<AddIcon />}>
          New Room
        </ButtonLink>
      </Stack>
      <RoomsTable rooms={rooms} />
    </ViewLayout>
  )
}
