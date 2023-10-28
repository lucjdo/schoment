import { Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ViewLayout from '@components/ViewLayout'
import RoomsTable from '@components/Rooms/RoomsTable'
import ButtonLink from '@components/ButtonLink'
import Title from '@components/Title'
import { useRooms } from '@hooks/useRooms'

export default function Rooms() {
  const { data, isLoading } = useRooms()

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
        <ButtonLink
          href='rooms/create'
          startIcon={<AddIcon />}
          disabled={isLoading}
        >
          New Room
        </ButtonLink>
      </Stack>
      {isLoading ? 'Loading Rooms' : <RoomsTable rooms={data!} />}
    </ViewLayout>
  )
}
